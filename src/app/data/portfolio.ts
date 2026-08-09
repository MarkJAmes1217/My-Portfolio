import { Portfolio } from '../models/portfolio.models';

export const PORTFOLIO: Portfolio = {
  profile: {
    name: 'Mark James Brian S. Dela Cruz',
    title: 'Full-Stack Developer',
    location: 'Laguna, Philippines',
    email: 'markjames1217@gmail.com',
    summary:
      'Full-stack developer with experience building and enhancing enterprise web applications, airline booking platforms, REST APIs, and modern Angular applications.'
  },
  projects: [
    {
      id: 'cebu-pacific-booking',
      name: 'Cebu Pacific Airline Booking',
      category: 'Airline / Travel',
      role: 'Angular Developer / Full-Stack Developer',
      employer: 'BCS Technology International',
      period: '2023 - Present',
      description:
        'Maintained and enhanced an enterprise airline booking application, implementing user interface features and business requirements using Angular and supporting backend technologies.',
      responsibilities: [
        'Develop and maintain Angular application features',
        'Translate Figma designs into desktop-focused user interfaces',
        'Implement airline booking and ancillary-related functionality',
        'Work with REST APIs and backend services',
        'Fix bugs and implement business-rule changes'
      ],
      technologies: [
        'Angular v8',
        'TypeScript',
        'REST API',
        'Angular Material',
        'Navitaire DotRez',
        'Git',
        'Figma'
      ],
      portfolioHighlights: [
        'Enterprise airline booking',
        'Angular application development',
        'Figma-to-UI implementation',
        'Airline ancillary and fare functionality'
      ],
      stack: {
        frontend: ['Angular', 'Angular Material', 'TypeScript', 'HTML', 'SASS'],
        backend: [],
        apis: ['REST API', 'Navitaire DotRez'],
        tools: ['Git']
      }
    },
    {
      id: 'volaris-booking',
      name: 'Volaris Airline Booking',
      category: 'Airline / Travel',
      role: 'Angular Developer / Full-Stack Developer',
      employer: 'BCS Technology International',
      period: '2023 - Present',
      description:
        'Maintained and enhanced the Volaris airline booking application, working on fare, baggage, benefits, passenger, and ancillary-service functionality.',
      responsibilities: [
        'Develop Angular features using modern Angular patterns',
        'Implement Angular Signals where applicable',
        'Work with REST APIs and backend services',
        'Implement fare, baggage, service, and passenger-related business rules',
        'Debug and resolve development issues'
      ],
      technologies: [
        'Angular v18',
        'Angular Signals',
        'TypeScript',
        '.NET Core',
        'REST API',
        'Navitaire DotRez',
        'Git',
        'Postman'
      ],
      portfolioHighlights: [
        'Airline booking',
        'Fare benefits',
        'Baggage combinations',
        'Passenger tier combinations',
        'Ancillary services',
        'CMS-driven benefits'
      ],
      stack: {
        frontend: ['Angular 18', 'TypeScript', 'Angular Signals', 'Angular Material'],
        backend: ['.NET Core'],
        apis: ['REST API', 'Navitaire DotRez'],
        tools: ['Git', 'Postman', 'Claude AI']
      }
    },
    {
      id: 'd365-sovops',
      name: 'D365 SovOps Web Application',
      category: 'Enterprise Business Application',
      role: 'Full-Stack Developer SovOps',
      employer: 'Confidential',
      description:
        'Worked on the transition of a D365 SovOps application into an Angular web application, with a Node.js backend and Azure Cosmos DB.',
      responsibilities: [
        'Develop Angular web application features',
        'Translate Figma designs into desktop-focused UI',
        'Implement frontend business functionality',
        'Integrate the Angular application with Node.js backend services',
        'Work with data stored in Azure Cosmos DB'
      ],
      technologies: [
        'Angular 20',
        'TypeScript',
        'Node.js',
        'Azure Cosmos DB',
        'REST API',
        'Git'
      ],
      portfolioHighlights: [
        'D365 application transition',
        'Angular web application',
        'Node.js backend integration',
        'Azure Cosmos DB'
      ],
      stack: {
        frontend: ['Angular v20', 'TypeScript', 'Angular Material'],
        backend: ['Node.js'],
        database: ['Azure Cosmos DB'],
        apis: ['REST API'],
        tools: ['Git']
      },
      notes: [
        'Worked with the existing Cosmos DB implementation; did not design the database architecture.',
        'Application prioritized desktop usage rather than responsive/mobile-first design.'
      ]
    },
    {
      id: 'rarejobs-online-education',
      name: 'RareJobs Online Education Platform',
      category: 'Education / SaaS',
      role: 'Full-Stack Developer',
      employer: 'WestActon, Inc.',
      description:
        'Worked on an online education-related web application for a Japanese client.',
      responsibilities: [
        'Develop and maintain web application features',
        'Build and maintain REST APIs',
        'Implement CRUD functionality',
        'Integrate backend services with databases',
        'Work with authentication and business logic'
      ],
      technologies: ['PHP', 'Laravel', 'MySQL', 'REST API', 'JavaScript', 'Git'],
      portfolioHighlights: [
        'Online education',
        'SaaS application',
        'Laravel REST APIs',
        'Database integration'
      ],
      stack: {
        frontend: ['React', 'HTML', 'SASS'],
        backend: ['PHP 7/8+', 'Laravel'],
        database: ['MySQL'],
        apis: ['REST API'],
        tools: ['Git']
      }
    },
    {
      id: "homeworks",
      name: "Homeworks",
      category: "Employee Monitoring",
      role: "Full-Stack Developer",
      employer: 'WestActon, Inc.',
      description: "A web-based employee monitoring application built with React and Laravel. The platform tracks employee time-in and time-out records, monitors current employee location using Google APIs, and periodically captures screen activity at configured intervals.",
      responsibilities: [
        "Developed and maintained features using React and Laravel",
        "Deployed the application to Test and Production environments on AWS EC2 instances",
        "Implemented face recognition authentication as an additional login feature",
        "Developed and maintained employee time-in and time-out functionality",
        "Worked on employee location tracking using Google APIs",
        "Implemented and maintained periodic screen-capture functionality",
        "Developed and maintained REST API integrations"
      ],
      technologies: [
        "React",
        "Laravel PHP",
        "MySQL",
        "REST API",
        "Google APIs",
        "AWS EC2",
        "Face Recognition",
        "Git"
      ],
      portfolioHighlights: [],
      stack: {
        frontend: ["React", "HTML", "SCSS"],
        backend: ["Laravel PHP"],
        database: ["MySQL"],
        apis: ["REST API", "Google APIs"],
        tools: ["Git", "AWS EC2", "AWS S3", "Face Recognition", "Docker"]
      }
    },
    {
  id: 'tigertiger',
  name: 'TigerTiger',
  category: 'Logistics / Delivery',
  role: 'Full-Stack Developer',
  employer: 'Project Gordius',
  description:
    'A delivery application built with Ionic Angular and NestJS, integrating Google Maps for location-based delivery functionality.',
  responsibilities: [
    'Developed the mobile application using Ionic Angular',
    'Developed backend services using NestJS',
    'Integrated Google Maps API for location-based functionality',
    'Implemented delivery-related application features',
    'Integrated the frontend application with backend APIs'
  ],
  technologies: [
    'Ionic Angular',
    'Angular',
    'TypeScript',
    'NestJS',
    'Node.js',
    'Google Maps API',
    'REST API',
    'MySQL',
    'Git'
  ],
  portfolioHighlights: [
    'Ionic Angular mobile application',
    'NestJS backend',
    'Google Maps integration',
    'Location-based functionality',
    'Full-stack development'
  ],
  stack: {
    frontend: [
      'Ionic Angular',
      'Angular',
      'TypeScript'
    ],
    backend: [
      'NestJS',
      'Node.js'
    ],
    database: [
      'MySQL'
    ],
    apis: [
      'REST API',
      'Google Maps API'
    ],
    tools: [
      'Git'
    ]
  }
},
{
  id: 'ama-online-education',
  name: 'AMA Online Education',
  employer: 'Collabera',
  category: 'Education / E-Learning',
  role: 'Frontend Developer',
  description:
    'An online education application developed using React, focused on delivering user-facing features and integrating frontend functionality with backend REST APIs.',
  responsibilities: [
    'Translated Figma designs into React user interfaces',
    'Developed and maintained frontend features using React',
    'Integrated frontend functionality with backend REST APIs',
    'Integrated and displayed data retrieved from backend APIs'
  ],
  technologies: [
    'React',
    'REST API'
  ],
  portfolioHighlights: [
    'React development',
    'Figma to UI implementation',
    'REST API integration',
    'Online education platform'
  ],
  stack: {
    frontend: [
      'React'
    ],
    apis: [
      'REST API'
    ],
    design: [
      'Figma'
    ],
    tools: [
      'Jira'
    ]
  }
},
{
  id: 'test-automation-platform',
  name: 'Test Automation Platform',
  employer: 'SpinifexIT',
  category: 'Test Automation / Backend',
  role: 'Test Automation / Full-Stack Developer',
  description:
    'A test automation solution built with Katalon Studio and Groovy, integrated into the existing CI/CD pipeline. The project includes automated test scenarios, Gherkin and Cucumber-based test scripts, a NestJS backend API for triggering test execution with queue management, and automated test result integration with Jira.',
  responsibilities: [
    'Developed automated test cases using Katalon Studio and Groovy',
    'Created automated test scenarios covering functional and happy-path workflows',
    'Integrated test automation execution into the existing CI/CD pipeline',
    'Created test scenarios using Gherkin syntax',
    'Developed Cucumber test scripts',
    'Developed a NestJS backend API for triggering test automation through API calls',
    'Implemented a queueing mechanism to manage test execution requests',
    'Developed and maintained REST API endpoints using NestJS and TypeScript',
    'Integrated automated test execution results into Jira',
    'Automated the reporting of test execution results to Jira'
  ],
  technologies: [
    'Katalon Studio',
    'Groovy',
    'Gherkin',
    'Cucumber',
    'NestJS',
    'TypeScript',
    'REST API',
    'Jira',
    'CI/CD'
  ],
  portfolioHighlights: [
    'Katalon Studio and Groovy test automation',
    'CI/CD integration',
    'Gherkin and Cucumber automation',
    'API-triggered test execution',
    'Test execution queueing',
    'Automated Jira test result reporting',
    'NestJS backend development'
  ],
  stack: {
    testAutomation: [
      'Katalon Studio',
      'Groovy',
      'Gherkin',
      'Cucumber'
    ],
    backend: [
      'NestJS',
      'TypeScript'
    ],
    apis: [
      'REST API'
    ],
    projectManagement: [
      'Jira'
    ],
    devops: [
      'CI/CD'
    ]
  }
},
    {
  id: 'bidride',
  name: 'Bidride',
  category: 'Personal Project',
  role: 'Full-Stack Developer',
  status: 'In Progress',
  description:
    'An ongoing personal project focused on building a full-stack web application using Angular 22, Spring Boot, and PostgreSQL.',
  responsibilities: [
    'Design and develop the frontend application using Angular 22',
    'Develop REST APIs using Spring Boot',
    'Implement backend business logic',
    'Integrate the Angular frontend with Spring Boot APIs',
    'Design and implement PostgreSQL database integration',
    'Implement application features and functionality',
    'Test and validate APIs using Postman'
  ],
  technologies: [
    'Angular 22',
    'TypeScript',
    'Java',
    'Spring Boot',
    'PostgreSQL',
    'REST API',
    'Google APIs',
    'Postman',
    'Git'
  ],
  portfolioHighlights: [
    'Personal full-stack application',
    'Angular 22 development',
    'Spring Boot development',
    'REST API development',
    'PostgreSQL integration'
  ],
  stack: {
    frontend: [
      'Angular 22',
      'TypeScript'
    ],
    backend: [
      'Java',
      'Spring Boot'
    ],
    database: [
      'PostgreSQL'
    ],
    apis: [
      'REST API'
    ],
    tools: [
      'Git',
      'Postman',
      'Docker',
      'Google APIs',
      'Swagger'
    ]
  }
},
{
  id: 'encryptor-decryptor',
  name: 'Encryptor / Decryptor',
  category: 'Personal Project',
  role: 'Backend Developer',
  status: 'Completed',
  description:
    'A personal utility project developed using .NET Core and C# for encrypting and decrypting data.',
  responsibilities: [
    'Developed encryption and decryption functionality using C#',
    'Built the application using .NET Core',
    'Implemented data encryption and decryption processes',
    'Handled encrypted and decrypted data within the application'
  ],
  technologies: [
    '.NET Core',
    'C#'
  ],
  portfolioHighlights: [
    'Data encryption',
    'Data decryption',
    '.NET Core development',
    'C# development'
  ],
  stack: {
    backend: [
      '.NET Core',
      'C#'
    ]
  }
},
{
  id: 'limo-center',
  name: 'Limo Center',
  category: 'Transportation / Limousine Management',
  role: 'Developer',
  description:
    'A limousine management application for a Germany-based client, built on a legacy PHP codebase.',
  responsibilities: [
    'Maintained and enhanced the existing legacy PHP application',
    'Implemented application changes based on business requirements',
    'Worked with the existing application codebase and functionality'
  ],
  technologies: [
    'PHP'
  ],
  portfolioHighlights: [
    'Legacy PHP application',
    'Limousine management',
    'International client'
  ],
  stack: {
    backend: [
      'PHP'
    ],
    database: [
      'MySQL'
    ]
  }
}
  ],
  additionalExperience: {
    frontend: ['Angular Typescript', 'React', 'Ionic Angular Typescript', 'NativeScript'],
    backend: ['.NET Core', 'Node.js', 'NestJS', 'PHP', 'Laravel', 'Spring Boot Java'],
    databasesAndStorage: ['MySQL', 'PostgreSQL', 'Microsoft SQL Server', 'Azure Cosmos DB', 'Redis', 'AWS S3', 'Firebase'],
    cloudAndServices: ['Azure Functions', 'Google Maps API', 'Navitaire DotRez', "AWS EC2", "CI/CD Pipelines"],
    tools: ['Git', 'Docker', 'NPM', 'Postman', 'Claude AI', 'Figma', 'Jira', 'Maven'],
    testingAndEngineering: ['Katalon Studio Groovy', 'TDD', 'Protractor Jasmine', 'SOLID']
  }
};