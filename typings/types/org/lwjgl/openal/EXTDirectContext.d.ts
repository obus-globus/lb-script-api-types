import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class EXTDirectContext extends Object {
    static alcGetProcAddress2(paramarg0: number, paramarg1: CharSequence): number;
    static alcGetProcAddress2(paramarg0: number, paramarg1: ByteBuffer): number;
    static nalcGetProcAddress2(paramarg0: number, paramarg1: number): number;
    constructor()
}