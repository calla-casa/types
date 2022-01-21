import { CallaEvent } from '@/callaEvent';
export declare type RegisterDeviceEventData = {
    id: string;
    name: string;
    platform: string;
    manufacturer: string;
    webViewVersion: string;
};
export declare type RegisterDeviceEvent = CallaEvent<RegisterDeviceEventData>;
