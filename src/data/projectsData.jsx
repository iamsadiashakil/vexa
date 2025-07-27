import confiz from '../assets/project-confiz-nhp.jpg'
import walmart from '../assets/project-walmart.jpg'
import revinate from '../assets/project-revinate.png'
import secp from '../assets/secp.png'
import customer from '../assets/project-customer.png'
import pie from '../assets/project-pie.png'
import staff from '../assets/project-staff.png'
import patient from '../assets/project-patient.png'
import health from '../assets/project-health.png'

export const projectsData = [
  {
    id: 1,
    slug: 'revinate-applications',
    title: 'Revinate Applications',
    description:
      'Development of RESTful API solutions for the Revinate platform, including subscription management, Ressales and Marketing.',
    image: revinate,
    link: 'https://www.revinate.com/',
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'AWS EKS', 'PHP', 'Docker', 'Apache Kafka'],
    problem: 
      'Revinate needed to modernize their hospitality platform while maintaining legacy systems. They faced challenges with scaling their subscription management, ressales and marketing applications to meet growing demand, while also managing a complex cloud migration from legacy PHP applications to modern microservices architecture. Additionally, they needed robust RESTful APIs to support their expanding suite of applications and improve integration capabilities.',
    solution:
      'I played a key role in developing RESTful API solutions for the Revinate platform, focusing on subscription management, ressales and marketing. My responsibilities included implementing new features while ensuring backward compatibility with legacy PHP systems, fixing bugs in existing code, and contributing to the deployment of services to AWS EKS. I designed scalable microservices using Spring Boot and implemented security best practices with Spring Security. The Docker containerization approach allowed for consistent deployment across development and production environments. This modernization effort resulted in improved system performance, better scalability, and enhanced monitoring capabilities, all while maintaining service continuity for existing customers.'
  },
  {
    id: 2,
    slug: 'secp-high-availability-apis',
    title: 'SECP',
    description:
      'Designed and built highly-available and secure API solutions in Java Spring Boot for the Securities & Exchange Commission of Pakistan (SECP).',
    image: secp,
    link: 'https://www.secp.gov.pk/',
    techStack: ['Java', 'Spring Boot', 'Spring Security'],
    problem:
      'The Securities & Exchange Commission of Pakistan (SECP) required a modern, high-availability API solution to replace their legacy systems. The existing infrastructure suffered from reliability issues, security vulnerabilities, and limited scalability, impacting their ability to efficiently regulate and oversee financial markets. The system needed to handle sensitive financial data with robust security measures while ensuring 24/7 availability even during peak loads.',
    solution:
      'I designed and implemented a comprehensive API solution using Java Spring Boot and Spring Security, focusing on creating a robust, secure, and highly available system. The architecture incorporated redundancy at multiple levels to eliminate single points of failure, along with sophisticated load balancing to distribute traffic efficiently. Security was enhanced through implementation of OAuth2 authentication, role-based access control, and encryption of sensitive data both at rest and in transit. The solution included comprehensive monitoring and automated failover mechanisms, with thorough documentation and knowledge transfer to the SECP technical team. This modernization significantly improved system reliability, security posture, and performance, enabling the SECP to better fulfill its regulatory mandate.'
  },
  {
    id: 3,
    slug: 'walmart-clinical-prescriber-platforms',
    title: 'Walmart Health & Wellness',
    description:
      'Collaborated on multiple Health & Wellness projects for Walmart, including Clinical Packages, Compound Drugs and RDM Carbon Prescriber.',
    image: walmart,
    link: 'https://www.walmart.com/',
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'Apache Kafka'],
    problem:
      'Walmarts healthcare platforms faced significant challenges in their pharmacy and clinical services. The existing systems for compound drugs lacked flexibility for complex medication formulations and pricing structures. Simultaneously, the prescriber platform struggled with integration limitations, making it difficult to maintain a unified view of prescriber data across different systems. These technical constraints were limiting Walmarts ability to innovate and scale their healthcare offerings while maintaining compliance with healthcare regulations and data security standards.',
    solution:
      'I contributed to the development of the healthcare systems for Walmart. For the Clinical Packages and Compound Drugs system, I designed and implemented flexible APIs that could handle complex medication combinations and dynamic pricing models. The solution employed a microservices architecture with Spring Boot to enable independent scaling and deployment of components. For the RDM Carbon Prescriber platform, I developed secure APIs that facilitated seamless integration between disparate prescriber systems, creating a consolidated view of prescriber data. Both systems incorporated robust security measures using Spring Security to ensure HIPAA compliance and protect sensitive healthcare information. The implementations followed healthcare industry best practices for data governance and featured comprehensive logging and monitoring capabilities to enable rapid problem resolution. These solutions allowed Walmart to enhance their pharmacy services while maintaining high reliability and security standards.'
  },
  {
    id: 4,
    slug: 'PIE-international',
    title: 'PIE International',
    description:
      'As part of a high-impact initiative for PIE International, I contributed to the development of Flooss—a financial services platform designed for clients in the Middle East. The project involved building a custom backend using Java Spring Boot, with a strong emphasis on flexibility, scalability, and compliance with regional financial regulations.',
    image: pie,
    link: 'https://pie-int.com/',
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'PostgreSQL'],
    problem:
      'PIE International needed a fully customized financial platform designed to meet the unique regulatory, business, and cultural requirements of clients in the Middle East. Off-the-shelf systems lacked the flexibility to support regional financial workflows, including Sharia-compliant logic, multi-tenant onboarding, and localized user experiences. The client also required a mobile-first solution to ensure accessibility across a diverse user base, especially in markets where mobile usage dominates. Integration with third-party systems and future scalability were also critical requirements.',
    solution:
      'To address these needs, we developed Flooss, a complete financial solution with a custom backend built in Java Spring Boot and a native Android frontend. The backend was architected using modular microservices with Spring Data JPA for efficient database operations, Spring Security for authentication and role-based access. PostgreSQL was used as the primary data store. The Android application was developed using Java and Android Studio, designed with an intuitive UI and full integration with backend APIs to ensure seamless real-time interactions. Together, the system supported complex financial workflows, ensured regulatory compliance, and provided a scalable, mobile-first experience tailored to the Middle Eastern market.'
  },
  {
    id: 5,
    slug: 'confiz-nhp-mi-heal',
    title: 'Confiz Core Product & NHP – Mi Heal Team App',
    description:
      'Built new features for the Confiz Core product and developed the NHP – Mi Heal Team mobile application.',
    image: confiz,
    link: 'https://www.confiz.com/mobile-application-development/',
    techStack: ['C#', 'Xamarin Android', 'MVVM Cross'],
    problem:
      'Confiz faced dual challenges with their core product and mobile healthcare initiative. The core product required new features to remain competitive, while the National Health Program (NHP) needed a mobile solution for healthcare teams. The Mi Heal Team app needed to function reliably in areas with limited connectivity, maintain patient data security, and provide an intuitive interface for healthcare professionals with varying levels of technical proficiency. Additionally, the app needed to integrate with existing health information systems while operating efficiently on a variety of Android devices.',
    solution:
      'For the Confiz Core product, I implemented several critical features that enhanced functionality and user experience, working within the existing architecture to ensure seamless integration. For the NHP – Mi Heal Team app, I developed a robust mobile application using C# and Xamarin Android following the MVVM Cross pattern for clean separation of concerns. The application featured offline capabilities with intelligent sync when connectivity became available, ensuring healthcare teams could continue working in remote areas. Security was implemented at multiple levels to protect sensitive patient data, including encryption and secure authentication mechanisms. The user interface was designed with extensive input from healthcare professionals to ensure usability in clinical settings. I optimized performance for a range of Android devices, including lower-end models common in field use. The application successfully integrated with existing health information systems through carefully designed APIs. This solution significantly improved the efficiency of healthcare teams, enabling them to serve more patients effectively while maintaining high data quality and security standards.'
  },
  {
    id: 6,
    slug: 'customer-app',
    title: 'Customer App',
    description:
      'Spring Boot-based RESTful API for managing customers and users with JWT-based authentication and authorization.',
    image: customer,
    link: 'https://github.com/iamsadiashakil/customer-app',
    techStack: [
      'Java 11',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'PostgreSQL',
      'Swagger',
      'MapStruct',
      'Lombok',
      'Hibernate',
    ],
    problem:
      'There was a need to create a robust and secure backend system that could efficiently manage customers and users. The goal was to implement secure authentication, role-based authorization, and provide scalable CRUD operations on customer data. Additionally, the system needed to support modern API practices such as documentation via Swagger and a modular, maintainable codebase.',
    solution:
      'I built a secure and modular backend REST API using Spring Boot. Key features included JWT-based authentication, role-based authorization via Spring Security, and efficient customer/user management through RESTful endpoints. The system uses PostgreSQL for persistence, MapStruct for DTO to entity mapping, and Lombok to reduce boilerplate. Swagger integration ensures clear API documentation. I structured the project with a clean layered architecture and added CORS configuration, versioning for REST APIs, and detailed logging. The resulting solution was highly maintainable, secure, and ready for deployment in production environments.'
  },
  {
    id: 7,
    slug: 'staff-app',
    title: 'StaffApp',
    description:
      'An Android application designed for health professionals to manage patient vitals, communicate with caretakers, and manage their profile efficiently.',
    image: staff, // Add actual image in /public/assets/
    link: 'https://github.com/iamsadiashakil/StaffApp',
    techStack: ['Java', 'Android', 'XML', 'Firebase', 'Android Studio'],
    problem:
      'Healthcare professionals needed a mobile solution to track patient vitals, communicate with caretakers, and manage their own professional profiles. The lack of a unified, mobile-accessible system resulted in fragmented workflows and delayed communications.',
    solution:
      'I contributed to the development of StaffApp, an Android application aimed at streamlining healthcare tasks for professionals. Key features included secure login, password recovery, and account creation. The app allowed staff to manage and update vital signs for patients, interact directly with caregivers through in-app communication tools, and maintain their own professional profiles. Developed using Java and Firebase, the app targeted Android SDK 21–33, ensuring compatibility with a wide range of devices. The project was built and tested using Android Studio Arctic Fox and emphasized smooth UX and robust functionality for healthcare environments.',
  },
  {
    id: 8,
    slug: 'patient-app',
    title: 'Patient App',
    description:
      'A healthcare management Android application that enables caretakers to monitor patient vitals, access medical records, and communicate securely with healthcare professionals.',
    image: patient, // Make sure this image exists or adjust the path
    link: 'https://github.com/iamsadiashakil/PatientApp',
    techStack: ['Java', 'Android', 'Firebase', 'Gradle', 'Material Design'],
    problem:
      'Caretakers lacked a centralized and secure mobile solution to access patient medical records and communicate with healthcare providers. Fragmented access to patient data resulted in delays and inefficiencies in delivering timely care.',
    solution:
      'I helped build the Patient App using Java and Android Studio, backed by Firebase for secure real-time messaging. The app features secure messaging between caretakers and healthcare professionals, access to complete medical records (vitals, allergies, test history, etc.), and a clean UI designed with Material Design principles. It was optimized for Android SDK 21 through 33, ensuring compatibility across modern devices. The implementation also emphasized secure data handling, ease of use, and scalability for growing healthcare teams.',
  },
  {
    id: 9,
    slug: 'healthcare-service-api',
    title: 'Healthcare Service API',
    description:
      'Spring Boot-based RESTful API to manage patients, doctors, and appointments in a healthcare system. Designed with clean architecture, validation rules, and ready for future scalability.',
    image: health, // Make sure this image exists or adjust the path
    link: 'https://github.com/iamsadiashakil/healthcare-service', // Or GitHub repo link if available
    techStack: [
      'Java',
      'Spring Boot',
      'REST APIs',
      'Docker',
      'Maven',
      'PostgreSQL',
    ],
    problem:
      'Managing patients, doctors, and appointments manually or with disconnected systems often leads to inefficiencies and poor healthcare delivery. There was a need for a central, robust, and scalable backend system with clear validation and future extensibility.',
    solution:
      'I developed a modular RESTful API system using Spring Boot to handle patient records, doctor profiles, and appointment scheduling. It includes full CRUD support, input validation, and future-ready architecture. Docker Compose was used to containerize and manage the database environment. The codebase is designed to be extensible, with planned integrations for JWT-based security and Swagger API documentation. Data integrity is enforced through strict validation, and the application is easy to run and test using Maven and Docker.',
  }
];

export default projectsData;
