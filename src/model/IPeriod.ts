export const Period = (json: any): IPeriod => {
  const { start, end } = json;

  return { start, end };
};

export interface IPeriod {
  start: string;
  end?: string;
}
