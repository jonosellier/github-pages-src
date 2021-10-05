import { Component, OnInit } from '@angular/core';
import { ResumeData } from 'src/app/models/resume';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  resume: ResumeData = new ResumeData({
    education: [
      {
        school: 'University of Trinidad and Tobago',
        diploma: 'Diploma in Software Engineering',
        date: { from: 'September 2013', to: 'June 2015' },
      },
      {
        school: 'Hillsborough Community College',
        diploma: 'Associate of Arts in Computer Science',
        date: { from: 'August 2016', to: 'May 2017' },
      },
      {
        school: 'University of South Florida',
        diploma: 'Bachelor of Science in Computer Science',
        date: { from: 'August 2017', to: 'May 2020' },
        notableClasses: [
          'Intro to AI',
          'Advanced JavaScript',
          'Database Design',
          'Software Development for Mobile Devices',
          'Social Media Mining',
          'IoT Systems Design',
        ],
      },
    ],
    professionalExperience: [
      {
        title: 'IT Assistant',
        employer: 'Guardian Group of Companies',
        date: { from: 'May 2016', to: 'June 2016' },
        description:
          'Helped carry out the hardware upgrade procedures taking place across Guardian Group’s companies including data transfer and additional configuration on the machines. I also provided help desk support for common IT-related issues beyond the scope of my original employment when my supervisor became aware of my aptitude for computers and troubleshooting. Was quickly allowed to work semi-independantly for certain locations.',
      },
      {
        title: 'Recreation and Wellness Staff',
        employer: 'University of South Florida',
        date: { from: 'May 2019', to: 'December 2019' },
        description:
          "Primarily my responsibilities were to facilitate access, equipment rental and, room reservations. I was also tasked to respond appropriately to medical and other emergencies, and give tours as needed. I distinguished myself within this position with minor technical support relating to automatic access control devices that was outside my official responsibilities. However, I felt that it was within my duty to troubleshoot any ongoing issues in my downtime as it may hinder the entire team's performance during more busy hours. I was reccomended by my manager to apply for a supervisor position in December.",
      },
      {
        title: 'Recreation and Wellness Supervisor',
        employer: 'University of South Florida',
        date: { from: 'December 2019', to: 'May 2020' },
        description:
          'In addition to my regular staff responsibilities I was also tasked with opening and closing all facilities as needed, handling and managing situations as a designated point of contact as well as handling the sale and renewal of memberships. I have also made an effort to make sure that newer staff members are aware of all procedures and details within the gym and are able to perform to the best of their ability, and be more independent at work. I left this position upon graduation to pursue a career in Web-App development.',
      },
      {
        title: 'Web Developer',
        employer: 'Boson Software',
        date: { from: 'May 2020', to: 'present' },
        description:
          'My primary role at Boson Software is the development and support of a web-based version of ExSim-Max, a testing suite designed primarily for IT certification practice exams. I also provide support for our Windows-only version (branded as Boson Exam Environment) by creating custom-made "simulation questions" which are VB or C# programs to simulate more complicated questions. Items include virtual terminals, drag and drop questions, and both desktop and mobile device configuration. My primary focus is front-end work but I have utilized a variety of technologies at my current role beyond front-end development.',
      },
    ],
    skills: [
      'Angular',
      'JavaScript',
      'TypeScript',
      'WebSockets',
      'Adobe Creative Cloud',
      'Python',
      'VisualBasic',
      'Express',
      'NextJS',
      'Object Oriented Design',
      'Functional Programming',
      'Search Engine Optimization',
      'Web Accessibility',
      'Web Animations',
      'CSS',
      'SCSS',
      'Azure',
      'Bash',
      'Linux',
      'MacOS',
    ],
  });
  constructor() {}

  ngOnInit(): void {}
}
