export type SpecialEvent = {
  month: number;
  day: number;
  name: string;
  type: 'birthday' | 'anniversary'
};

const events: SpecialEvent[] = [
  {
    month: 6,
    day: 26,
    name: 'Mike',
    type: 'birthday'
  }, {
    day: 15,
    month: 10,
    name: 'Stacy',
    type: 'birthday'
  }, {
    month: 11,
    day: 11,
    name: 'Mike & Stacy',
    type: 'anniversary'
  }
];

export default events;