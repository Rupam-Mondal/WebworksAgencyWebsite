import React from "react";
import { motion } from "framer-motion";

const Paragraph = ({ children, className }) => (
    <p className={`text-gray-400 text-lg leading-relaxed text-center ${className}`}>
        {children}
    </p>
);

export default function Team() {
    const members = [
        {
            name: "Rupam Mondal",
            title: "Full Stack Developer",
            image: "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?auto=format&fit=crop&w=800&q=60",
            description:
                "2+ years of experience in full stack development. Built and deployed multiple production-ready applications. Worked as an intern at iTel India and did freelance projects like Manpand.us. Passionate about building impactful digital solutions.",
        },
        {
            name: "Sandipan Seth",
            title: "Full Stack Developer | ML Expert",
            image: "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?auto=format&fit=crop&w=800&q=60",
            description:
                "1+ year of experience in development. Built several full-stack apps with a focus on performance and scalability. Also skilled in Machine Learning, combining data with software to deliver smart solutions.",
        },
        {
            name: "Sohom Das",
            title: "UI/UX Designer & Frontend Developer",
            image: "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?auto=format&fit=crop&w=800&q=60",
            description:
                "Creative designer with strong frontend development skills. Designed and delivered modern, user-focused interfaces for a variety of clients. Passionate about aesthetics and usability.",
        },
        {
            name: "Debdeep Guha",
            title: "Frontend Developer | ML Enthusiast",
            image: "https://images.unsplash.com/photo-1692445381633-7999ebc03730?auto=format&fit=crop&w=800&q=60",
            description:
                "Specializes in building engaging web experiences with simple JavaScript. Created multiple interactive games and web projects. Also explores the intersection of ML and frontend innovation.",
        },
    ];

    return (
        <div id="team" className="min-h-screen flex flex-col items-center justify-center p-4 text-center px-10 py-20">
            <div className="w-full max-w-6xl">
                {/* Text sections */}
                <div class="text-center space-y-4 pb-6 mx-auto">
                    <h2 class="text-sm font-mono font-medium tracking-wider uppercase text-[#FF1C46]">
                        Team
                    </h2>
                </div>
                <h2 className="text-4xl font-bold text-black mb-10">Meet Our Team</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-16">
                    {members.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: -50, rotate: 0 }}
                            animate={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? 3 : -3 }}
                            whileHover={{
                                rotate: index % 2 === 0 ? 6 : -6,
                            }}
                            transition={{ duration: 0.2, delay: index * 0.1 }}
                            className="bg-black border border-[#FF1C46] rounded-xl overflow-hidden shadow-lg transition duration-200"


                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-white text-xl font-semibold">{member.name}</h3>
                                <p className="text-indigo-400 font-medium mb-2">{member.title}</p>
                                <p className="text-gray-400 text-sm">{member.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
