export type Device = {
  id: number | null;
  name: string;
  status: {
    platform: string;
    osVersion: string;
    manufacturer: string;
    memUsed: number;
    diskFree: number;
    diskTotal: number;
    webViewVersion: string;
    batteryLevel: number;
    isCharging: boolean;
  };
};
