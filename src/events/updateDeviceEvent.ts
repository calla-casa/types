import { CallaEvent } from '@/callaEvent';
import { Device } from '@/device';

export type UpdateDeviceEventData = Omit<Device, 'boardId'>;

export type UpdateDeviceEvent = CallaEvent<UpdateDeviceEventData>;
