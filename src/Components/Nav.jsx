import { useState, useEffect } from "react";


const Nav = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
        { name: 'About', path: '/about' },
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        handleScroll(); 
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    return (
        <>
        {/* Navbar: floating pill with curved/circle ends */}
        <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:px-6 md:pt-5">
            <div
                className={`w-full max-w-6xl mx-auto rounded-full transition-all duration-500 overflow-hidden shadow-md ${isScrolled ? "bg-white text-gray-900 shadow-lg" : "bg-gray-900 text-white shadow-black/20"}`}
            >
                <div className="flex items-center justify-between px-5 md:px-8 lg:px-10 py-3.5 md:py-4">
                    {/* Logo */}
                    <a href="/" className="flex items-center select-none min-w-0">
                        <span className="text-lg md:text-xl font-bold tracking-tight truncate">
                            Ediot Television
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1 lg:gap-2">
                        {navLinks.map((link, i) => (
                            <a
                                key={i}
                                href={link.path}
                                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${isScrolled ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100" : "text-white/90 hover:text-white hover:bg-white/10"}`}
                            >
                                {link.name}
                            </a>
                        ))}
                      
                    </div>

                    {/* Desktop Right */}
                    <div className="hidden md:flex items-center gap-3">
                        <button type="button" aria-label="Search" className={`p-2 rounded-full transition-colors ${isScrolled ? "text-gray-600 hover:bg-gray-100" : "text-white/90 hover:bg-white/10"}`}>
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                        </button>
                       
                    </div>

                    {/* Mobile: menu button */}
                    <button
                        type="button"
                        aria-label="Open menu"
                        onClick={() => setIsMenuOpen(true)}
                        className="md:hidden p-2.5 rounded-xl transition-colors bg-white/10 hover:bg-white/20"
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <line x1="4" y1="6" x2="20" y2="6" />
                            <line x1="4" y1="12" x2="20" y2="12" />
                            <line x1="4" y1="18" x2="20" y2="18" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>

                {/* Mobile Menu - overlay and drawer */}
                <div className={`fixed inset-0 z-60 md:hidden transition-all duration-300 ${isMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
                    <div
                        role="button"
                        tabIndex={0}
                        onClick={() => setIsMenuOpen(false)}
                        onKeyDown={(e) => e.key === "Escape" && setIsMenuOpen(false)}
                        className={`absolute inset-0 bg-gray-900 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
                        aria-label="Close menu"
                    />
                    <div
                        className={`absolute top-0 right-0 h-full w-[85%] max-w-[320px] bg-white text-gray-900 shadow-2xl transition-transform duration-300 ease-out flex flex-col rounded-l-3xl overflow-hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between shrink-0 px-5 py-5 border-b border-gray-100">
                            <span className="text-lg font-bold tracking-tight text-gray-900">Ediot Television</span>
                            <button
                                type="button"
                                aria-label="Close menu"
                                className="rounded-full p-2.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 active:bg-gray-200 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>

                        {/* Links */}
                        <nav className="flex-1 overflow-auto px-3 py-4">
                            {navLinks.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block rounded-xl px-4 py-3.5 text-base font-medium text-gray-800 hover:bg-gray-100 active:bg-gray-200 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>

                        {/* Actions - full width */}
                        <div className="shrink-0 p-4 pt-2 pb-6">
                            <div className="flex flex-col gap-3">
                              
                                <button className="w-full py-3.5 px-4 text-sm font-semibold rounded-full bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-700 transition-colors">
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default Nav;