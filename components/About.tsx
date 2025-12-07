import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
	return (
		<div className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly">
			<h3 className="relative mt-4 uppercase tracking-[20px] text-gray-500 text-2xl md:absolute md:top-20">About</h3>

			<motion.img
				initial={{
					x: -200,
					opacity: 0,
				}}
				transition={{
					duration: 1.2,
				}}
				whileInView={{
					opacity: 1,
					x: 0,
				}}
				viewport={{
					once: true,
				}}
				src="/_me.png"
				className="flex-shrink-0 object-cover w-32 h-32 -mb-24 rounded-full md:mb-0 md:rounded-lg md:w-40 md:h-40 xl:w-[400px] xl:h-[450px]"
			/>

			<div className="px-0 space-y-10 md:px-10">
				<h4 className="text-2xl font-semibold md:text-4xl mt-10">
					Here is a <span className="underline decoration-[#00f2ea]/50">little</span> background
				</h4>
				<p className="text-sm text-left">I’m a Software Engineer with 7+ years of experience building production-grade applications with interest in DevOps and Cloud Engineering. My background in software development gives me a strong foundation in system design, automation, and understanding how applications behave in real-world environments something I bring directly into DevOps practices.Over the past year, I’ve been sharpening my skills across the DevOps toolkit: Docker, Kubernetes, Terraform, AWS, GitHub Actions, Linux, container orchestration, and infrastructure as code. I enjoy designing automated pipelines, improving deployment workflows, and building reliable systems that scale.</p>
			</div>
		</div>
	);
}
