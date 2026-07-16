import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class LZ4FrameOutputStream$FLG$Bits extends Enum<LZ4FrameOutputStream$FLG$Bits> {
    static BLOCK_CHECKSUM: LZ4FrameOutputStream$FLG$Bits;
    static BLOCK_INDEPENDENCE: LZ4FrameOutputStream$FLG$Bits;
    static CONTENT_CHECKSUM: LZ4FrameOutputStream$FLG$Bits;
    static CONTENT_SIZE: LZ4FrameOutputStream$FLG$Bits;
    static RESERVED_0: LZ4FrameOutputStream$FLG$Bits;
    static RESERVED_1: LZ4FrameOutputStream$FLG$Bits;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LZ4FrameOutputStream$FLG$Bits;
    static values(): LZ4FrameOutputStream$FLG$Bits[];
    private constructor(arg2: number)
    // private position: number;
    name(): "RESERVED_0" | "RESERVED_1" | "CONTENT_CHECKSUM" | "CONTENT_SIZE" | "BLOCK_CHECKSUM" | "BLOCK_INDEPENDENCE";
}