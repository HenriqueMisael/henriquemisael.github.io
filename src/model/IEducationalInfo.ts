import { IPeriod, Period } from './IPeriod';

export const EducationalInfo = (json: any) => {
  const { name, college, period, subjects } = json;

  return { name, college, period: Period(period), subjects };
};

export interface IEducationalInfo {
  name: string;
  college: string;
  period: IPeriod;
  subjects: string[];
}
