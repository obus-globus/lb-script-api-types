import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { SOFTEventProcI } from '../../../org/lwjgl/openal/SOFTEventProcI.d.ts'
export class SOFTEvents extends Object {
    static AL_EVENT_CALLBACK_FUNCTION_SOFT: number;
    static AL_EVENT_CALLBACK_USER_PARAM_SOFT: number;
    static AL_EVENT_TYPE_BUFFER_COMPLETED_SOFT: number;
    static AL_EVENT_TYPE_DISCONNECTED_SOFT: number;
    static AL_EVENT_TYPE_SOURCE_STATE_CHANGED_SOFT: number;
    static alEventCallbackDirectSOFT(paramarg0: number, paramarg1: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number) => void, paramarg2: number): void;
    static alEventCallbackSOFT(paramarg0: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number) => void, paramarg1: number): void;
    static alEventControlDirectSOFT(paramarg0: number, paramarg1: number[], paramarg2: boolean): void;
    static alEventControlDirectSOFT(paramarg0: number, paramarg1: IntBuffer, paramarg2: boolean): void;
    static alEventControlSOFT(paramarg0: number[], paramarg1: boolean): void;
    static alEventControlSOFT(paramarg0: IntBuffer, paramarg1: boolean): void;
    static alGetPointerDirectSOFT(paramarg0: number, paramarg1: number): number;
    static alGetPointerSOFT(paramarg0: number): number;
    static alGetPointervDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: PointerBuffer): void;
    static alGetPointervSOFT(paramarg0: number, paramarg1: PointerBuffer): void;
    static nalEventCallbackDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nalEventCallbackSOFT(paramarg0: number, paramarg1: number): void;
    static nalEventControlDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: boolean): void;
    static nalEventControlSOFT(paramarg0: number, paramarg1: number, paramarg2: boolean): void;
    static nalGetPointervDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nalGetPointervSOFT(paramarg0: number, paramarg1: number): void;
    constructor()
}