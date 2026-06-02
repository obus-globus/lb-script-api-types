import type { Object } from '../../../java/lang/Object.d.ts'
import type { LZ4FrameOutputStream$BD } from '../../../net/jpountz/lz4/LZ4FrameOutputStream$BD.d.ts'
import type { LZ4FrameOutputStream$FLG } from '../../../net/jpountz/lz4/LZ4FrameOutputStream$FLG.d.ts'
import type { LZ4FrameOutputStream$FLG$Bits } from '../../../net/jpountz/lz4/LZ4FrameOutputStream$FLG$Bits.d.ts'
import type { StreamingXXHash32 } from '../../../net/jpountz/xxhash/StreamingXXHash32.d.ts'
export class LZ4FrameOutputStream$FrameInfo extends Object {
    constructor(arg0: LZ4FrameOutputStream$FLG, arg1: LZ4FrameOutputStream$BD)
    // private bd: LZ4FrameOutputStream$BD;
    readonly finished: boolean;
    // private flg: LZ4FrameOutputStream$FLG;
    // private streamHash: StreamingXXHash32;
    currentStreamHash(): number;
    finish(): void;
    getBD(): LZ4FrameOutputStream$BD;
    getFLG(): LZ4FrameOutputStream$FLG;
    isEnabled(arg0: LZ4FrameOutputStream$FLG$Bits): boolean;
    isFinished(): boolean;
    updateStreamHash(arg0: number[], arg1: number, arg2: number): void;
}