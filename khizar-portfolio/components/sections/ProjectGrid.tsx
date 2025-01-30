import { GridPatternCard, GridPatternCardBody } from "@/components/ui/card-with-grid-ellipsis-pattern";

interface Project {
  title: string;
  description: string;
  tags: string[];
}

interface ProjectCardProps extends Project {
  key?: number | string;
}

const projectData: Project[] = [
  {
    title: "Project Management Dashboard",
    description: "A modern dashboard built with React and D3.js for real-time project analytics and team collaboration.",
    tags: ["React", "D3.js", "TypeScript"]
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with advanced filtering, cart management, and secure payment processing.",
    tags: ["Next.js", "Stripe", "PostgreSQL"]
  },
  {
    title: "AI Content Generator",
    description: "Natural language processing tool that helps create high-quality content using machine learning algorithms.",
    tags: ["Python", "TensorFlow", "FastAPI"]
  },
  {
    title: "Mobile Fitness App",
    description: "Cross-platform mobile application for tracking workouts, nutrition, and personal fitness goals.",
    tags: ["React Native", "Firebase", "Redux"]
  },
  {
    title: "Smart Home Controller",
    description: "IoT platform that integrates with various smart home devices for centralized control and automation.",
    tags: ["Node.js", "MQTT", "WebSockets"]
  },
  {
    title: "Social Media Analytics",
    description: "Real-time analytics platform for tracking social media engagement and audience insights.",
    tags: ["Vue.js", "GraphQL", "MongoDB"]
  }
];

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags }) => (
  <GridPatternCard className="transition-all duration-300 hover:scale-[1.02] flex items-center justify-center">
    <GridPatternCardBody className="flex flex-col items-center justify-center text-center w-full">
      <h3 className="text-lg font-bold mb-2 text-foreground">
        {title}
      </h3>
      <p className="text-sm text-foreground/60 mb-4">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 justify-center">
        {tags.map((tag: string, index: number) => (
          <span 
            key={index}
            className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
          >
            {tag}
          </span>
        ))}
      </div>
    </GridPatternCardBody>
  </GridPatternCard>
);

const ProjectGrid: React.FC = () => (
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projectData.map((project: Project, index: number) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </div>
);

export default ProjectGrid;