import { SkillCategory, ExperienceItem, ProjectItem, CertificationItem, EducationItem } from './types';

export const PERSONAL_INFO = {
  name: "Sabari Aditiyaa",
  role: "Senior MLOps & LLMOps Engineer",
  location: "Bengaluru, India",
  phone: "+91 7598204555",
  email: "sabariaditiyaa@gmail.com",
  website: "sabari.cloud",
  linkedin: "linkedin.com/in/sabariaditiyaa",
  github: "github.com/saisabari24",
  summary: "Senior MLOps & LLMOps Engineer with 5.6 years of experience architecting scalable, production-grade AI platforms at Bank of America and Infosys. Expert in designing Kubernetes-native inference infrastructure, combining KServe and vLLM to deliver low-latency, high-throughput LLM serving. Proven track record of building robust CI/CD pipelines that reduced deployment lead time by 70%. Specialized in GPU resource optimization, reliable data engineering for 50M+ records, and ensuring 99.9% system uptime for mission-critical enterprise workloads. Actively seeking opportunities in Australia, Saudi Arabia, UAE, and Luxembourg."
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Cloud & Infrastructure",
    icon: "Cloud",
    skills: [
      "Kubernetes (EKS/AKS)",
      "AWS / Azure / GCP",
      "Docker & Helm",
      "Terraform (IaC) & Ansible",
      "Linux & Shell Scripting",
      "CI/CD (Jenkins/Git)"
    ]
  },
  {
    title: "GenAI & LLM Optimization",
    icon: "Cpu",
    skills: [
      "vLLM & PagedAttention",
      "NVIDIA MIG (GPU Opt)",
      "Ray Serve",
      "RAG Pipelines",
      "Hugging Face",
      "Azure AI Foundry"
    ]
  },
  {
    title: "MLOps & Orchestration",
    icon: "GitBranch",
    skills: [
      "KServe & Model Mesh",
      "Kubeflow & MLflow",
      "ArgoCD (GitOps)",
      "Airflow & DVC",
      "Model Registry",
      "Canary Rollouts"
    ]
  },
  {
    title: "Observability & Security",
    icon: "Shield",
    skills: [
      "Prometheus & Grafana",
      "ELK Stack & Dynatrace",
      "DCGM (GPU Monitoring)",
      "RBAC & VPC Peering",
      "Network Security",
      "CloudWatch"
    ]
  }
];

export const SKILL_CHART_DATA = [
  { subject: 'LLMOps', A: 98, fullMark: 100 },
  { subject: 'Kubernetes', A: 95, fullMark: 100 },
  { subject: 'Cloud Arch', A: 92, fullMark: 100 },
  { subject: 'GPU Infra', A: 90, fullMark: 100 },
  { subject: 'Security', A: 85, fullMark: 100 },
  { subject: 'Observability', A: 88, fullMark: 100 },
  { subject: 'IaC', A: 90, fullMark: 100 },
  { subject: 'CI/CD', A: 92, fullMark: 100 },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Infosys",
    role: "Associate Consultant – MLOps / LLMOps",
    period: "Jul 2024 – Present",
    description: "Designing and operating a Kubernetes-native model-serving platform, supporting both traditional ML and Generative AI workloads.",
    achievements: [
      "Architected a serverless inference layer using KServe to orchestrate vLLM backends, enabling scale-to-zero capabilities.",
      "Deployed vLLM with PagedAttention and KV Cache optimization, significantly improving token throughput and reducing latency.",
      "Implemented DVC within CI/CD pipelines to govern the lifecycle of large-scale model weights and datasets for RAG workflows.",
      "Configured NVIDIA MIG (Multi-Instance GPU) and node affinity rules on Kubernetes to isolate workloads and maximize utilization.",
      "Operationalized RAG systems by building robust retrieval workflows integrated with standardized inference pipelines.",
      "Implemented deep monitoring using Prometheus and Grafana, tracking GPU saturation, token latency, and throughput."
    ]
  },
  {
    company: "Bank of America",
    role: "Software Engineer – Cloud DevOps / Infrastructure",
    period: "Jul 2020 – Jul 2024",
    description: "Engineered and operated secure, scalable cloud infrastructure across AWS, Azure, and GCP for mission-critical systems.",
    achievements: [
      "Enforced strict banking-grade security policies including RBAC, VPC peering, and encryption, ensuring rigorous audit compliance.",
      "Managed production Kubernetes environments ensuring high availability, scalability, and automated workload scaling.",
      "Architected CI/CD pipelines using Jenkins, Git, Terraform, and Ansible, reducing deployment lead time by 70%.",
      "Implemented Infrastructure as Code (IaC) using Terraform, reducing configuration drift and ensuring consistent provisioning.",
      "Built and supported high-throughput APIs using Java Spring Boot and Node.js on Kubernetes.",
      "Led automation initiatives that reduced system downtime by 25% through improved monitoring and self-healing infrastructure."
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Enterprise AI Model-Serving Platform",
    subtitle: "vLLM, KServe, Kubernetes",
    description: "Built a standardized Kubernetes-based model-serving platform for ML and LLM inference, decoupling application logic from model internals.",
    techStack: ["vLLM", "KServe", "Kubernetes", "DVC", "RAG"],
    metrics: [
      "Optimized GPU utilization",
      "Seamless rollbacks via DVC",
      "Benchmarked high throughput"
    ]
  },
  {
    title: "Real-Time AI Voice Calling Platform",
    subtitle: "Azure AI, Twilio",
    description: "Designed and operated a real-time AI voice inference platform integrated with telephony systems for automated customer interaction.",
    techStack: ["Azure AI Foundry", "Twilio", "App Services", "Real-time Audio"],
    metrics: [
      "Sub-200ms response latency",
      "High concurrent call load",
      "Natural conversation flow"
    ]
  },
  {
    title: "Verizon Ticket Management",
    subtitle: "Spring Boot, CI/CD",
    description: "Wireless Platform Enablement pipeline for migrating 50M+ records during platform modernization with zero data loss.",
    techStack: ["Spring Boot", "CI/CD", "Kubernetes", "Data Migration"],
    metrics: [
      "50M+ records migrated",
      "Zero data loss",
      "Streamlined release process"
    ]
  },
  {
    title: "Vehicle & Home Loan Management",
    subtitle: "AWS, Terraform, Docker",
    description: "Secure, scalable cloud infrastructure for a high-traffic loan platform handling sensitive financial data.",
    techStack: ["AWS", "Terraform", "Docker", "CI/CD"],
    metrics: [
      "Release time reduced by 40%",
      "Consistent env scaling",
      "High availability (HA)"
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  { 
    name: "AWS Certified Solutions Architect", 
    issuer: "Amazon Web Services"
  },
  { 
    name: "AWS Certified Cloud Practitioner", 
    issuer: "Amazon Web Services"
  },
  { 
    name: "Google Cloud Certified Associate Cloud Engineer", 
    issuer: "Google Cloud"
  },
  { 
    name: "Oracle Cloud Infrastructure 2023 Foundations Associate", 
    issuer: "Oracle"
  },
  { 
    name: "IBM Blockchain Foundation Developer & Docker Essentials", 
    issuer: "IBM"
  }
];

export const EDUCATION: EducationItem = {
  degree: "Bachelor of Technology – Information Technology",
  institution: "SRM Institute of Science and Technology, India",
  year: "2016 – 2020"
};