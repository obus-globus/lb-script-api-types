import type { LZ4FrameOutputStream$1 } from '../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { LZ4FrameOutputStream$BLOCKSIZE } from '../../../net/jpountz/lz4/LZ4FrameOutputStream$BLOCKSIZE.d.ts'
export class LZ4FrameOutputStream$BD extends Object {
    static fromByte(paramarg0: number): LZ4FrameOutputStream$BD;
    private constructor(arg0: LZ4FrameOutputStream$BLOCKSIZE)
    constructor(arg0: LZ4FrameOutputStream$BLOCKSIZE, arg1: LZ4FrameOutputStream$1)
    // private blockSizeValue: LZ4FrameOutputStream$BLOCKSIZE;
    getBlockMaximumSize(): number;
    toByte(): number;
}