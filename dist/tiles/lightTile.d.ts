import { TileAction, Tile } from "../index";
export interface LightTileStyle {
    background: {
        on: string;
        off: string;
    };
    color: {
        on: "invert" | string;
        off: "invert" | string;
    };
    iconColor: {
        on: "invert" | string;
        off: "invert" | string;
    };
    iconColorOpacity: string;
}
export interface LightTileActions {
    tap: TileAction;
    doubleTap: TileAction;
    longTap: TileAction;
}
export interface LightTile extends Tile {
    type: "light";
    entities: string[];
    style: LightTileStyle;
    actions: LightTileActions;
}
