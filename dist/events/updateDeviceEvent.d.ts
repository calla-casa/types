import { CallaEvent } from '../callaEvent';
import { Device } from '../device';
export declare type UpdateDeviceEventData = Omit<Device, 'boardId' | 'meta' | 'order'>;
export declare type UpdateDeviceEvent = CallaEvent<UpdateDeviceEventData>;
