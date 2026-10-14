// Edit this file to change site-wide details: your name, bio, links and the
// sections on the home and About pages.
export const SITE = {
  title: 'Learning the AI Way',
  tagline: 'Practical notes on using AI in everyday work and life.',
  url: 'https://learningtheaiway.com',
  author: 'Hrishikesh Chakrapani',
};

export const AUTHOR = {
  name: 'Hrishikesh Chakrapani',
  role: 'Principal Engineer at HPE',
  // Short bio. The first paragraph also appears on the home page.
  bio: [
    "I read papers for fun and build agents for work. I'm a principal engineer at HPE, with a classical machine learning background and three years in generative AI.",
    'Day to day I work on agentic systems, large language models and new AI systems, and I follow new model architectures, training methods and model families closely. This blog is where I write down what I learn.',
  ],
  // Areas listed under "What I work on" on the About page.
  focus: [
    { title: 'Agentic systems', text: 'Designing agents that plan, use tools and recover from their mistakes.' },
    { title: 'Large language models', text: 'Building production features on top of LLMs.' },
    { title: 'New AI systems', text: 'Evaluating and adopting new models and approaches as they arrive.' },
    { title: 'Classical ML roots', text: 'Bringing lessons from traditional machine learning into generative AI.' },
  ],
  why: "AI moves fast. New model families, training methods and agent patterns show up every few weeks, and most writing about them is either hype or theory. I wanted one place to write down what I learn as I build and read: what works, why it works, and what didn't, so others can learn faster too.",
  links: {
    linkedin: 'https://www.linkedin.com/in/hrishikeshbharadwaj',
    website: 'https://hrishikesh-chakrapani.carrd.co/',
  },
};

// "What I write about" on the home page.
export const TOPICS = [
  { name: 'Agentic systems', text: 'How agents plan, call tools and fail, from building them at work.' },
  { name: 'Inside new models', text: 'New architectures, training methods and model families, explained plainly.' },
  { name: 'Building with LLMs', text: 'Prompts, retrieval and evaluation, written up from real projects.' },
  { name: 'Everyday AI', text: 'How I use AI outside work to plan, write and learn faster.' },
];

// "Coming soon" on the home page. Remove a title once the post is published,
// or empty the list to hide the section.
export const COMING_SOON = [
  'What makes an agent reliable in production',
  'From classical ML to generative AI: what carried over',
  'System One models, explained',
  'Development practices in the age of coding agents',
];
