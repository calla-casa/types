export type Device = {
  id: string | null;
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
