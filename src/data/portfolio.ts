export const personalInfo = {
  name: "Sai Narayana B",
  title: "Applied AI Engineer",
  tagline: "Taking LLM systems from prototype to production",
  email: "sainarayana2311@gmail.com",
  phone: "+91 8248881924",
  github: "https://github.com/SaiNarayana-B",
  githubHandle: "SaiNarayana-B",
  linkedin: "https://linkedin.com/in/sai23",
  linkedinHandle: "sai23",
  location: "Bengaluru, India",
  summary:
    "Applied AI Engineer with close to 2 years at Quantiphi taking LLM systems from prototype to production. Works across the full loop: agents and tool integrations, the evaluation and usage analytics that show whether they work, and the cost and latency engineering that keeps them viable at scale. As a Forward Deployed Engineer, embedded with a client team and used self-built spec-driven development harnesses to deliver a project scoped for 15 people with 6, in 50 of 90 planned days.",
};

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    company: "Quantiphi",
    role: "Machine Learning Engineer (Applied GenAI)",
    location: "Bengaluru, India",
    period: "Jul 2025 - Present",
    highlights: [
      "Built spec-driven development (SDD) harnesses: agent workflows that take requirements to specs, code, tests, and deployment.",
      "Embedded as one of two Forward Deployed Engineers with a global academic publisher's developers to build a research paper recommendation system using the harnesses. Delivered with 6 people against a planned 15-person team, in 50 days against a 90-day plan.",
      "Built Cypher scripts that run on developers' machines to capture AI interaction logs from Copilot, Kiro, and Claude Code across 2,000+ employees, scoring prompt quality and effort saved.",
      "Built a Cypher endpoint on the company's LLM gateway that analyses every request from the Codeaira web app and Claude Code, categorises and rates each interaction, and classifies work as SDD or non-SDD. Ran it on flex inference and used a shadow deployment to compare two models on live traffic.",
      "Built TEX Agent, a multi-agent system on Google ADK that spawns parallel agents per role and returns ranked candidates, using RAG over 2,000+ documents in Vertex AI Vector Search. Cut runtime by 95% (45 min to 5 min).",
      "Built a conversational NL2SQL agent used by 50+ PMs and business leads that turns plain-English questions into BigQuery SQL through an MCP server.",
      "Cut daily inference cost from $4,000 to $2,500 (37%) with prompt caching and model routing across Gemini and Claude.",
      "Benchmarked the internal coding assistant against 5 open-source agents, then rewrote its system prompts and added slash-command skills.",
    ],
  },
  {
    company: "Quantiphi",
    role: "Machine Learning Engineer Intern",
    location: "Bengaluru, India",
    period: "Jan 2025 - Jun 2025",
    highlights: [
      "Designed the AI Canvas Agent that generates solution docs and slide decks for 4 GTM teams, mapping stakeholders, business impact, and ROI from a single project brief.",
      "Developed the Rapid Pitch Agent that researches a target company's financials, AI/ML initiatives, and competitors, then produces a ready-to-use pitch deck for pre-sales teams.",
      "Implemented Google ADK framework and configured MCP servers to connect enterprise data sources with AI agents across 3 internal pilot projects.",
    ],
  },
];

export interface Project {
  name: string;
  description: string;
  tech: string[];
  links: { label: string; url: string }[];
  highlight: string;
}

