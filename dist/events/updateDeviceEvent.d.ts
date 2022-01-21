import { CallaEvent } from '@/callaEvent';
import { Device } from '@/device';
export declare type UpdateDeviceEventData = Omit<Device, 'boardId'>;
export declare type UpdateDeviceEvent = CallaEvent<UpdateDeviceEventData>;
