import { Model } from "./model";

export interface Tile extends Model {
  name: string;
  type: string;
  width: number;
  height: number;
}
