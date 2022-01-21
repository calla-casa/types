import { CallaEvent } from '../callaEvent';
import { Device } from '../device';
export declare type RegisterDeviceEventData = Omit<Device, 'id' | 'boardId' | 'meta' | 'order'>;
export declare type RegisterDeviceEvent = CallaEvent<RegisterDeviceEventData>;
