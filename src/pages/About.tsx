'use client';

import { motion } from 'framer-motion';
import { Code2, Briefcase, GraduationCap, Award, Users, Globe } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import SEO from '@/components/SEO';

const About = () => {
	const achievements = [
		{
			icon: <Code2 className="w-6 h-6" />,
			title: "10+ Projects",
			description: "Completed full-stack web applications"
		},
		{
			icon: <Briefcase className="w-6 h-6" />,
			title: "Professional Experience",
			description: "Software development projects"
		},
		{
			icon: <GraduationCap className="w-6 h-6" />,
			title: "4.0/4.0 GPA",
			description: "Current academic excellence"
		}
	];

	const interests = [
		"Web Development",
		"UI/UX Design",
		"Cloud Computing",
		"Database Systems",
		"Software Engineering",
		"Artificial Intelligence"
	];

	return (
		<>
			<SEO 
				title="About Daniel Liu - Software Developer"
				description="Learn about Daniel Liu, a passionate software developer specializing in full stack web development, database systems, and cloud computing. Based in California, US."
				canonicalUrl="http://localhost:3000/about"
			/>
			<div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20">
				<ScrollAnimation>
					<motion.h2 className="text-4xl font-bold mb-8 gradient-text">
						About Me
					</motion.h2>
				</ScrollAnimation>

				<div className="grid md:grid-cols-2 gap-8">
					<ScrollAnimation>
						<div className="aspect-square overflow-hidden rounded-2xl">
							<img
								src="/profile/profile.jpg"
								alt="Daniel Liu - Software Developer"
								className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
							/>
						</div>
					</ScrollAnimation>

					<ScrollAnimation className="space-y-6">
						<div className="space-y-4">
							<p className="text-gray-300 leading-relaxed">
								Hi, I'm Daniel Liu, a Senior Software Engineer passionate about building scalable, reliable, and impactful digital solutions. With over 10 years of experience in software development, I have worked across fintech, healthcare, eCommerce, and enterprise platforms, helping businesses transform ideas into powerful products.
							</p>
							<p className="text-gray-300 leading-relaxed">
								My expertise spans full-stack development, cloud-native applications, microservices architecture, AI integrations, and modern web and mobile experiences. I enjoy working with technologies like Java, Python, TypeScript, React, React Native, Node.js, and cloud platforms to create solutions that are fast, secure, and easy to maintain.
							</p>
							<p className="text-gray-300 leading-relaxed">
								Throughout my career, I have designed enterprise systems, built AI-powered applications, optimized high-performance platforms, and collaborated with teams to deliver products used by real-world customers. I believe great software comes from a combination of strong engineering principles, thoughtful design, and a deep understanding of user needs.
							</p>
							<p className="text-gray-300 leading-relaxed">
								Beyond writing code, I enjoy solving complex problems, exploring emerging technologies, mentoring developers, and continuously improving my craft. My goal is to create software that not only works well but also delivers meaningful value to people and businesses.
							</p>
						</div>

						<ScrollAnimation>
							<div className="pt-4">
								<h3 className="text-2xl font-semibold mb-4 gradient-text">Quick Facts</h3>
								<ul className="list-none space-y-3">
									{["Based in California, US", "BSc in Computer Science - 3.7/4.0 GPA"].map((fact, index) => (
										<motion.li
											key={fact}
											className="flex items-center space-x-2 text-gray-300"
										>
											<span className="w-2 h-2 bg-white rounded-full" />
											<span>{fact}</span>
										</motion.li>
									))}
								</ul>
							</div>
						</ScrollAnimation>

						<ScrollAnimation>
							<div className="flex justify-start space-x-4">
								<a
									href="/files/cv_pdf/Daniel_Liu_Senior_Software_Engineer_Resume.pdf"
									target="_blank"
									rel="noopener noreferrer"
									className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
								>
									Download CV
								</a>
								<a
									href="/skills"
									className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
								>
									My Skills
								</a>
							</div>
						</ScrollAnimation>
					</ScrollAnimation>
				</div>

				<ScrollAnimation>
					<div className="mt-16">
						<h3 className="text-2xl font-semibold mb-8 gradient-text">Achievements</h3>
						<div className="grid md:grid-cols-3 gap-6">
							{achievements.map((achievement, index) => (
								<ScrollAnimation key={achievement.title}>
									<div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
										<div className="text-white mb-4">{achievement.icon}</div>
										<h4 className="text-xl font-semibold mb-2">{achievement.title}</h4>
										<p className="text-gray-400">{achievement.description}</p>
									</div>
								</ScrollAnimation>
							))}
						</div>
					</div>
				</ScrollAnimation>

				<ScrollAnimation>
					<div className="mt-16">
						<h3 className="text-2xl font-semibold mb-8 gradient-text">Areas of Interest</h3>
						<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
							{interests.map((interest, index) => (
								<ScrollAnimation key={interest}>
									<div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm flex items-center gap-3">
										<Globe className="w-5 h-5 text-gray-400" />
										<span className="text-gray-300">{interest}</span>
									</div>
								</ScrollAnimation>
							))}
						</div>
					</div>
				</ScrollAnimation>
			</div>
		</>
	);
};

export default About;
