export interface TileAction {
  type: "doNothing" | "default" | "callService" | "fireEvent" | "url";
  subject?: string;
  payload?: {
    [key: string]: any;
  };
}