export const projects: Project[] = [
  {
    name: "Spec-Driven Development Harnesses",
    description:
      "Agent workflows that take requirements to specs, code, tests, and deployment, with the spec as the source of truth. Used as a Forward Deployed Engineer embedded with a client's developers to build a research paper recommendation system.",
    tech: ["Claude Code", "Coding Agents", "Spec-Driven Development", "Python"],
    links: [],
    highlight:
      "Delivered with 6 people against a planned 15-person team, in 50 days against a 90-day plan.",
  },
  {
    name: "patchwork-conventions",
    description:
      "AST-based codebase scanner that auto-generates CONVENTIONS.md for AI coding agents. Tree-sitter analysis detecting naming conventions, import patterns, error handling, testing frameworks, and API shapes across 5 languages with confidence scores and real code examples.",
    tech: ["Python", "Tree-sitter", "MCP", "PyPI", "CLI"],
    links: [
      { label: "GitHub", url: "https://github.com/SaiNarayana-B/patchwork" },
      { label: "PyPI", url: "https://pypi.org/project/patchwork-conventions/" },
    ],
    highlight:
      "Developed in 2 days. Published to PyPI and MCP Registry. Integrates with Claude Code, Cursor, and GitHub Copilot.",
  },
  {
    name: "TEX Agent",
    description:
      "Multi-agent staffing system using Google ADK that takes a project ID or role description, dynamically spawns parallel agents for each required role, and returns top candidate recommendations with fit rationale.",
    tech: ["Google ADK", "RAG", "Vertex AI", "BigQuery", "Python"],
    links: [],
    highlight: "95% runtime reduction — 45 min down to 5 min via dynamic parallel orchestration.",
  },
  {
    name: "NL2SQL Agent",
    description:
      "Conversational NL2SQL agent that lets PMs and business leads query project health data in plain English, converts it to BigQuery SQL via an MCP server, and returns summarized results.",
    tech: ["MCP", "BigQuery", "NL2SQL", "Python", "FastAPI"],
    links: [],
    highlight:
      "Enables non-technical users to query complex datasets using plain English.",
  },
  {
    name: "Cypher",
    description:
      "AI usage analytics in two parts: scripts on developers' machines that capture interaction logs from Copilot, Kiro, and Claude Code, and an LLM gateway endpoint that analyses every Codeaira web app and Claude Code request, rates it, and classifies work as SDD or non-SDD.",
    tech: ["Python", "LLM Gateway", "Flex Inference", "Shadow Deployment"],
    links: [],
    highlight:
      "Covers 2,000+ employees. Shadow deployment compared two models on live traffic before choosing one.",
  },
  {
    name: "Codeaira — Internal AI Coding Assistant",
    description:
      "Audited and improved the internal AI coding assistant (CLI + VS Code extension) by benchmarking against open-source tools, rewriting system prompts, and adding slash-command based skill invocation.",
    tech: ["TypeScript", "VS Code API", "LLM", "CLI", "Node.js"],
    links: [],
    highlight:
      "Internal developer tool used across engineering teams at Quantiphi.",
  },
  {
    name: "SoW Summarization Pipeline",
    description:
      "Ingestion pipeline that pulls 2,000+ project documents from Google Drive, summarizes them via LLM, and indexes into Vertex AI Vector Search for the staffing agent's RAG retrieval.",
    tech: ["Python", "LLM", "Vertex AI Vector Search", "GCS", "FastAPI"],
    links: [],
    highlight:
      "Processes 2,000+ project documents. Powers the knowledge base used by production AI agents.",
  },
  {
    name: "LLM Caching & Cost Optimization",
    description:
      "Ran implicit vs. explicit caching POC and restructured all agent system prompts. Set up dynamic LLM routing across Gemini and Claude model families to pick cheaper/faster models based on task complexity.",
    tech: ["Python", "Vertex AI", "Prompt Engineering", "Caching"],
    links: [],
    highlight:
      "Cut daily inference cost from $4,000 to $2,500 (37% reduction).",
  },
];

export const skills = {
  "AI & ML": [
    "Multi-Agent Orchestration",
    "Large Language Models",
    "RAG Pipelines",
    "NL2SQL",
    "Prompt Engineering",
    "Prompt Caching",
    "Chain-of-Thought",
    "Few-Shot Prompting",
    "Token Optimization",
    "LLM Evaluation",
    "Agentic AI",
    "MCP Servers",
    "A2A Protocol",
    "Function Calling",
    "Model Routing",
    "Guardrails",
  ],
  "Agent Frameworks & LLMs": [
    "Google ADK",
    "LangChain",
    "LangGraph",
    "Claude Agent SDK",
    "Copilot SDK",
    "OpenAI API",
    "Gemini API",
    "Anthropic API",
    "LLM Wiki",
    "Graphify",
  ],
  "Languages & Backend": [
    "Python",
    "SQL",
    "FastAPI",
    "Streamlit",
    "REST APIs",
    "Tree-sitter",
  ],
  "Cloud (GCP)": [
    "Vertex AI",
    "BigQuery",
    "Cloud Storage",
    "Cloud Run",
  ],
  "Dev Tools": [
    "VS Code Extensions",
    "FAISS",
    "Vertex AI Vector Search",
    "Embeddings",
    "Git",
    "GitLab CI/CD",
  ],
};

export const certifications = [
  {
    name: "Claude Certified Developer (Foundations)",
    issuer: "Anthropic",
    credlyUrl: "https://www.credly.com/badges/8a87f2f0-b7a9-44bd-aba3-441badc600eb/public_url",
  },
  {
    name: "Forward Deployed Engineer Cohort: Gemini Enterprise Agent Platform (4-day workshop)",
    issuer: "Google Cloud",
    credlyUrl: "",
  },
  {
    name: "Google Cloud Professional Machine Learning Engineer",
    issuer: "Google Cloud",
    credlyUrl: "https://www.credly.com/badges/45d56da1-4f31-4a20-8e6e-58a8c726600a/public_url",
  },
  {
    name: "Google Cloud Associate Cloud Engineer",
    issuer: "Google Cloud",
    credlyUrl: "https://www.credly.com/badges/f8ad1ba5-e2c4-4946-afed-0c52f53937c6/public_url",
  },
  {
    name: "Google Cloud Generative AI Leader",
    issuer: "Google Cloud",
    credlyUrl: "https://www.credly.com/badges/67700c4a-0d9e-4541-a207-04ce5cdc9b08/public_url",
  },
  {
    name: "Machine Learning Specialization",
    issuer: "Stanford University & DeepLearning.AI",
    credlyUrl: "https://www.coursera.org/account/accomplishments/specialization/FD6IL9KOCZKR",
  },
];

export const education = {
  institution: "SRM Institute of Science and Technology",
  degree: "B.Tech in Computer Science Engineering",
  period: "2021 - 2025",
  cgpa: "9.17",
};
