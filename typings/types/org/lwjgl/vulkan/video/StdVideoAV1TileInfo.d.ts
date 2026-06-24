import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { ShortBuffer } from '../../../../java/nio/ShortBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoAV1TileInfoFlag } from '../../../../org/lwjgl/vulkan/video/StdVideoAV1TileInfoFlag.d.ts'
export class StdVideoAV1TileInfo extends Struct<StdVideoAV1TileInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CONTEXT_UPDATE_TILE_ID: number;
    static FLAGS: number;
    static PHEIGHTINSBSMINUS1: number;
    static PMICOLSTARTS: number;
    static PMIROWSTARTS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PWIDTHINSBSMINUS1: number;
    static RESERVED1: number;
    static SIZEOF: number;
    static TILECOLS: number;
    static TILEROWS: number;
    static TILE_SIZE_BYTES_MINUS_1: number;
    static calloc(): StdVideoAV1TileInfo;
    static calloc(paramarg0: MemoryStack): StdVideoAV1TileInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoAV1TileInfo;
    static create(paramarg0: number): StdVideoAV1TileInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoAV1TileInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoAV1TileInfo;
    static malloc(paramarg0: MemoryStack): StdVideoAV1TileInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nTileCols(paramarg0: number): number;
    static nTileCols(paramarg0: number, paramarg1: number): void;
    static nTileRows(paramarg0: number): number;
    static nTileRows(paramarg0: number, paramarg1: number): void;
    static ncontext_update_tile_id(paramarg0: number): number;
    static ncontext_update_tile_id(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): StdVideoAV1TileInfoFlag;
    static nflags(paramarg0: number, paramarg1: StdVideoAV1TileInfoFlag): void;
    static npHeightInSbsMinus1(paramarg0: number): ShortBuffer;
    static npHeightInSbsMinus1(paramarg0: number, paramarg1: ShortBuffer): void;
    static npMiColStarts(paramarg0: number): ShortBuffer;
    static npMiColStarts(paramarg0: number, paramarg1: ShortBuffer): void;
    static npMiRowStarts(paramarg0: number): ShortBuffer;
    static npMiRowStarts(paramarg0: number, paramarg1: ShortBuffer): void;
    static npWidthInSbsMinus1(paramarg0: number): ShortBuffer;
    static npWidthInSbsMinus1(paramarg0: number, paramarg1: ShortBuffer): void;
    static nreserved1(paramarg0: number, paramarg1: number): number;
    static nreserved1(paramarg0: number): ByteBuffer;
    static nreserved1(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nreserved1(paramarg0: number, paramarg1: ByteBuffer): void;
    static ntile_size_bytes_minus_1(paramarg0: number): number;
    static ntile_size_bytes_minus_1(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    TileCols(): number;
    TileCols(arg0: number): StdVideoAV1TileInfo;
    TileRows(): number;
    TileRows(arg0: number): StdVideoAV1TileInfo;
    close(): void;
    context_update_tile_id(): number;
    context_update_tile_id(arg0: number): StdVideoAV1TileInfo;
    create(arg0: number, arg1: ByteBuffer): StdVideoAV1TileInfo;
    flags(): StdVideoAV1TileInfoFlag;
    flags(arg0: (param0: StdVideoAV1TileInfoFlag) => void): StdVideoAV1TileInfo;
    flags(arg0: StdVideoAV1TileInfoFlag): StdVideoAV1TileInfo;
    pHeightInSbsMinus1(): ShortBuffer;
    pHeightInSbsMinus1(arg0: ShortBuffer): StdVideoAV1TileInfo;
    pMiColStarts(): ShortBuffer;
    pMiColStarts(arg0: ShortBuffer): StdVideoAV1TileInfo;
    pMiRowStarts(): ShortBuffer;
    pMiRowStarts(arg0: ShortBuffer): StdVideoAV1TileInfo;
    pWidthInSbsMinus1(): ShortBuffer;
    pWidthInSbsMinus1(arg0: ShortBuffer): StdVideoAV1TileInfo;
    set(arg0: StdVideoAV1TileInfo): StdVideoAV1TileInfo;
    set(arg0: StdVideoAV1TileInfoFlag, arg1: number, arg2: number, arg3: number, arg4: number, arg5: ShortBuffer, arg6: ShortBuffer, arg7: ShortBuffer, arg8: ShortBuffer): StdVideoAV1TileInfo;
    sizeof(): number;
    tile_size_bytes_minus_1(): number;
    tile_size_bytes_minus_1(arg0: number): StdVideoAV1TileInfo;
}