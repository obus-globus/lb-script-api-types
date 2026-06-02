import type { NDManager } from '../../../ai/djl/ndarray/NDManager.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { ShortBuffer } from '../../../java/nio/ShortBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Float16Utils extends Object {
    static ONE: number;
    static floatToHalf(paramarg0: number): number;
    static fromByteBuffer(paramarg0: ByteBuffer): number[];
    static fromShortBuffer(paramarg0: ShortBuffer): number[];
    static halfToFloat(paramarg0: number): number;
    static toByteBuffer(paramarg0: NDManager, paramarg1: number[]): ByteBuffer;
    private constructor()
}