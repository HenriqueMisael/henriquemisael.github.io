import { IPeriod, Period } from './IPeriod';

export const WorkingInfo = (json: any) => {
  const { position, company, period, competencies } = json;

  return { position, company, period: Period(period), competencies };
};

export interface IWorkInfo {
  position: string;
  company: string;
  period: IPeriod;
  competencies: string[];
}
