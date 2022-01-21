import { CallaEvent } from '@/callaEvent';

export type FetchBoardEventData = {
  deviceId: string;
};

export type FetchBoardEvent = CallaEvent<FetchBoardEventData>;
