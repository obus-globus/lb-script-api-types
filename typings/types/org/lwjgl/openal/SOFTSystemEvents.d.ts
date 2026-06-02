import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { SOFTSystemEventProcI } from '../../../org/lwjgl/openal/SOFTSystemEventProcI.d.ts'
export class SOFTSystemEvents extends Object {
    static ALC_CAPTURE_DEVICE_SOFT: number;
    static ALC_EVENT_NOT_SUPPORTED_SOFT: number;
    static ALC_EVENT_SUPPORTED_SOFT: number;
    static ALC_EVENT_TYPE_DEFAULT_DEVICE_CHANGED_SOFT: number;
    static ALC_EVENT_TYPE_DEVICE_ADDED_SOFT: number;
    static ALC_EVENT_TYPE_DEVICE_REMOVED_SOFT: number;
    static ALC_PLAYBACK_DEVICE_SOFT: number;
    static alcEventCallbackSOFT(paramarg0: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number) => void, paramarg1: number): void;
    static alcEventControlSOFT(paramarg0: number[], paramarg1: boolean): boolean;
    static alcEventControlSOFT(paramarg0: IntBuffer, paramarg1: boolean): boolean;
    static alcEventIsSupportedSOFT(paramarg0: number, paramarg1: number): number;
    static nalcEventCallbackSOFT(paramarg0: number, paramarg1: number): void;
    static nalcEventControlSOFT(paramarg0: number, paramarg1: number, paramarg2: boolean): boolean;
    constructor()
}