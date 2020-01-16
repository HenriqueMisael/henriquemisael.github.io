import { PersonalInfo, IPersonalInfo } from './IPersonalInfo';
import { EducationalInfo, IEducationalInfo } from './IEducationalInfo';
import { IWorkInfo, WorkingInfo } from './IWorkInfo';
import { IInterestInfo } from './IInterestInfo';
import { IDevSkillInfo, ILanguageSkillInfo, SkillInfo } from './SkillInfo';

export const CV = (json: any): ICV => {
  const personal = PersonalInfo(json.personal);
  const education = json.education.map((raw: any) => EducationalInfo(raw));
  const working = json.working.map((raw: any) => WorkingInfo(raw));
  const skills = json.skills.map((raw: any) => SkillInfo(raw));
  const interests = json.interests;

  return { personal, education, working, skills, interests };
};

export interface ICV {
  personal: IPersonalInfo;
  education: IEducationalInfo[];
  working: IWorkInfo[];
  skills: (ILanguageSkillInfo | IDevSkillInfo)[];
  interests: IInterestInfo[];
}
