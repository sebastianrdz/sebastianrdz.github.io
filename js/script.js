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

const portfolioNode = document.getElementById("portfolio-content");
// const colDiv = document.createElement("div");
const div = document.createElement("div");
const img = document.createElement("img");
const h3 = document.createElement("h3");
const h4 = document.createElement("h4");
const h5 = document.createElement("h5");

function appendData(projects) {
	projects.map((project) => {
		const colDiv = div.cloneNode(true);
		const colImg = img.cloneNode(true);
		const layerDiv = div.cloneNode(true);
		const h3El = h3.cloneNode(true);
		const h4El = h4.cloneNode(true);
		const h5El = h5.cloneNode(true);
		const tagsDiv = div.cloneNode(true);

		colDiv.className = "col";
		colImg.src = project.bg_image_src;

		layerDiv.className = "layer";
		h3El.innerHTML = project.header;
		h4El.innerHTML = project.type;
		h5El.innerHTML = project.description;

		tagsDiv.className = "tags";
		project.tags.map( tag => {
			const tagDiv = div.cloneNode(true);
			tagDiv.innerHTML = tag;
			tagsDiv.appendChild(tagDiv)
		});

		
		layerDiv.appendChild(h3El);
		layerDiv.appendChild(h4El);
		layerDiv.appendChild(h5El);
		layerDiv.appendChild(tagsDiv);

		colDiv.appendChild(colImg);
		colDiv.appendChild(layerDiv);
		portfolioNode.appendChild(colDiv);
	});
	// for (var i = 0; i < projects.length; i++) {
	// 	// var colDiv = div.cloneNode(true);
	// 	// img.src(projects[i].)
	// }
}

const projects = [
	{
		header: "NLP Chatbot",
		type: "Web App",
		description:
			"The purpose of this project is to enable the user to search different establishment through the interaction of a chat bot. The user interacts with the interface inserting a text that it then processed through an NLP model which extracts the attributes and clasifies the intention of the text to determin the flow of the chat interaction.",
		colaborators: ["Elmer", "Diego", "Lucio", "Alan"],
		tags: ["React", "NodeJS", "Javascript", "Python", "AWS"],
		project_url: "",
		bg_image_src: "img/eye.jpg",
	},
	{
		header: "Internal Web Forum",
		type: "Web App",
		description:
			"Redesigned a web forum application for Wizeline's 1,500+ employees and collaborated with a team of 5 to reduce unanswered and repeated questions which increased usability and improved user experience. Developed React Front-end composed of 27 different components and deployed on AWS S3 bucket. Contributed to Back-end development and deployment on AWS LightSail and GitHub Actions for CI/CD. Produced 14 secure REST API endpoints using NodeJS, ExpressJS, JWT and Sequelize. Executed 27 unit tests using Jest, established 4 relational data models for PostgreSQL database following software requirements and wrote API documentation on Swagger",
		colaborators: ["Sam", "Diego", "Ana", "Joaquin"],
		tags: ["React", "NodeJS", "Javascript", "Express", "AWS"],
		project_url: "",
		bg_image_src: "img/question.jpg",
	},
	{
		header: "Crypto Wallet",
		type: "Web App",
		description:
			"Created web app where users can visualize their crypto wallet and manage their balance in Ethereum as in to buy, sell. and/or transfer money between the average 450k+ users on the blockchain. Managed 14 React components to connect 4 Express endpoints and MongoDB database.",
		colaborators: ["Omar"],
		tags: ["React", "Express", "Typescript", "MongoDB"],
		project_url: "",
		bg_image_src: "img/ether.jpg",
	},
	{
		header: "Tamayo Incidents Report",
		type: "Android App",
		description:
			"Implemented mobile app with Java & Kotlin to allow the 500+ daily users to create reports on problems that arise in the park which resulted in a 250% increase in response time to these problems.",
		colaborators: [],
		tags: ["Java", "Kotlin", "MongoDB", "Express"],
		project_url: "",
		bg_image_src: "img/phone.jpg",
	},
	{
		header: "IT Web App Activation",
		type: "Web App",
		description:
			"Developed with a team of 5 an on-boarding training web application for CEMEX GO IT area 50+ local employees. Applied gamification using Unity & C# to increase productivity by 27% and allow administrators to monitor the employees performance using SQL, Node, Express, and React.",
		colaborators: [],
		tags: ["React", "Express", "Unity", "SQL"],
		project_url: "",
		bg_image_src: "img/game.jpg",
	},
];

appendData(projects);
