import { Background, Page, Model } from "./index";

export interface Board extends Model {
  name: string | null;
  background: Background;
  pages: Page[];
  pagesCount: number;
  groupsCount: number;
  tilesCount: number;
}
