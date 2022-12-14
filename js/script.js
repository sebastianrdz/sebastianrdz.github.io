const header = document.querySelector("header");

window.addEventListener("scroll", function () {
	header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
	menu.classList.toggle("bx-x");
	navlist.classList.toggle("active");
};

window.onscroll = () => {
	menu.classList.remove("bx-x");
	navlist.classList.remove("active");
};

const sr = ScrollReveal({
	distance: "45px",
	duration: 2700,
	reset: true,
});

sr.reveal(".home-text", { delay: 350, origin: "left" });
sr.reveal(".home-img", { delay: 350, origin: "right" });

sr.reveal(".sub-service,.about,.portfolio,.service,.cta,.contact", {
	delay: 200,
	origin: "bottom",
});


const projects = [
	{
		header: "NLP Chatbot",
		type: "Web App",
		description:
			"Redesigned a web forum application for Wizeline's 1,500+ employees and collaborated with a team of 5 to reduce unanswered and repeated questions which increased usability and improved user experience. Developed React Front-end composed of 27 different components and deployed on AWS S3 bucket. Contributed to Back-end development and deployment on AWS LightSail and GitHub Actions for CI/CD. Produced 14 secure REST API endpoints using NodeJS, ExpressJS, JWT and Sequelize. Executed 27 unit tests using Jest, established 4 relational data models for PostgreSQL database following software requirements and wrote API documentation on Swagger",
		colaborators: ["Elmer", "Diego", "Lucio", "Alan"],
		tags: ["React", "NodeJS", "Javascript", "Python", "AWS"],
		project_url: "",
		bg_image_src: "../img/work1.jpg",
	},
	{
		header: "Internal Web Forum",
		type: "Web App",
		description:
			"Redesigned a web forum application for Wizeline's 1,500+ employees and collaborated with a team of 5 to reduce unanswered and repeated questions which increased usability and improved user experience. Developed React Front-end composed of 27 different components and deployed on AWS S3 bucket. Contributed to Back-end development and deployment on AWS LightSail and GitHub Actions for CI/CD. Produced 14 secure REST API endpoints using NodeJS, ExpressJS, JWT and Sequelize. Executed 27 unit tests using Jest, established 4 relational data models for PostgreSQL database following software requirements and wrote API documentation on Swagger",
		colaborators: ["Sam", "Diego", "Ana", "Joaquin"],
		tags: ["React", "NodeJS", "Javascript", "Express", "AWS"],
		project_url: "",
		bg_image_src: "../img/work5.jpg",
	},
	{
		name: "Crypto Wallet",
		type: "Web App",
		description:
			"Created web app where users can visualize their crypto wallet and manage their balance in Ethereum as in to buy, sell. and/or transfer money between the average 450k+ users on the blockchain. Managed 14 React components to connect 4 Express endpoints and MongoDB database.",
		colaborators: ["Omar"],
		tags: ["React", "Express", "Typescript", "MongoDB"],
		project_url: "",
		bg_image_src: "../img/work2.jpg",
	},
	{
		name: "Tamayo Incidents Report",
		type: "Android App",
		description:
			"Implemented mobile app with Java & Kotlin to allow the 500+ daily users to create reports on problems that arise in the park which resulted in a 250% increase in response time to these problems.",
		colaborators: [],
		tags: ["Java", "Kotlin", "MongoDB", "Express"],
		project_url: "",
		bg_image_src: "../img/work3.jpg",
	},
	{
		name: "IT Web App Activation",
		type: "Web App",
		description:
			"Developed with a team of 5 an on-boarding training web application for CEMEX GO IT area 50+ local employees. Applied gamification using Unity & C# to increase productivity by 27% and allow administrators to monitor the employees performance using SQL, Node, Express, and React.",
		colaborators: [],
		tags: ["React", "Express", "Unity", "SQL"],
		project_url: "",
		bg_image_src: "../img/work4.jpg",
	},
];
