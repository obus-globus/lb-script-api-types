import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class EXTDrawBuffers2 extends Object {
    static glColorMaskIndexedEXT(paramarg0: number, paramarg1: boolean, paramarg2: boolean, paramarg3: boolean, paramarg4: boolean): void;
    static glDisableIndexedEXT(paramarg0: number, paramarg1: number): void;
    static glEnableIndexedEXT(paramarg0: number, paramarg1: number): void;
    static glGetBooleanIndexedEXT(paramarg0: number, paramarg1: number): boolean;
    static glGetBooleanIndexedvEXT(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer): void;
    static glGetIntegerIndexedEXT(paramarg0: number, paramarg1: number): number;
    static glGetIntegerIndexedvEXT(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetIntegerIndexedvEXT(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static glIsEnabledIndexedEXT(paramarg0: number, paramarg1: number): boolean;
    static nglGetBooleanIndexedvEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglGetIntegerIndexedvEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    constructor()
}