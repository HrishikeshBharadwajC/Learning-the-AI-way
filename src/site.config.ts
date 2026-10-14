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
  role: 'AI Engineer',
  // Short bio. The first paragraph also appears on the home page.
  bio: [
    "I'm an AI engineer who builds products on top of large language models. My work spans prompt design, retrieval, agents and the evaluation that keeps them honest.",
    'Outside of work I use the same tools to plan, write and learn, and I pay close attention to where they help and where they get in the way.',
  ],
  // Areas listed under "What I work on" on the About page.
  focus: [
    { title: 'LLM applications', text: 'Designing and shipping features built on language models.' },
    { title: 'Agents and tools', text: 'Giving models tools and the guardrails to use them well.' },
    { title: 'Retrieval', text: 'Getting the right context in front of a model at the right time.' },
    { title: 'Evaluation', text: 'Measuring quality so changes are decisions, not guesses.' },
  ],
  why: "AI moves fast and most writing about it is either hype or theory. I wanted a place to write down what actually works day to day, with real prompts, real workflows and honest results, so others can skip the trial and error.",
  links: {
    linkedin: 'https://www.linkedin.com/in/hrishikeshbharadwaj',
    website: 'https://hrishikesh-chakrapani.carrd.co/',
  },
};

// "What I write about" on the home page.
export const TOPICS = [
  { name: 'Everyday AI', text: 'How I use assistants to plan, write, research and decide, outside of work.' },
  { name: 'Building with LLMs', text: 'Prompts, evals, retrieval and agents, written up from real projects.' },
  { name: 'Tools & workflows', text: 'The editors, CLIs and automations that save me hours each week.' },
  { name: 'Learning faster', text: 'Using AI as a tutor to pick up new fields without fooling myself.' },
];

// "Coming soon" on the home page. Remove a title once the post is published,
// or empty the list to hide the section.
export const COMING_SOON = [
  'My daily AI workflow, step by step',
  'Write prompts like specs',
  'What evals taught me about my own code',
  'Using AI as a tutor without fooling myself',
];
