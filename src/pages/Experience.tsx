'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Building2, ExternalLink, ArrowRight } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import SEO from '@/components/SEO';

const experiences = [
	{
		title: "Senior Software Engineer",
		company: "Airbnb",
		location: "Sanfrancisco, California, US",
		period: "04/2023 - present",
		logo: "/logo/airbnb.jpg",
		type: "Contract",
		description: [
			"Architected and implemented cloud-native solutions on Oracle Cloud Infrastructure, utilizing microservices, serverless technologies, and event-driven architectures to build scalable, high-performance applications for multinational fintech and healthcare clients.",
			"Built and optimized frontend applications using React, Next.js, and TypeScript for Oracle Cloud solutions, enhancing user experiences across multiple platforms by ensuring responsive, high-performance interfaces.",
			"Implemented RESTful APIs with Python, FastAPI, and Nest.js integrated with Oracle Cloud Infrastructure (OCI) Object Storage, enabling secure data sharing across healthcare applications while maintaining HIPAA compliance. ",
			"Developed AI-powered healthcare solutions using LangChain, integrating NLP models for real-time extraction of medical insights from unstructured patient data, enabling faster decision-making for clinicians.",
			"Engineered RAG pipelines with LangChain, combining retrieval-based data from Oracle Autonomous Database with generative models (OpenAI, Hugging Face) to automate patient outcome predictions and treatment recommendations,enhancing clinical decision support and improving healthcare delivery.", 
			"Designed event-driven serverless workflows for Oracle Cloud Payments using OCI Functions, Apache Kafka, and FastAPI to process millions of real-time transactions with 99.99% availability and PCI DSS compliance. ",
			"Led the redesign of Oracle Fusion ERP financial modules by developing scalable microservices with Java, Spring Boot, and Oracle ADF while optimizing Oracle SQL queries, achieving 32% faster transaction processing for enterprise clients. ",
			"Spearheaded CI/CD adoption with Jenkins, GitHub Actions, and Oracle DevOps by integrating automated testing frameworks such as Jest, Cypress, and PyTest, reducing release cycle time by 40% while improving deployment reliability. ",
			"Enhanced OCI’s multi-cloud support by integrating AWS S3 and Azure Blob Storage with Terraform, Ansible, and Vault for secret management, enabling hybrid cloud strategies that increased customer retention."
		],
		tectSkills: ["Java", "Python", "TypeScript", "React", "Next.js", "FastAPI", "Spring Boot", "LangChain", "Oracle Cloud Infrastructure (OCI)", "Oracle SQL", "Apache Kafka", "Docker", "Kubernetes", "Jenkins", "Terraform"]
	},
	{
		title: "Tech Lead",
		company: "UKG",
		location: "Weston, Florida, US",
		period: "09/2020 - 03/2023",
		logo: "/logo/ukg.jpg",
		type: "Fulltime",
		// image: "/experience/bharatIntern_page.jpg",
		// certificateUrl: "/files/experience_pdf/bharatIntern.pdf",
		description: [
			"Introduced micro-frontend architecture to a multi-tenant SaaS product, leveraging React, Next.js, TypeScript, Module Federation, and Docker, reducing release bottlenecks and cutting delivery cycles.", 
			"Engineered an AI-powered security analytics system for a government contractor, applying Python, TensorFlow, and OpenCV to deliver real-time video analysis of crowds, reducing incident response times.", 
			"Implemented robust backend APIs using Python, Flask, and Express.js to handle complex business logic, user authentication, role-based access, and real-time data updates, improving system reliability and reducing response times,fully integrated backend APIs with PostgreSQL and Redis caching for high performance.",
			"Led development of a blockchain-based NFT marketplace for a fintech startup, using Solidity, Web3.js, andHardhat, supporting over 120K token minting and exchange transactions within its first quarter.", 
			"Built serverless backend microservices for a travel booking system using AWS Lambda, API Gateway, and DynamoDB, scaling automatically during seasonal traffic spikes, cutting infrastructure costs.",
			"Developed and integrated CMS and CRM solutions, customizing WordPress and WooCommerce for seamless eCommerce functionality, while connecting CRM systems to backend APIs for automated lead management and personalized marketing, improving both content management and customer engagement workflows." ,
			"Implemented monitoring and alerting solutions using Prometheus for metrics collection and Grafana for real-time data visualization, ensuring system performance and reliability across microservices and reducing incident response times by 30%. ",

		],
		tectSkills: ["React", "Next.js", "TypeScript", "Python", "Flask", "Express.js", "TensorFlow", "Solidity", "AWS Lambda", "PostgreSQL", "Redis", "Docker", "Kubernetes", "Prometheus", "Grafana"]
	},
	{
		title: "Software Engineer",
		company: "Paylocity",
		location: "Schaumburg, Illinois, US",
		period: "04/2018 - 08/2020",
		logo: "/logo/paylocity.jpg",
		type: "Fulltime",
		// image: "/experience/codeClause_page.jpg",
		// certificateUrl: "/files/experience_pdf/codeClause.pdf",
		description: [
			"Developed the Electronic Parts Catalog using PHP, Laravel, MySQL, and jQuery, indexing over 2M+ machine components with advanced filters, reducing part lookup time for manufacturers. ",
			"Built an integrated B2B e-commerce solution with Laravel, Stripe, and PayPal APIs, supporting over $10 million in annual aftermarket parts sales while ensuring PCI-DSS compliance. ",
			"Optimized catalog performance through Redis caching and MySQL query tuning, cutting page load times from 4.2 seconds to 1.1 seconds, which improved SEO rankings and user engagement. ",
			"Delivered a customer support portal with Vue.js and REST APIs, integrating case management with ERP workflows, reducing resolution times by 30% for equipment manufacturers. ",
			"Implemented CI/CD pipelines with Jenkins and GitHub Actions, introducing automated PHPUnit and Cypress tests, which accelerated deployment frequency from monthly to bi-weekly. ",
			"Developed a 3D product configurator tool with JavaScript and Node.js microservices, enabling customers to customize machinery builds online, which increased conversion rates by 22%. ",
			"Partnered with UX designers to define persona-driven workflows in Figma, ensuring ease of adoption for nontechnical manufacturing clients, resulting in a 38% increase in user adoption."
		],
		tectSkills: ["PHP", "Laravel", "JavaScript", "Vue.js", "Node.js", "MySQL", "Redis", "REST APIs", "Stripe API", "Jenkins", "GitHub Actions", "PHPUnit"]
	},
	{
		title: "FullStack Developer",
		company: "Appen",
		location: "Sydney, New South Wales, Australia",
		period: "11/2015 - 03/2018",
		logo: "/logo/appen.jpg",
		type: "Contract",
		// image: "/experience/oasisInfobyte_page.jpg",
		// certificateUrl: "/files/experience_pdf/oasisInfobyte.pdf",
		description: [
			"Contributed to the development of a mobile banking and lending app using React and React Native, integrating REST APIs with third-party payment gateways and implementing offline storage with SQLite for reliable access in low-connectivity regions.",
			"Built a healthcare appointment scheduling web platform using React and Bootstrap, connected to a Node.js + Express backend with MongoDB, and deployed on Heroku, helping clinics streamline patient bookings. ",
			"Developed real-time logistics dashboards with Socket.IO and Leaflet.js maps, enabling fleet operators to track vehicles, visualize live telemetry data, and receive geofencing alerts directly in a browser interface.", 
			"Integrated an AI-driven chatbot prototype into a customer support portal using Dialogflow (API.AI at the time) with a Node.js bridge, handling common queries and reducing first-response time by nearly 40%.",
			"Set up CI/CD pipelines with Jenkins and Docker, automating builds, testing, and deployments across staging environments, reducing deployment effort from several hours to less than 30 minutes.",
			"Translated Sketch and Adobe XD design prototypes into responsive, accessible web applications using SASS, Bootstrap 4, and Vanilla.js, ensuring cross-browser compatibility for enterprise users.", 
			"Participated in Agile Scrum ceremonies, contributing to sprint planning, backlog refinement, and retrospectives, while mentoring junior developers on JavaScript ES6 features, REST API design, and Mocha testing practices.",
		],
		tectSkills: ["React", "React Native", "Node.js", "Express.js", "MongoDB", "SQLite", "Socket.IO", "Dialogflow", "Docker", "Jenkins", "Heroku", "Bootstrap"]
	},
		{
		title: "Software Developer Intern",
		company: "Taskrabbit",
		location: "San Francisco, California, US",
		period: "05/2014 - 10/2015",
		logo: "/logo/taskrabbit.jpg",
		type: "Contract",
		// image: "/experience/oasisInfobyte_page.jpg",
		// certificateUrl: "/files/experience_pdf/oasisInfobyte.pdf",
		description: [
			"Developed internal admin dashboards using AngularJS, jQuery, and Bootstrap 3, enabling engineers to monitor chatbot interactions in near real-time. ",
			"Built RESTful APIs with Node.js and Express, connected to MongoDB to fetch and update conversation logs, facilitating faster debugging of early NLP prototypes.",
			"Assisted in integrating Slack’s Real Time Messaging API using WebSockets, implementing basic authentication flows with OAuth 2.0 for early chatbot messaging features. ",
			"Created reusable UI components for the web console using Handlebars.js, standardizing the look and feel across different admin panels.", 
			"Migrated small portions of legacy code from jQuery-heavy scripts to AngularJS directives, improving modularity and maintainability. ",
			"Implemented WebSocket connections to stream live feedback from bot simulations to admin dashboards, enhancing visibility of message flows. • Worked with junior data engineers to log chatbot telemetry in MongoDB, enabling early search and visualization of employee support queries. ",
			"Wrote unit and integration tests using Mocha and Chai, achieving coverage for key API endpoints and dashboard components."
		],
		tectSkills: ["AngularJS", "JavaScript", "Node.js", "Express.js", "MongoDB", "REST APIs", "WebSockets", "OAuth 2.0", "Mocha", "Chai"]
	},
];

