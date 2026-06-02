import type { AbstractDeviceTracker } from '../../../../com/mojang/blaze3d/audio/AbstractDeviceTracker.d.ts'
import type { DeviceList } from '../../../../com/mojang/blaze3d/audio/DeviceList.d.ts'
export class PollingDeviceTracker extends AbstractDeviceTracker {
    constructor(deviceList: DeviceList)
    // private lastDeviceCheckTime: number;
    discardUpdateRequest(): void;
    isUpdateRequested(): boolean;
}