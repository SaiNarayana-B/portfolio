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
      "Built a multi-agent staffing system (TEX Agent) using Google ADK that dynamically spawns parallel agents for each required role and returns top candidate recommendations with fit rationale.",
      "Built a SoW ingestion pipeline processing 2,000+ project documents from Google Drive, summarizing via LLM, and indexing into Vertex AI Vector Search for RAG retrieval.",
      "Reduced pipeline runtime by 95% (45 min → 5 min) by replacing sequential role processing with dynamic parallel orchestration.",
      "Built a conversational NL2SQL agent that lets PMs and business leads query project health data in plain English, converts it to BigQuery SQL via an MCP server.",
      "Ran implicit vs. explicit caching POC and restructured all agent system prompts, cutting daily inference cost from $4,000 to $2,500 (37% reduction).",
      "Set up dynamic LLM routing across Gemini and Claude model families to pick cheaper/faster models based on task complexity, reducing inference cost across production agents.",
      "Built Cypher, a developer tool used by 2,000+ employees that captures AI interaction logs from Copilot, Kiro, and Claude Code, scores prompt quality using LLM analysis, and calculates effort-saved metrics per developer.",
      "Audited and improved Codeaira (internal AI coding assistant) by benchmarking against open-source tools, rewriting system prompts, and adding slash-command based skill invocation.",
    ],
  },
  {
    company: "Quantiphi",
    role: "Machine Learning Engineer Intern",
    location: "Bengaluru, India",
    period: "Jan 2025 - Jun 2025",
    highlights: [
      "Built the AI Canvas Agent that generates solution docs and slide decks for GTM teams by mapping stakeholders, business impact, and ROI from a single project brief.",
      "Built the Rapid Pitch Agent that researches a target company's financials, AI/ML initiatives, and competitors, then produces a ready-to-use pitch deck for pre-sales teams.",
      "Implemented Google ADK framework and built MCP servers to connect enterprise data sources with AI agents across 3 internal pilot projects.",
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
      "Multi-agent staffing system using Google ADK that takes a project ID or role description, dynamically spawns parallel agents for each required role, and returns top candidate recommendations with fit rationale.",
    tech: ["Google ADK", "RAG", "Vertex AI", "BigQuery", "Python"],
    links: [],
    highlight: "95% runtime reduction — 45 min down to 5 min via dynamic parallel orchestration.",
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
      "Developer tool that captures AI interaction logs from Copilot, Kiro, and Claude Code, scores prompt quality using LLM analysis, and calculates effort-saved metrics per developer.",
    tech: ["Python", "LLM", "Analytics"],
    links: [],
    highlight:
      "Quantifies developer productivity gains from AI-assisted coding.",
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
      "Ingestion pipeline that pulls SoW documents from Google Drive, summarizes them via LLM, and indexes into a vector store for the staffing agent's RAG retrieval.",
    tech: ["Python", "LLM", "Vector DB", "GCS", "FastAPI"],
    links: [],
    highlight:
      "Powers the knowledge base used by production AI agents.",
  },
  {
    name: "LLM Caching & Cost Optimization",
    description:
      "Ran implicit vs. explicit caching POC and restructured all agent system prompts. Set up dynamic LLM routing to pick cheaper/faster models based on task complexity.",
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
