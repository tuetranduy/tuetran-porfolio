import { 
  Code2, FileCode, Database, TestTube2, GitBranch, 
  Container, Server, Workflow, Settings, Terminal
} from 'lucide-react';

// Using Lucide icons as fallback for consistent styling
export const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: FileCode, color: "#ED8B00" },
      { name: "JavaScript", icon: FileCode, color: "#F7DF1E" },
      { name: "Python", icon: FileCode, color: "#3776AB" },
      { name: "C#", icon: FileCode, color: "#512BD4" },
      { name: "TypeScript", icon: FileCode, color: "#3178C6" },
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "SQL Server", icon: Database, color: "#CC2927" },
      { name: "Oracle", icon: Database, color: "#F80000" },
      { name: "PostgreSQL", icon: Database, color: "#4169E1" },
      { name: "MySQL", icon: Database, color: "#4479A1" },
      { name: "MongoDB", icon: Database, color: "#47A248" },
    ]
  },
  {
    title: "Automation Frameworks & Tools",
    skills: [
      { name: "Selenium", icon: TestTube2, color: "#43B02A" },
      { name: "Appium", icon: TestTube2, color: "#662D91" },
      { name: "Cypress", icon: TestTube2, color: "#17202C" },
      { name: "Playwright", icon: TestTube2, color: "#2EAD33" },
      { name: "TestNG", icon: TestTube2, color: "#E53935" },
      { name: "Cucumber", icon: TestTube2, color: "#23D96C" },
      { name: "JMeter", icon: Server, color: "#D22128" },
      { name: "SpecFlow C#", icon: TestTube2, color: "#7B3F9E" },
    ]
  },
  {
    title: "DevOps & CI/CD",
    skills: [
      { name: "GitLab CI", icon: Workflow, color: "#FC6D26" },
      { name: "GitHub Actions", icon: Workflow, color: "#2088FF" },
      { name: "Jenkins", icon: Settings, color: "#D24939" },
      { name: "Azure DevOps", icon: Workflow, color: "#0078D7" },
    ]
  },
  {
    title: "Other Tools",
    skills: [
      { name: "Git", icon: GitBranch, color: "#F05032" },
      { name: "Docker", icon: Container, color: "#2496ED" },
      { name: "TFS", icon: Workflow, color: "#68217A" },
      { name: "ActiveMQ", icon: Terminal, color: "#D22128" },
    ]
  }
];

export const highlightSkills = [
  { label: "8+", description: "Years Experience" },
  { label: "50+", description: "Projects Delivered" },
  { label: "100K+", description: "Test Cases Automated" },
  { label: "15+", description: "Frameworks Built" },
];
