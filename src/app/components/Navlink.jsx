import Link from"next/link";

const Navlink = ({ href, title}) => {
    return (
        <Link 
            href={href} 
            style={{WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', textRendering: 'optimizeLegibility'}}
            className="block py-2.5 px-5 text-nord-4 text-base sm:text-lg font-semibold rounded-lg hover:text-nord-6 hover:bg-nord-2 transition-all duration-300 ease-out border border-transparent hover:border-nord-3">
            {title}
        </Link>
    )
}

export default Navlink;