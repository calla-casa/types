export declare type CallaEventData<T extends Object> = {
    [key: string]: any;
} & T;
export declare type CallaEvent<T extends Object> = {
    type: string;
    eventId: string;
    origin: string;
    data: CallaEventData<T>;
};
