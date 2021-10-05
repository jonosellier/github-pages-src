export interface IResumeData {
  education: IEducation[];
  professionalExperience: IExperience[];
  skills: string[];
}

export interface IEducation {
  school: string;
  diploma: string;
  date: {
    from: string;
    to: string;
  };
  notableClasses?: string[];
}

export interface IExperience {
  employer: string;
  title: string;
  date: { from: string; to: string };
  description: string;
}

export class ResumeData {
  education: Education[];
  professionalExperience: Experience[];
  skills: string[];

  constructor(data: IResumeData) {
    this.education = data.education.map((e) => new Education(e));
    this.professionalExperience = data.professionalExperience.map(
      (e) => new Experience(e)
    );
    this.skills = data.skills;
  }
}

export class Education {
  type = 'Education';
  school: string;
  diploma: string;
  date: {
    from: Date;
    to: Date | 'present';
  };
  notableClasses?: string[];

  constructor(data: IEducation) {
    this.school = data.school;
    this.diploma = data.diploma;
    this.date = {
      to: data.date.to === 'present' ? 'present' : new Date(data.date.to),
      from: new Date(data.date.from),
    };
    this.notableClasses = data.notableClasses;
  }
}

export class Experience {
  type = 'Experience';
  title: string;
  employer: string;
  date: { from: Date; to: Date | 'present' };
  description: string;

  constructor(data: IExperience) {
    this.title = data.title;
    this.employer = data.employer;
    this.description = data.description;
    this.date = {
      to: data.date.to === 'present' ? 'present' : new Date(data.date.to),
      from: new Date(data.date.from),
    };
  }
}
