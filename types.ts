export interface SkillItem {
  name: string;
  level: number; // 0-100 for charts
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface ProjectItem {
  title: string;
  subtitle?: string;
  description: string;
  techStack: string[];
  metrics?: string[];
}

export interface CertificationItem {
  name: string;
  issuer?: string;
  link?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}
