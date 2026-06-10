import type { EGLSetBlobFuncANDROIDI } from '../../../org/lwjgl/egl/EGLSetBlobFuncANDROIDI.d.ts'
import type { Callback } from '../../../org/lwjgl/system/Callback.d.ts'
import type { Callback$Descriptor } from '../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../org/lwjgl/system/CallbackI.d.ts'
export abstract class EGLSetBlobFuncANDROID extends Callback implements EGLSetBlobFuncANDROIDI {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): EGLSetBlobFuncANDROID;
    static create(paramarg0: (param0: number, param1: number, param2: number, param3: number) => void): EGLSetBlobFuncANDROID;
    static createSafe(paramarg0: number): EGLSetBlobFuncANDROID;
    static free(paramarg0: number): void;
    static get(paramarg0: number): CallbackI | null;
    static getSafe(paramarg0: number): CallbackI | null;
    constructor()
    constructor(arg0: number)
    callback(arg0: number, arg1: number): void;
    getDescriptor(): Callback$Descriptor;
}