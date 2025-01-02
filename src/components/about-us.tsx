"use client"
import { useRouter } from "next/navigation";

export default function AboutUs() {
    const router = useRouter();

    return (
        <div>
            <section className="h-screen py-14 lg:py-24 relative z-0 bg-gray-50 bg-cover bg-center bg-no-repeat lg:overflow-hidden"
                style={{ backgroundImage: `url(/about-us-cover.jpg)` }}
            >
                <div 
                    className="absolute inset-0 bg-black bg-opacity-50 z-[-1]" 
                    aria-hidden="true"
                ></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center mt-28 sm:mt-36 lg:mt-0 ">
                    <h1
                        className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-white mb-5 md:text-5xl md:leading-normal glow-text">
                        Discover Innovation with <span className="glow-text ">WebElectra</span>
                    </h1>
                    <button className=" bg-gradient-to-br from-cyan-200 via-cyan-700 to-cyan-900 group-hover:opacity-100 text-lg font-semibold px-5 py-2 text-white rounded-xl hover:bg-cyan-500 hover:opacity-90 "
                     onClick={() => {
                        router.push("/contact-us")
                     }}
                     >Contact Us</button>
                </div>
            </section>

    <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
                <div className="img-box">
                    <img src="/about-us-3.png" alt="About Us tailwind page"
                        className="max-lg:mx-auto object-cover" />
                </div>
                <div className="lg:pl-[100px] flex items-center">
                    <div className="data w-full">
                        <h2
                            className="font-manrope font-bold text-4xl lg:text-5xl text-foreground mb-9 max-lg:text-center relative">
                            About
                            Us </h2>
                        <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                            Driven by a passion for seamless user experiences, we've meticulously curated WebElectra
                            to empower creators, designers, and developers alike. Our mission is to provide a
                            comprehensive toolkit,
                            enabling you to build intuitive, beautiful interfaces that resonate with users on every
                            interaction.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">

                <div className="lg:pr-24 flex items-center">
                    <div className="data w-full">
                        <img src="/about-us-4.jpeg" alt="About Us tailwind page"
                            className="block lg:hidden mb-9 mx-auto object-cover" />
                        <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-foreground mb-9 max-lg:text-center">We
                            are Creative Since 2005</h2>
                        <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                            WebElectra isn’t just a collection of components and guidelines; it's a philosophy. We go
                            beyond aesthetics, prioritizing accessibility, scalability, and usability. Every element,
                            from the tiniest
                            detail to the grandest layout, is meticulously crafted to enhance functionality and elevate
                            user
                            satisfaction.
                        </p>
                    </div>
                </div>
                <div className="img-box ">
                    <img src="/about-us-4.jpeg" alt="About Us tailwind page"
                        className="hidden lg:block object-cover" />
                </div>
            </div>
        </div>
    </section>

    <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">Our results in numbers</h2>
            <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
                <div
                    className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
                    <div className="flex gap-5">
                        <div className="font-manrope text-2xl font-bold text-primary">
                            100K+
                        </div>
                        <div className="flex-1">
                            <h4 className="text-xl text-gray-900 font-semibold mb-2">Happy Customers</h4>
                            <p className="text-xs text-gray-500 leading-5">Join a growing community of satisfied customers who trust us for quality devices and exceptional service.</p>
                        </div>
                    </div>
                </div>
                <div
                    className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
                    <div className="flex gap-5">
                        <div className="font-manrope text-2xl font-bold text-primary">
                            125+
                        </div>
                        <div className="flex-1">
                            <h4 className="text-xl text-gray-900 font-semibold mb-2">Brands Available</h4>
                            <p className="text-xs text-gray-500 leading-5">Explore a wide selection of top-rated brands, offering the latest and most trusted devices to meet all your needs. </p>
                        </div>
                    </div>
                </div>
                <div
                    className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
                    <div className="flex gap-5">
                        <div className="font-manrope text-2xl font-bold text-primary">
                            95%
                        </div>
                        <div className="flex-1">
                            <h4 className="text-xl text-gray-900 font-semibold mb-2">Satisfaction Rate</h4>
                            <p className="text-xs text-gray-500 leading-5">Our commitment to quality and service ensures customer satisfaction, reflecting trust and excellence in every purchase.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="py-14 lg:py-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-24">
                <h2 className="font-manrope text-4xl text-center font-bold text-foreground mb-6">Meet our soldier of finance
                </h2>
                <p className="text-lg text-gray-500 text-center">We provide all the advantage that can simplify all your
                    financial and banking support without any further issues</p>
            </div>
        </div>
    </section>
    <section className="py-20 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-primary rounded-2xl p-8 xl:p-11">
                <h2 className="font-manrope text-4xl text-white text-center font-bold mb-4">Subscribe to the latest offer
                </h2>
                <p className="text-white-200 text-center mb-11 max-lg:max-w-2xl mx-auto">Join our community of subscribers
                    and receive regular
                    updates delivered straight to your inbox. It's quick, easy, and free</p>
                <div
                    className="max-w-md mx-auto lg:bg-transparent lg:bg-cyan-800 lg:border border-gray-300 rounded-3xl max-lg:py-3 lg:rounded-full lg:h-12 lg:p-1.5 lg:flex-row gap-6 lg:gap-0 flex-col flex items-center justify-between">
                    <input type="text" name="email" 
                        className="py-2 px-6 bg-transparent rounded-full max-lg:border border-gray-300  text-gray-100 max-lg:text-center placeholder:text-gray-400 focus:outline-none flex-1 w-full lg:w-auto lg:py-2 lg:px-6 lg:bg-transparent"
                        placeholder="Enter your email.." />
                    <button type="submit"
                        className="py-2 px-5 text-sm bg-cyan-500 shadow-md rounded-full  text-white font-semibold hover:bg-cyan-700">Subscribe</button>
                </div>
            </div>
        </div>
    </section>
        </div>    
    )
}


