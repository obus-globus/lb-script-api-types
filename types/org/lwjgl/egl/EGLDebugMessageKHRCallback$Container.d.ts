import type { Object } from '../../../java/lang/Object.d.ts'
import type { EGLDebugMessageKHRCallback } from '../../../org/lwjgl/egl/EGLDebugMessageKHRCallback.d.ts'
import type { EGLDebugMessageKHRCallbackI } from '../../../org/lwjgl/egl/EGLDebugMessageKHRCallbackI.d.ts'
import type { Callback$Descriptor } from '../../../org/lwjgl/system/Callback$Descriptor.d.ts'
export class EGLDebugMessageKHRCallback$Container extends EGLDebugMessageKHRCallback {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): EGLDebugMessageKHRCallback;
    static create(paramarg0: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number) => void): EGLDebugMessageKHRCallback;
    static createSafe(paramarg0: number): EGLDebugMessageKHRCallback;
    static free(paramarg0: number): void;
    static get(paramarg0: number): Object | null;
    static getCommand(paramarg0: number): string;
    static getMessage(paramarg0: number): string;
    static getSafe(paramarg0: number): Object | null;
    constructor(arg0: number, arg1: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number) => void)
    // private delegate: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number) => void;
    invoke(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
}