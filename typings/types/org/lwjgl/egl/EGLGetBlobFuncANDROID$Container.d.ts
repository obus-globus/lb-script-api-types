import type { EGLGetBlobFuncANDROID } from '../../../org/lwjgl/egl/EGLGetBlobFuncANDROID.d.ts'
import type { EGLGetBlobFuncANDROIDI } from '../../../org/lwjgl/egl/EGLGetBlobFuncANDROIDI.d.ts'
import type { Callback$Descriptor } from '../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../org/lwjgl/system/CallbackI.d.ts'
export class EGLGetBlobFuncANDROID$Container extends EGLGetBlobFuncANDROID {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): EGLGetBlobFuncANDROID;
    static create(paramarg0: (param0: number, param1: number, param2: number, param3: number) => number): EGLGetBlobFuncANDROID;
    static createSafe(paramarg0: number): EGLGetBlobFuncANDROID;
    static free(paramarg0: number): void;
    static get<T extends CallbackI>(paramarg0: number): T;
    static getSafe<T extends CallbackI>(paramarg0: number): T;
    constructor(arg0: number, arg1: (param0: number, param1: number, param2: number, param3: number) => number)
    // private delegate: (param0: number, param1: number, param2: number, param3: number) => number;
    invoke(arg0: number, arg1: number, arg2: number, arg3: number): number;
}