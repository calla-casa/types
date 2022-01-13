import { Background } from "./background";
import { Page } from "./page";
import { Model } from "./model";

export interface Board extends Model {
  name: string | null;
  background: Background;
  pages: Page[];
  pagesCount: number;
  groupsCount: number;
  tilesCount: number;
}
