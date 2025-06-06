import { FaGithub, FaLinkedin, FaArrowUp, FaTwitter, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-gray-900 text-white py-10 px-5 md:px-20">
            <div className="grid grid-cols-2 ">
                {/* Footer Content */}
                <div>
                    <div className="container mx-auto ">
                        <div className=" flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            {/* Branding / Logo */}
                            <div>
                                <h1 className="text-2xl font-bold text-purple-400 sm:text-3xl ">Shilesh Mavchi</h1>
                                <p className="text-sm mt-2 text-gray-400 hover:text-orange-400">
                                    Full Stack Developer | React.js | Node.js | Tailwind CSS
                                </p>
                            </div>

                            {/* Navigation Links */}
                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold">Quick Links</h3>
                                <ul className="space-y-1 text-sm text-gray-300 ">
                                    <li><a href="#home" className="hover:text-purple-400">Home</a></li>
                                    <li><a href="#about" className="hover:text-purple-400">About</a></li>
                                    <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
                                    <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
                                </ul>
                            </div>

                            {/* Social Links */}
                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold">Social Connect</h3>
                                <div className="flex gap-8 text-3xl">
                                    <a
                                        href="https://github.com/shileshmavchi"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-purple-400"
                                    >
                                        <FaGithub />
                                    </a>
                                    <a
                                        href="https://linkedin.com/in/shileshmavchi"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-purple-400"
                                    >
                                        <FaLinkedin />
                                    </a>
                                    <a
                                        href="https://twitter.com/shileshmavchi"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-purple-400"
                                    >
                                        <FaTwitter />
                                    </a>
                                    <a
                                        href="https://instagram.com/shileshmavchi"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-purple-400"
                                    >
                                        <FaInstagram />
                                    </a>
                                    <a
                                        href="https://facebook.com/shileshmavchi"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-purple-400"
                                    >
                                        <FaFacebook />
                                    </a>
                                    <a
                                        href="https://wa.me/91XXXXXXXXXX"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-purple-400"
                                    >
                                        <FaWhatsapp />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="content-center">
                    <div className="flex-1 max-w-md">
                        <h3 className="text-lg font-semibold mb-4">Contact Me</h3>
                        <form className="flex flex-col gap-4">
                            <input type="text" placeholder="Your Name" className="p-2 rounded bg-gray-800 border border-gray-700 text-white" />
                            <input type="email" placeholder="Your Email" className="p-2 rounded bg-gray-800 border border-gray-700 text-white" />
                            <textarea placeholder="Your Message" rows="4" className="p-2 rounded bg-gray-800 border border-gray-700 text-white"></textarea>
                            <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Divider and Bottom */}
            <div className="mt-10 border-t border-gray-700 pt-6 flex justify-between items-center text-sm text-gray-400">
                <p>© {new Date().getFullYear()} Shilesh Mavchi. All rights reserved.</p>
                <button
                    onClick={scrollToTop}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-full"
                >
                    <FaArrowUp />
                </button>
            </div>
        </footer>
    );
}
