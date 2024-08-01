export type RouteDataType = {
  id: number;
  title: string;
  speed: string;
  from: string;
  to: string;
  busImg: string;
  seats: SeatType[];
};

export type SeatType = {
  id: number;
  number: number;
  isAvailable: boolean;
};
