import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class NVQueryResourceTag extends Object {
    static glDeleteQueryResourceTagNV(paramarg0: number): void;
    static glDeleteQueryResourceTagNV(paramarg0: number[]): void;
    static glDeleteQueryResourceTagNV(paramarg0: IntBuffer): void;
    static glGenQueryResourceTagNV(): number;
    static glGenQueryResourceTagNV(paramarg0: number[]): void;
    static glGenQueryResourceTagNV(paramarg0: IntBuffer): void;
    static glQueryResourceTagNV(paramarg0: number, paramarg1: CharSequence): void;
    static glQueryResourceTagNV(paramarg0: number, paramarg1: ByteBuffer): void;
    static nglDeleteQueryResourceTagNV(paramarg0: number, paramarg1: number): void;
    static nglGenQueryResourceTagNV(paramarg0: number, paramarg1: number): void;
    static nglQueryResourceTagNV(paramarg0: number, paramarg1: number): void;
    constructor()
}