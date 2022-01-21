import { CallaEvent } from '@/callaEvent';
import { Device } from '@/device';

export type RegisterDeviceEventData = Omit<Device, 'id' | 'boardId' | 'meta' | 'order'>;

export type RegisterDeviceEvent = CallaEvent<RegisterDeviceEventData>;
