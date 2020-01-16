import { City, ICity } from './ICity';

export const PersonalInfo = (json: any): IPersonalInfo => {
  const {name, surname, birthday, hometown, residence} = json;
  return {name, surname, birthday, hometown: City(hometown), residence: City(residence)};
};

export interface IPersonalInfo {
  name: string;
  surname: string;
  birthday: string;
  hometown: ICity;
  residence: ICity;
}

export interface IPersonalInfo {
  name: string;
  surname: string;
  birthday: string;
  hometown: ICity;
  residence: ICity;
}
