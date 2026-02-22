"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CourseGraph = ({ courses, categories, dependencies, descriptions }) => {
    const containerRef = useRef(null);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [hoveredCourse, setHoveredCourse] = useState(null);
    const [nodes, setNodes] = useState([]);

    // Color scheme for different categories
    const categoryColors = {
        "Computer Science Foundations": "#ec4899", // pink
        "Information Internetworks": "#3b82f6", // blue
        "Intelligence": "#10b981", // green
        "Mathematics": "#8b5cf6", // purple
        "Professional Settings": "#f59e0b", // amber
        "All Courses": "#06b6d4" // cyan
    };

    useEffect(() => {
        if (!containerRef.current) return;

        const calculateNodePositions = () => {
            if (!containerRef.current) return;

            const containerWidth = containerRef.current.offsetWidth;
            const containerHeight = containerRef.current.offsetHeight;

            const nodeWidth = 140; // Approximate width of a node
            const nodeHeight = 50; // Approximate height of a node
            const verticalPadding = 60; // Padding top and bottom
            const horizontalPadding = 20; // Minimal horizontal padding
            
            const availableHeight = containerHeight - (verticalPadding * 2);
            const availableWidth = containerWidth - (horizontalPadding * 2);

            // Create nodes with fixed positions in a grid layout based on categories
            const courseNodes = [];
            let categoryIndex = 0;
            const categoryCount = Object.keys(categories).length;
            
            // Ensure vertical spacing fits all categories within visible height
            const verticalSpacing = availableHeight / categoryCount;

            Object.entries(categories).forEach(([category, categoryCourses]) => {
                // Calculate Y position for this category row (centered within its allocated space)
                const yBase = verticalPadding + (verticalSpacing * categoryIndex) + (verticalSpacing / 2);
                
                const numNodes = categoryCourses.length;
                
                // Calculate total width this row will occupy
                const spaceBetweenNodes = 20; // Space between adjacent nodes
                const totalRowWidth = (numNodes * nodeWidth) + ((numNodes - 1) * spaceBetweenNodes);
                
                // Calculate starting X position to center this row
                const startX = (containerWidth - totalRowWidth) / 2;

                categoryCourses.forEach((course, index) => {
                    // Position each node with equal spacing between them
                    const baseX = startX + (nodeWidth / 2) + (index * (nodeWidth + spaceBetweenNodes));
                    const baseY = yBase;
                    
                    courseNodes.push({
                        id: course,
                        baseX: baseX,
                        baseY: baseY,
                        x: baseX,
                        y: baseY,
                        category: category,
                        color: categoryColors[category] || "#6366f1",
                        // Extract short name (course code)
                        shortName: course.split(':')[0].trim()
                    });
                });
                
                categoryIndex++;
            });

            setNodes(courseNodes);
        };

        // Initial calculation
        calculateNodePositions();

        // Recalculate on window resize and when container size changes
        const resizeObserver = new ResizeObserver(() => {
            calculateNodePositions();
        });

        resizeObserver.observe(containerRef.current);

        return () => {
            resizeObserver.disconnect();
        };
    }, [categories, categoryColors]);

    const handleNodeClick = (courseId) => {
        setSelectedCourse(selectedCourse === courseId ? null : courseId);
    };

    const handleNodeHover = (courseId) => {
        setHoveredCourse(courseId);
        if (courseId) {
            setSelectedCourse(courseId);
        }
    };

    const isConnected = (nodeId) => {
        if (!selectedCourse) return false;
        return (
            dependencies[selectedCourse]?.includes(nodeId) ||
            dependencies[nodeId]?.includes(selectedCourse)
        );
    };

    const displayCourse = selectedCourse;

    return (
        <div className="flex flex-col w-full h-full bg-[#0a0a0a]">
            {/* Top Panel: Graph View */}
            <div ref={containerRef} className="relative flex-1 w-full border-b border-primary-500/20 overflow-hidden min-h-[400px]">
                <svg className="absolute inset-0 w-full h-full">
                    {/* Draw dependency edges */}
                    {Object.entries(dependencies).map(([courseId, prereqs]) => {
                        const node = nodes.find(n => n.id === courseId);
                        if (!node) return null;

                        return prereqs.map((prereqId) => {
                            const prereq = nodes.find(n => n.id === prereqId);
                            if (!prereq) return null;

                            const isHighlighted = selectedCourse === courseId || 
                                                selectedCourse === prereqId ||
                                                hoveredCourse === courseId || 
                                                hoveredCourse === prereqId;

                            return (
                                <g key={`${courseId}-${prereqId}`}>
                                    <defs>
                                        <marker
                                            id={`arrow-${courseId}-${prereqId}`}
                                            markerWidth="10"
                                            markerHeight="10"
                                            refX="9"
                                            refY="3"
                                            orient="auto"
                                            markerUnits="strokeWidth"
                                        >
                                            <path
                                                d="M0,0 L0,6 L9,3 z"
                                                fill={isHighlighted ? "#3b82f6" : "rgba(255, 255, 255, 0.2)"}
                                            />
                                        </marker>
                                    </defs>
                                    <line
                                        x1={node.x}
                                        y1={node.y}
                                        x2={prereq.x}
                                        y2={prereq.y}
                                        stroke={isHighlighted ? "#3b82f6" : "rgba(255, 255, 255, 0.15)"}
                                        strokeWidth={isHighlighted ? "2" : "1"}
                                        markerEnd={`url(#arrow-${courseId}-${prereqId})`}
                                        opacity={isHighlighted ? 0.8 : 0.3}
                                    />
                                </g>
                            );
                        });
                    })}
                </svg>

                {/* Render nodes */}
                {nodes.map((node) => {
                    const isSelected = selectedCourse === node.id;
                    const isHovered = hoveredCourse === node.id;
                    const connected = isConnected(node.id);

                    return (
                        <motion.div
                            key={node.id}
                            className="absolute cursor-pointer group"
                            style={{
                                left: node.x,
                                top: node.y,
                                transform: 'translate(-50%, -50%)',
                            }}
                            onMouseEnter={() => handleNodeHover(node.id)}
                            onMouseLeave={() => setHoveredCourse(null)}
                            onClick={() => handleNodeClick(node.id)}
                            whileHover={{ scale: 1.15, zIndex: 100 }}
                            animate={{
                                scale: isSelected ? 1.1 : 1,
                            }}
                        >
                            {/* Pulse ring for hover indication */}
                            <motion.div
                                className="absolute inset-0 rounded-lg"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 0, 0.5],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                style={{
                                    backgroundColor: node.color,
                                    filter: 'blur(8px)',
                                }}
                            />
                            
                            <div
                                className={`relative px-4 py-2.5 rounded-lg border-2 transition-all duration-200 ${
                                    isSelected || isHovered
                                        ? 'shadow-xl border-white'
                                        : 'shadow-lg border-white/30 group-hover:border-white/60'
                                }`}
                                style={{
                                    backgroundColor: isSelected || isHovered ? node.color : node.color + 'ee',
                                    boxShadow: isSelected || isHovered 
                                        ? `0 0 30px ${node.color}, 0 0 60px ${node.color}40` 
                                        : connected 
                                        ? `0 0 15px ${node.color}` 
                                        : `0 4px 6px rgba(0, 0, 0, 0.3)`,
                                    minWidth: '140px',
                                }}
                            >
                                <p className="text-white text-sm font-bold text-center whitespace-nowrap drop-shadow-lg">
                                    {node.shortName}
                                </p>
                                
                                {/* Hover indicator */}
                                <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 animate-ping" />
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Bottom Panels: Categories & Description */}
            <div className="h-[280px] shrink-0 grid grid-cols-3 bg-[#181818]">
                {/* Bottom Left: Course Categories */}
                <div className="col-span-1 border-r border-primary-500/20 p-6 overflow-y-auto">
                    <h4 className="text-lg font-semibold text-white mb-4">Course Categories</h4>
                    <div className="space-y-3">
                        {Object.entries(categories).map(([category, _]) => (
                            <div key={category} className="flex items-center gap-3">
                                <div 
                                    className="w-4 h-4 rounded-full shadow-sm"
                                    style={{ backgroundColor: categoryColors[category] || "#6366f1" }}
                                />
                                <span className="text-sm text-[#ADB7BE]">{category}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Right: Course Description */}
                <div className="col-span-2 p-6 overflow-y-auto relative bg-[#121212]">
                    {!displayCourse ? (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-gradient-to-r from-primary-500/20 to-secondary-500/20 backdrop-blur-sm border border-primary-500/30 rounded-full px-6 py-3 text-center shadow-lg">
                                <p className="text-base text-white">
                                    <span className="text-primary-300 font-bold">💡 Hover</span> over course nodes to explore details
                                </p>
                            </div>
                        </div>
                    ) : (
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={displayCourse}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="w-full h-full"
                            >
                                <h3 className="text-2xl font-bold text-white mb-3">{displayCourse}</h3>
                                <p className="text-[#ADB7BE] mb-6 text-base leading-relaxed">{descriptions[displayCourse]}</p>
                                
                                {dependencies[displayCourse] && dependencies[displayCourse].length > 0 && (
                                    <div>
                                        <h4 className="text-sm font-semibold text-primary-400 mb-2 uppercase tracking-wider">Prerequisites</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {dependencies[displayCourse].map((prereq, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-full text-sm text-[#ADB7BE]">
                                                    {prereq}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CourseGraph;
