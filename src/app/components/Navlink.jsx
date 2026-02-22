import Link from"next/link";

const Navlink = ({ href, title}) => {
    return (
        <Link 
            href={href} 
            style={{WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', textRendering: 'optimizeLegibility'}}
            className="block py-2 px-4 text-white/70 text-sm font-medium rounded-lg hover:text-white hover:bg-gradient-to-r hover:from-primary-500/20 hover:to-secondary-500/20 hover:shadow-lg hover:shadow-primary-500/20 hover:scale-105 transition-all duration-300 ease-out border border-transparent hover:border-primary-500/30">
            {title}
        </Link>
    )
}

export default Navlink;