import { CallaEvent } from '@/callaEvent';

export type RegisterDeviceEventData = {
  id: string;
  name: string;
  platform: string;
  manufacturer: string;
  webViewVersion: string;
};

export type RegisterDeviceEvent = CallaEvent<RegisterDeviceEventData>;
