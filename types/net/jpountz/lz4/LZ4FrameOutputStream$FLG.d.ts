import type { BitSet } from '../../../java/util/BitSet.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { LZ4FrameOutputStream$FLG$Bits } from '../../../net/jpountz/lz4/LZ4FrameOutputStream$FLG$Bits.d.ts'
export class LZ4FrameOutputStream$FLG extends Object {
    static fromByte(paramarg0: number): LZ4FrameOutputStream$FLG;
    constructor(arg0: number, arg1: LZ4FrameOutputStream$FLG$Bits[])
    private constructor(arg0: number, arg1: number)
    // private bitSet: BitSet;
    readonly version: number;
    getVersion(): number;
    isEnabled(arg0: LZ4FrameOutputStream$FLG$Bits): boolean;
    toByte(): number;
    // private validate(): void;
}