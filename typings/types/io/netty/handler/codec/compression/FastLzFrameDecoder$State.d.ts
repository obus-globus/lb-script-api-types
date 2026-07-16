import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class FastLzFrameDecoder$State extends Enum<FastLzFrameDecoder$State> {
    static CORRUPTED: FastLzFrameDecoder$State;
    static DECOMPRESS_DATA: FastLzFrameDecoder$State;
    static INIT_BLOCK: FastLzFrameDecoder$State;
    static INIT_BLOCK_PARAMS: FastLzFrameDecoder$State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): FastLzFrameDecoder$State;
    static values(): FastLzFrameDecoder$State[];
    private constructor()
    name(): "INIT_BLOCK" | "INIT_BLOCK_PARAMS" | "DECOMPRESS_DATA" | "CORRUPTED";
}