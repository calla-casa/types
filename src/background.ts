export type BackgroundType = 'solid' | 'images' | null;

export type Background = {
  type: BackgroundType;
  color: string;
  images: string[];
  duration: number | null;
  withOverlay?: boolean;
  isActive?: boolean;
};
