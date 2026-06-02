import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Lz4FrameDecoder$State extends Enum<Lz4FrameDecoder$State> {
    static CORRUPTED: Lz4FrameDecoder$State;
    static DECOMPRESS_DATA: Lz4FrameDecoder$State;
    static FINISHED: Lz4FrameDecoder$State;
    static INIT_BLOCK: Lz4FrameDecoder$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Lz4FrameDecoder$State;
    static values(): (Object | null)[];
    private constructor()
    name(): "INIT_BLOCK" | "DECOMPRESS_DATA" | "FINISHED" | "CORRUPTED";
}