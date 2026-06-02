import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class Stat extends Object {
    static fstat(paramarg0: IntBuffer, paramarg1: number, paramarg2: number): number;
    static nfstat(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nstat(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static stat(paramarg0: IntBuffer, paramarg1: CharSequence, paramarg2: number): number;
    static stat(paramarg0: IntBuffer, paramarg1: ByteBuffer, paramarg2: number): number;
    constructor()
}