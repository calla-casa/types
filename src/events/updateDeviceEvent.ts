import { CallaEvent } from '@/callaEvent';
import { Device } from '@/device';

export type UpdateDeviceEventData = Omit<Device, 'boardId' | 'meta' | 'order'>;

export type UpdateDeviceEvent = CallaEvent<UpdateDeviceEventData>;
