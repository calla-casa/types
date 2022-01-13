import { Background } from "./background";
import { Group } from "./group";
import { Model } from "./model";

export interface Page extends Model {
  name: string | null;
  icon: string | null;
  background: Background;
  groups: Group[];
}
