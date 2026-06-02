import type { Object } from '../../../java/lang/Object.d.ts'
import type { GLDebugMessageAMDCallbackI } from '../../../org/lwjgl/opengl/GLDebugMessageAMDCallbackI.d.ts'
import type { Callback } from '../../../org/lwjgl/system/Callback.d.ts'
import type { Callback$Descriptor } from '../../../org/lwjgl/system/Callback$Descriptor.d.ts'
export abstract class GLDebugMessageAMDCallback extends Callback implements GLDebugMessageAMDCallbackI {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): GLDebugMessageAMDCallback;
    static create(paramarg0: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number) => void): GLDebugMessageAMDCallback;
    static createSafe(paramarg0: number): GLDebugMessageAMDCallback;
    static free(paramarg0: number): void;
    static get(paramarg0: number): Object | null;
    static getMessage(paramarg0: number, paramarg1: number): string;
    static getSafe(paramarg0: number): Object | null;
    constructor()
    constructor(arg0: number)
    callback(arg0: number, arg1: number): void;
    getDescriptor(): Callback$Descriptor;
}