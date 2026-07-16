import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { ShortBuffer } from '../../../../java/nio/ShortBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class FT_Palette_Data extends Struct<FT_Palette_Data> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static NUM_PALETTES: number;
    static NUM_PALETTE_ENTRIES: number;
    static PALETTE_ENTRY_NAME_IDS: number;
    static PALETTE_FLAGS: number;
    static PALETTE_NAME_IDS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): FT_Palette_Data;
    static calloc(paramarg0: MemoryStack): FT_Palette_Data;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): FT_Palette_Data;
    static create(paramarg0: number): FT_Palette_Data;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_Palette_Data;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): FT_Palette_Data;
    static malloc(paramarg0: MemoryStack): FT_Palette_Data;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nnum_palette_entries(paramarg0: number): number;
    static nnum_palettes(paramarg0: number): number;
    static npalette_entry_name_ids(paramarg0: number): ShortBuffer;
    static npalette_flags(paramarg0: number): ShortBuffer;
    static npalette_name_ids(paramarg0: number): ShortBuffer;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): FT_Palette_Data;
    num_palette_entries(): number;
    num_palettes(): number;
    palette_entry_name_ids(): ShortBuffer;
    palette_flags(): ShortBuffer;
    palette_name_ids(): ShortBuffer;
    sizeof(): number;
}