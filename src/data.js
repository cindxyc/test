import * as icon  from 'react-icons/si'

const profile = {
	name: 'Cindee Chen',
	role: 'Software Developer',
	description: 'Student at University of Toronto, majoring in Mathematics and Computer Science. Passionate about frontend development.',
};

const social = [
	{ icon: icon.SiGithub, link: 'https://github.com/cindxyc' },
	{ icon: icon.SiLinkedin, link: 'https://www.linkedin.com/in/cindxyc/' }
	// { icon: icon.SiInstagram, link: 'https://www.instagram.com/' },
];

const brand = 'XYC';

const work = [
	{
		name: 'Two-Pac',
		description: 'A retro-gamified photo album based on Pac-Man game. Users can collect photos as they navigate through the maze.',
		stack: [
			{ icon: icon.SiPython, name: 'Python' },
			// { name: 'Pygame' },
		],
		linkProject: 'https://devpost.com/software/tu-pac',
		linkGithub: 'https://github.com/cindxyc/UofTHacksXIProject',
	},
	{
		name: 'Xtreme Mussels',
		description: 'A fitness app with a focus on personalized workout recommendations. Users can pick different workouts and generate routines to achieve their fitness goals.',
		stack: [
			{ icon: icon.SiJava, name: 'Java' },
			{ icon: icon.SiSpring, name: 'Spring Boot' },
		],
		linkProject: 'https://github.com/cindxyc/Xtreme-Mussels',
		linkGithub: 'https://github.com/cindxyc/Xtreme-Mussels',
	},
	{
		name: 'Jobb!',
		description: 'High-Fidelity Prototype of a job platform, with an emphasis on company background analysis and job matching based on user preferences.',
		stack: [
			{ icon: icon.SiFigma, name: 'Figma' },
		],
		linkProject: 'https://www.figma.com/design/mxWx9QRFrbA4GWE4I9yQrb/318?node-id=0-1&t=848j4Ga9WgDncTZC-1',
		linkGithub: 'https://www.figma.com/design/mxWx9QRFrbA4GWE4I9yQrb/318?node-id=0-1&t=848j4Ga9WgDncTZC-1',
	},
	{
		name: 'Bookit',
		description: 'High-Fidelity Prototype of a booking platform targeted towards small businesses. Influenced by Linktree.',
		stack: [
			{ icon: icon.SiFigma, name: 'Figma' },
		],
		linkProject: 'https://www.figma.com/proto/i6mCdvfnPM0WToX3ZQonwB/Untitled?node-id=1-4&starting-point-node-id=1%3A4m',
		linkGithub: 'https://www.figma.com/proto/i6mCdvfnPM0WToX3ZQonwB/Untitled?node-id=1-4&starting-point-node-id=1%3A4m',
	},
]


const stack = [
	{
		name: 'Front End',
		items: [
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiBootstrap, name: 'Bootstrap', },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiTypescript, name: 'Typescript' },
			{ icon: icon.SiReact, name: 'React', },
		],
	},
	{
		name: 'Back End',
		items: [
			{ icon: icon.SiNodedotjs, name: 'NodeJS' },
			{ icon: icon.SiDeno, name: 'Deno' },
			{ icon: icon.SiMongodb, name: 'MongoDB', },
			{ icon: icon.SiFirebase, name: 'Firebase', },
		],
	},
]

const contact = {
	description: 'Shoot me an email if you want to get in touch, or just say hi :)',
	email: 'ccindee.1206@gmail.com'
}

export { profile, social, work, stack, contact, brand }