import type { DeviceList } from '../../../../com/mojang/blaze3d/audio/DeviceList.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface DeviceTracker extends Object{
    currentDevices(): DeviceList;
    forceRefresh(): void;
    tick(): void;
}