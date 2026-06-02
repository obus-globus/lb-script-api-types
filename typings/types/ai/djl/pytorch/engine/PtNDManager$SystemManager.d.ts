import type { NDManager$SystemNDManager } from '../../../../ai/djl/ndarray/NDManager$SystemNDManager.d.ts'
import type { DataType } from '../../../../ai/djl/ndarray/types/DataType.d.ts'
import type { PtNDManager } from '../../../../ai/djl/pytorch/engine/PtNDManager.d.ts'
import type { Buffer } from '../../../../java/nio/Buffer.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { AtomicLong } from '../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
export class PtNDManager$SystemManager extends PtNDManager implements NDManager$SystemNDManager {
    static UID_GENERATOR: AtomicLong;
    static copyBuffer(paramarg0: Buffer, paramarg1: ByteBuffer): void;
    static validateBuffer(paramarg0: Buffer, paramarg1: DataType, paramarg2: number): void;
    constructor()
}