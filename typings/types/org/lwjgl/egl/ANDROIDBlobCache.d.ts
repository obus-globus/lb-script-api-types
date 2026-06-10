import type { Object } from '../../../java/lang/Object.d.ts'
import type { EGLGetBlobFuncANDROIDI } from '../../../org/lwjgl/egl/EGLGetBlobFuncANDROIDI.d.ts'
import type { EGLSetBlobFuncANDROIDI } from '../../../org/lwjgl/egl/EGLSetBlobFuncANDROIDI.d.ts'
export class ANDROIDBlobCache extends Object {
    static eglSetBlobCacheFuncsANDROID(paramarg0: number, paramarg1: (param0: number, param1: number, param2: number, param3: number) => void, paramarg2: (param0: number, param1: number, param2: number, param3: number) => number): void;
    static neglSetBlobCacheFuncsANDROID(paramarg0: number, paramarg1: number, paramarg2: number): void;
    constructor()
}