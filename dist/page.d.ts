import { Background, Group, Model } from './index';
export interface Page extends Model {
    name: string | null;
    icon: string | null;
    background: Background;
    groups: Group[];
}
