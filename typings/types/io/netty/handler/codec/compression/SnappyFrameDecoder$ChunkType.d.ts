import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SnappyFrameDecoder$ChunkType extends Enum<SnappyFrameDecoder$ChunkType> {
    static COMPRESSED_DATA: SnappyFrameDecoder$ChunkType;
    static RESERVED_SKIPPABLE: SnappyFrameDecoder$ChunkType;
    static RESERVED_UNSKIPPABLE: SnappyFrameDecoder$ChunkType;
    static STREAM_IDENTIFIER: SnappyFrameDecoder$ChunkType;
    static UNCOMPRESSED_DATA: SnappyFrameDecoder$ChunkType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SnappyFrameDecoder$ChunkType;
    static values(): (Object | null)[];
    private constructor()
    name(): "STREAM_IDENTIFIER" | "COMPRESSED_DATA" | "UNCOMPRESSED_DATA" | "RESERVED_UNSKIPPABLE" | "RESERVED_SKIPPABLE";
}