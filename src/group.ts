import { Tile, Model } from './index';

export interface Group extends Model {
  name: string;
  nameVisible: boolean;
  icon: string | null;
  tiles: Tile[];
}
