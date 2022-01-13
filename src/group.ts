import { Tile } from "./tile";
import { Model } from "./model";

export interface Group extends Model {
  name: string;
  nameVisible: boolean;
  icon: string | null;
  tiles: Tile[];
}
