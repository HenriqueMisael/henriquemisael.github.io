export const City = (json: any): ICity => {
  const {city, state, country} = json;
  return {city, state, country}
};

export interface ICity {
  city: string;
  state: string;
  country: string;
}
