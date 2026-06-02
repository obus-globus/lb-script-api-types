import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { SOFTCallbackBufferTypeI } from '../../../org/lwjgl/openal/SOFTCallbackBufferTypeI.d.ts'
export class SOFTCallbackBuffer extends Object {
    static AL_BUFFER_CALLBACK_FUNCTION_SOFT: number;
    static AL_BUFFER_CALLBACK_USER_PARAM_SOFT: number;
    static alBufferCallbackDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: (param0: number, param1: number, param2: number) => kotlin.Int, paramarg5: number): void;
    static alBufferCallbackSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number, param1: number, param2: number) => kotlin.Int, paramarg4: number): void;
    static alGetBuffer3PtrDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: PointerBuffer, paramarg4: PointerBuffer, paramarg5: PointerBuffer): void;
    static alGetBuffer3PtrSOFT(paramarg0: number, paramarg1: number, paramarg2: PointerBuffer, paramarg3: PointerBuffer, paramarg4: PointerBuffer): void;
    static alGetBufferPtrDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static alGetBufferPtrDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: PointerBuffer): void;
    static alGetBufferPtrSOFT(paramarg0: number, paramarg1: number): number;
    static alGetBufferPtrSOFT(paramarg0: number, paramarg1: number, paramarg2: PointerBuffer): void;
    static alGetBufferPtrvDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: PointerBuffer): void;
    static alGetBufferPtrvSOFT(paramarg0: number, paramarg1: number, paramarg2: PointerBuffer): void;
    static nalBufferCallbackDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static nalBufferCallbackSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nalGetBuffer3PtrDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static nalGetBuffer3PtrSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nalGetBufferPtrDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nalGetBufferPtrSOFT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nalGetBufferPtrvDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nalGetBufferPtrvSOFT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    constructor()
}