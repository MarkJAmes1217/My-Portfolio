export interface Project {
  id: string;
  name: string;
  category: string;
  role: string;
  employer?: string;
  period?: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  portfolioHighlights: string[];
  status?: string;
  stack: {
    testAutomation?: string[];
    frontend?: string[];
    backend?: string[];
    database?: string[];
    apis?: string[];
    tools?: string[];
    design?: string[];
    projectManagement?: string[];
    devops?: string[];
  };
  notes?: string[];
}

export interface Portfolio {
  profile: {
    name: string;
    title: string;
    location: string;
    email: string;
    summary: string;
  };
  projects: Project[];
  additionalExperience: {
    frontend: string[];
    backend: string[];
    databasesAndStorage: string[];
    cloudAndServices: string[];
    tools: string[];
    testingAndEngineering: string[];
  };
}