const Experience = () => {
	return (
		<>
			<SEO 
				title="Professional Experience - Daniel Liu"
				description="View my professional experience including internships at Code Alpha, Bharat Intern, CodeClause, and Oasis Infobyte. Full stack development, React.js, Node.js, and software engineering projects."
				canonicalUrl="http://localhost:3000/experience"
			/>
			<div className="min-h-screen pt-16 sm:pt-20 px-4 max-w-5xl mx-auto pb-16 sm:pb-20">
				<ScrollAnimation>
					<h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 gradient-text flex items-center gap-3">
						<Briefcase className="w-7 h-7 sm:w-8 sm:h-8" />
						Professional Experience
					</h2>
				</ScrollAnimation>

				<div className="space-y-8 sm:space-y-12">
					{experiences.map((exp, index) => (
						<ScrollAnimation key={exp.title}>
							<div className="group relative bg-gray-800/50 rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
								<div className="grid grid-cols-1 md:grid-cols-[1fr,300px]">
									<div className="p-6 sm:p-8">
										<div className="flex items-center gap-3 mb-4 sm:mb-6">
											<div className="p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl group-hover:bg-white/20 transition-colors">
												<img src={exp.logo}/>
											</div>
											<div>
												<h3 className="text-xl sm:text-2xl font-bold mb-1">{exp.title}</h3>
												<p className="text-gray-400 text-base sm:text-lg">{exp.company}</p>
											</div>
										</div>

										<div className="flex flex-wrap items-center gap-2 text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
											<MapPin className="w-4 h-4" />
											<span>{exp.location}</span>
											<span>•</span>
											<span>{exp.period}</span>
										</div>

										<ul className="space-y-3 sm:space-y-4">
											{exp.description.map((item, i) => (
												<li
													key={i}
													className="flex items-start gap-3 text-gray-300 text-sm sm:text-base"
												>
													<ArrowRight className="w-5 h-5 mt-0.5 text-gray-400 flex-shrink-0" />
													<span className="leading-relaxed">{item}</span>
												</li>
											))}
										</ul>

										{/* <motion.a
											target="_blank"
											rel="noopener noreferrer"
											className="md:hidden mt-6 inline-flex items-center gap-2 px-6 py-2.5 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all duration-300 text-sm font-medium"
											whileHover={{ scale: 1.02 }}
										>
											View Certificate
											<ExternalLink className="w-4 h-4" />
										</motion.a> */}
									</div>

									<div className="p-6 sm:p-8">
										
										<ul className="space-y-3 sm:space-y-4 mt-12">
											<strong>Tech Skills</strong>
											{exp.tectSkills.map((item, i) => (
												<li
													key={i}
													className="flex items-start gap-3 text-gray-300 text-sm sm:text-base"
												>
													<span className="leading-relaxed">{item}</span>
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						</ScrollAnimation>
					))}
				</div>
			</div>
		</>
	);
};

export default Experience;
