export declare type BackgroundType = 'solid' | 'images' | null;
export declare type Background = {
    type: BackgroundType;
    color: string;
    images: string[];
    duration: number | null;
    withOverlay?: boolean;
    isActive?: boolean;
};
