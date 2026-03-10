import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {

    const image =
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'

    const values = [
        {
            title: 'Quality',
            description: 'We deliver excellence in every project and service we provide.',
        },
        {
            title: 'Integrity',
            description: 'Honesty and transparency guide everything we do.',
        },
        {
            title: 'Community',
            description: 'We are committed to serving and supporting our people.',
        },
    ]

    const [stopScroll, setStopScroll] = React.useState(false);
    const cardData = [
        {
            title: "Unlock Your Creative Flow",
            image: "https://images.unsplash.com/photo-1543487945-139a97f387d5?w=1200&auto=format&fit=crop&q=60",
        },
        {
            title: "Design Your Digital Future",
            image: "https://images.unsplash.com/photo-1529254479751-faeedc59e78f?w=1200&auto=format&fit=crop&q=60",
        },
        {
            title: "Build with Passion, Ship with Pride",
            image: "https://images.unsplash.com/photo-1618327907215-4e514efabd41?w=1200&auto=format&fit=crop&q=60",
        },
        {
            title: "Think Big, Code Smart",
            image: "https://images.unsplash.com/photo-1583407723467-9b2d22504831?w=1200&auto=format&fit=crop&q=60",
        },
    ];

    return (
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
            {/* Hero section */}
            <header className="text-center mb-16 md:mb-20">
                <h1 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-4">
                    About Us
                </h1>
                <p className="text-lg text-black/80 max-w-2xl mx-auto leading-relaxed">
                    Ediot Television is a platform for services to the people. Learn more about our story and the team behind what we do.
                </p>
            </header>

            {/* Main profile / story card */}
            <section className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden mb-16">
                <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative aspect-square md:aspect-auto md:min-h-[360px]">
                        <img
                            src={image}
                            alt="Munnisami"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-8 md:p-10 flex flex-col bg-gray-900 justify-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Munnisami
                        </h2>
                        <p className="text-white leading-relaxed">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam rem aliquam, unde illum cumque repellat corrupti! Quibusdam labore ipsam pariatur accusantium porro ab tempore provident architecto, enim nisi, iure qui molestiae dolorem eligendi molestias beatae sint consequuntur vel eaque, aut unde. Minus, aliquam, dolorum corrupti consequuntur quia labore, fugit rerum mollitia consequatur ut reprehenderit repellendus.
                        </p>
                        <p className="text-white leading-relaxed mt-4">
                            Aut sequi eligendi illum unde distinctio cumque quo minus officiis dolorem consectetur provident libero ducimus modi, id iusto laboriosam? Ad commodi impedit amet laboriosam! Quos fuga, officia quibusdam neque possimus et ducimus quidem! Voluptatum hic ipsa quisquam? Suscipit, vero nisi error voluptas labore ut illo!
                        </p>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-10">
                    What We Stand For
                </h2>
                <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
                    {values.map((item, index) => {
                        const isDark = index === 0 || index === 2
                        return (
                            <div
                                key={item.title}
                                className={`rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow ${isDark
                                    ? 'bg-gray-900 border border-gray-800'
                                    : 'bg-white border border-slate-100'
                                    }`}
                            >
                                <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                                    {item.title}
                                </h3>
                                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-black/80'}`}>
                                    {item.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </section>


            {/* Gallery */}
            <section className="mt-20 mb-12">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
                        Gallery
                    </h2>
                    <p className="text-black/70 text-sm md:text-base max-w-xl mx-auto">
                        A glimpse of what we do. Hover over the strip to pause.
                    </p>
                </div>

                <div
                    className="overflow-hidden w-full relative max-w-6xl mx-auto rounded-2xl border border-gray-700 bg-gray-900 py-8"
                    onMouseEnter={() => setStopScroll(true)}
                    onMouseLeave={() => setStopScroll(false)}
                >
                    <div className="absolute left-0 top-0 h-full w-16 md:w-24 z-10 pointer-events-none bg-gradient-to-r from-gray-900 to-transparent" />
                    <div
                        className="marquee-inner flex w-fit"
                        style={{
                            animationPlayState: stopScroll ? 'paused' : 'running',
                            animationDuration: cardData.length * 2500 + 'ms',
                        }}
                    >
                        <div className="flex items-center">
                            {[...cardData, ...cardData].map((card, index) => (
                                <div
                                    key={index}
                                    className="w-52 md:w-64 mx-3 md:mx-4 h-64 md:h-72 relative group flex-shrink-0"
                                >
                                    <div className="w-full h-full rounded-xl overflow-hidden shadow-lg border border-slate-200/80 bg-white transition-transform duration-300 group-hover:scale-[1.03] group-hover:shadow-xl">
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                                            <p className="text-white text-base md:text-lg font-semibold text-center drop-shadow-lg">
                                                {card.title}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute right-0 top-0 h-full w-16 md:w-24 z-10 pointer-events-none bg-gradient-to-l from-gray-900 to-transparent" />
                </div>
            </section>


            <style>{`
                .marquee-inner {
                    animation: marqueeScroll linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
            {/* CTA */}
            <section className="text-center">
                <p className="text-black/90 mb-6 max-w-xl mx-auto">
                    Want to work with us or learn more? We’d love to hear from you.
                </p>
                <Link
                    to="/contact"
                    className="inline-block px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                >
                    Get in Touch
                </Link>
            </section>

        </div>
    )
}

export default About
