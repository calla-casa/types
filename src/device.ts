import { Model } from './model';

export interface Device extends Model {
  boardId: string | null;
  name: string;
  platform: string;
  osVersion: string;
  manufacturer: string;
  webViewVersion: string;
}
