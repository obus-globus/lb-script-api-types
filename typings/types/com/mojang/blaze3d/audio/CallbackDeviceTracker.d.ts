import type { AbstractDeviceTracker } from '../../../../com/mojang/blaze3d/audio/AbstractDeviceTracker.d.ts'
import type { DeviceList } from '../../../../com/mojang/blaze3d/audio/DeviceList.d.ts'
import type { HexFormat } from '../../../../java/util/HexFormat.d.ts'
import type { SOFTSystemEventProcI } from '../../../../org/lwjgl/openal/SOFTSystemEventProcI.d.ts'
export class CallbackDeviceTracker extends AbstractDeviceTracker {
    static HEX_FORMAT: HexFormat;
    static createAndInstall(paramdeviceList: DeviceList): CallbackDeviceTracker;
    static isSupported(): boolean;
    constructor(deviceList: DeviceList)
    // private updateRequested: boolean;
    // private createCallback(): (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number) => void;
    discardUpdateRequest(): void;
    isUpdateRequested(): boolean;
}