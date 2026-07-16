import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../../../java/nio/LongBuffer.d.ts'
import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
export class HttpChunkLineValidatingByteProcessor$Match extends BitSet {
    static valueOf(paramarg0: number[]): BitSet;
    static valueOf(paramarg0: ByteBuffer): BitSet;
    static valueOf(paramarg0: LongBuffer): BitSet;
    constructor(arg0: number)
    // private then: number;
    chars(arg0: string): HttpChunkLineValidatingByteProcessor$Match;
    chars(arg0: string, arg1: boolean): HttpChunkLineValidatingByteProcessor$Match;
    range(arg0: number, arg1: number): HttpChunkLineValidatingByteProcessor$Match;
    range(arg0: number, arg1: number, arg2: boolean): HttpChunkLineValidatingByteProcessor$Match;
}