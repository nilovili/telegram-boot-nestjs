import { Injectable } from '@nestjs/common';

@Injectable()
export class DataService {
  private readonly personalInfo = {
    name: 'Nilo Ivan Soruco',
    location: 'Tarija, Bolivia (GTM-4)',
    phone: '(+591) 76186173',
    email: 'ivan.soruco@gmail.com',
    linkedin: 'https://linkedin.com/niloivansoruco',
    github: 'https://github.com/nilovili',
  };

  private readonly aboutMe =
    'Desarrollador BackEnd con 3 años y medio ... (resto de la descripción)';

  private readonly workExperience = [
    {
      company: 'Caja Bancaria Estatal del (Bolivia)',
      position: 'Consultor Eventual Programador FullStack',
      date: 'Actualidad',
      description: [
        'Desarrollo y mantenimiento de los sistemas de la Caja Bancaria Estatal.',
        'Actualmente desarrollando un sistema de seguridad para ingreso a los sistemas de la institución.',
      ],
      techStack: ['TypeScript', 'NestJs', 'Angular 16', 'POSTGRESQL'],
    },
    {
      company: 'FACTUMX',
      position: 'Consultor por producto Programador Backend',
      date: '24-03-2023 al 01-08-2023',
      description: [
        'Consultoría por producto para la reingeniería al sistema de información del registro único de establecimientos en salud (RUES) y gobernanza de datos en salud',
        'Se realizó un 100% de las apis solicitadas.',
      ],
      techStack: ['TypeScript', 'NestJs', 'POSTGRESQL'],
    },
    // ... Continuar de la misma forma con las demás experiencias laborales
  ];

  private readonly skills = {
    programmingLanguages: ['Java', 'Spring', 'TypeScript', 'NodeJs', 'NestJs'],
    frameworks: ['Angular 13'],
    databases: ['PosgreSQL', 'Mysql'],
    tools: ['Git', 'GitLab', 'Postman', 'Trello'],
    methodologies: ['Scrum'],
    languages: [
      { language: 'Inglés', level: 'Básico' },
      { language: 'Español', level: 'Nativo' },
    ],
  };

  private readonly education = [
    {
      institution: 'Universidad Juan Misael Saracho',
      location: 'Tarija, Bolivia',
      degree: 'Licenciatura en Ingeniería Informática',
      year: 2011,
    },
    {
      institution: 'Oracle NEXT EDUCATION',
      description: '333 hrs. De capacitación en distintas áreas.',
      year: 2022,
    },
  ];

  private readonly certifications = [
    {
      institution: 'Platzi',
      courses: [
        'Curso Profesional de Git y GitHub',
        'Fundamentos de Programación en SWIFT',
        'Programación Orientada a Objetos',
        'Curso Básico de Python',
        'Análisis de negocios para Ciencia de Datos',
      ],
      year: 2022,
    },
    {
      institution: 'Udemy',
      courses: ['Universidad de JAVA'],
      year: 2021,
    },
    {
      institution: 'Google Actívate',
      courses: ['Desarrollo de Aplicaciones Móviles'],
      year: 2020,
    },
  ];

  getPersonalInfo() {
    return this.personalInfo;
  }

  getAboutMe() {
    return this.aboutMe;
  }

  getWorkExperience() {
    return this.workExperience;
  }

  getSkills() {
    return this.skills;
  }

  getEducation() {
    return this.education;
  }

  getCertifications() {
    return this.certifications;
  }
}
