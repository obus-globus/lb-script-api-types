import type { DeviceList } from '../../../../com/mojang/blaze3d/audio/DeviceList.d.ts'
import type { DeviceTracker } from '../../../../com/mojang/blaze3d/audio/DeviceTracker.d.ts'
import type { AtomicBoolean } from '../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractDeviceTracker extends Object implements DeviceTracker {
    constructor(deviceList: DeviceList)
    // private deviceList: DeviceList;
    // private updatePending: AtomicBoolean;
    currentDevices(): DeviceList;
    discardUpdateRequest(): void;
    forceRefresh(): void;
    isUpdateRequested(): boolean;
    tick(): void;
}