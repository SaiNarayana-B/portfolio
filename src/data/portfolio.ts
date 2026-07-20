export const personalInfo = {
  name: "Sai Narayana B",
  title: "GenAI Engineer",
  tagline: "Building production-grade AI agent systems",
  email: "sainarayana2311@gmail.com",
  phone: "+91 8248881924",
  github: "https://github.com/SaiNarayana-B",
  githubHandle: "SaiNarayana-B",
  linkedin: "https://linkedin.com/in/sai23",
  linkedinHandle: "sai23",
  location: "Bengaluru, India",
  summary:
    "GenAI Engineer with 1.5 years of experience building and shipping production-grade AI agent systems at Quantiphi. Reduced multi-agent pipeline runtime by 95% via dynamic parallel orchestration; shipped an open-source codebase analysis tool (patchwork-conventions) to PyPI and MCP Registry. Skilled in multi-agent orchestration, Retrieval Augmented Generation (RAG), NL2SQL, LLM evaluation, and agent SDK integration (Google ADK, Claude, Copilot) on Google Cloud Platform.",
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
      "Architected an internal AI agent platform using Google ADK and MCP servers to standardize tool integration, data access, and orchestration for enterprise AI automation systems.",
      "Developed TEX Agent, a multi-agent staffing recommendation system using RAG pipelines over 2 years of historical SOW data; implemented dynamic parallel orchestration reducing runtime by 95% — from 45 minutes to 5-7 minutes.",
      "Developed a conversational NL2SQL agent for the QAssure platform translating natural language queries into BigQuery SQL via a BigQuery MCP server.",
      "Ran implicit vs. explicit caching POC; restructured all agent and orchestrator system prompts — reducing inference cost by over 80% across production agent runs.",
      "Built Cypher, a developer tool that captures AI interaction logs from GitHub Copilot, Kiro, and Claude Code; uses LLM-based analysis to evaluate prompt quality and calculate effort-saved karma scores.",
      "Implemented dynamic LLM routing and token tracing to select appropriate models by task complexity, improving latency and reducing inference cost.",
    ],
  },
  {
    company: "Quantiphi",
    role: "Machine Learning Engineer Intern",
    location: "Bengaluru, India",
    period: "Jan 2025 - Jun 2025",
    highlights: [
      "Built the AI Canvas Agent, enabling GTM teams to generate workshop-ready solution documentation by mapping stakeholders, business impact, and ROI.",
      "Developed the Rapid Pitch Agent, an AI agent that researches target companies and analyzes financials, AI/ML initiatives, and competitive landscape to generate strategic pitch insights.",
      "Implemented Google ADK framework and developed MCP servers and tools for integrating enterprise data sources with AI agents across 3 internal pilot projects.",
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
    name: "patchwork-conventions",
    description:
      "AST-based codebase scanner that auto-generates CONVENTIONS.md for AI coding agents. Tree-sitter analysis detecting naming conventions, import patterns, error handling, testing frameworks, and API shapes across Python, TypeScript, JavaScript, Go, and Rust.",
    tech: ["Python", "Tree-sitter", "MCP", "PyPI", "CLI"],
    links: [
      { label: "GitHub", url: "https://github.com/SaiNarayana-B/patchwork" },
      { label: "PyPI", url: "https://pypi.org/project/patchwork-conventions/" },
    ],
    highlight:
      "Built in 2 days. Published to PyPI and MCP Registry. Integrates with Claude Code, Cursor, and GitHub Copilot.",
  },
  {
    name: "TEX Agent",
    description:
      "Multi-agent staffing recommendation system using Google ADK with RAG pipelines over 2 years of historical SOW data. Dynamic parallel orchestration with fan-out/fan-in pattern for any number of roles simultaneously.",
    tech: ["Google ADK", "RAG", "Vertex AI", "BigQuery", "Python"],
    links: [],
    highlight: "95% runtime reduction — 45 minutes down to 5-7 minutes.",
  },
  {
    name: "NL2SQL Agent",
    description:
      "Conversational agent for the QAssure platform that translates natural language queries into BigQuery SQL via a BigQuery MCP server with schema-aware prompting and output summarization.",
    tech: ["MCP", "BigQuery", "NL2SQL", "Python", "FastAPI"],
    links: [],
    highlight:
      "Enables non-technical users to query complex datasets using plain English.",
  },
  {
    name: "Cypher",
    description:
      "Developer tool that captures AI interaction logs from GitHub Copilot, Kiro, and Claude Code. Uses LLM-based analysis to evaluate prompt quality and calculate effort-saved karma scores.",
    tech: ["TypeScript", "VS Code Extension", "LLM", "Analytics"],
    links: [],
    highlight:
      "Quantifies developer productivity gains from AI-assisted coding.",
  },
  {
    name: "Codeaira CLI & VS Code Extension",
    description:
      "Overhauled an internal AI coding assistant: optimized system prompts, added new tools, invokable slash commands for skills, and extended discoverability to .github, .claude, .agents folders.",
    tech: ["TypeScript", "VS Code API", "LLM", "CLI", "Node.js"],
    links: [],
    highlight:
      "Internal developer tool used across engineering teams at Quantiphi.",
  },
  {
    name: "SoW Summarization Pipeline",
    description:
      "End-to-end pipeline covering Google Drive ingestion, LLM-powered summarization, vector indexing, and GCS storage. Also built REST APIs for LLM Wiki sync to keep internal knowledge bases current.",
    tech: ["Python", "LLM", "Vector DB", "GCS", "FastAPI"],
    links: [],
    highlight:
      "Powers the knowledge base used by production AI agents.",
  },
  {
    name: "LLM Caching POC",
    description:
      "Ran implicit vs. explicit caching POC; restructured all agent and orchestrator system prompts to place stable content at the start for implicit cache hits, and explicitly cached large system prompts.",
    tech: ["Python", "Vertex AI", "Prompt Engineering", "Caching"],
    links: [],
    highlight:
      "Reduced inference cost by over 80% across production agent runs.",
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
    "Docker",
  ],
  "Dev Tools": [
    "VS Code Extensions",
    "Vector Databases",
    "Embeddings",
    "Git",
    "GitLab CI/CD",
  ],
};

export const certifications = [
  {
    name: "Google Cloud Professional Machine Learning Engineer",
    issuer: "Google Cloud",
    credlyUrl: "https://www.credly.com/badges/67700c4a-0d9e-4541-a207-04ce5cdc9b08/public_url",
  },
  {
    name: "Google Cloud Associate Cloud Engineer",
    issuer: "Google Cloud",
    credlyUrl: "https://www.credly.com/badges/45d56da1-4f31-4a20-8e6e-58a8c726600a/public_url",
  },
  {
    name: "Google Cloud Generative AI Leader",
    issuer: "Google Cloud",
    credlyUrl: "https://www.credly.com/badges/f8ad1ba5-e2c4-4946-afed-0c52f53937c6/public_url",
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
