import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class EXTEGLImageStorage extends Object {
    static glEGLImageTargetTexStorageEXT(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glEGLImageTargetTexStorageEXT(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static glEGLImageTargetTextureStorageEXT(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glEGLImageTargetTextureStorageEXT(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static nglEGLImageTargetTexStorageEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglEGLImageTargetTextureStorageEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    constructor()
}