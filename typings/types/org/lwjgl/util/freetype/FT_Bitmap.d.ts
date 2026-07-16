import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class FT_Bitmap extends Struct<FT_Bitmap> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BUFFER: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static NUM_GRAYS: number;
    static PALETTE: number;
    static PALETTE_MODE: number;
    static PITCH: number;
    static PIXEL_MODE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static ROWS: number;
    static SIZEOF: number;
    static WIDTH: number;
    static calloc(): FT_Bitmap;
    static calloc(paramarg0: MemoryStack): FT_Bitmap;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): FT_Bitmap;
    static create(paramarg0: number): FT_Bitmap;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_Bitmap;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): FT_Bitmap;
    static malloc(paramarg0: MemoryStack): FT_Bitmap;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbuffer(paramarg0: number, paramarg1: number): ByteBuffer;
    static nnum_grays(paramarg0: number): number;
    static npalette(paramarg0: number): number;
    static npalette_mode(paramarg0: number): number;
    static npitch(paramarg0: number): number;
    static npixel_mode(paramarg0: number): number;
    static nrows(paramarg0: number): number;
    static nwidth(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    buffer(arg0: number): ByteBuffer;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): FT_Bitmap;
    num_grays(): number;
    palette(): number;
    palette_mode(): number;
    pitch(): number;
    pixel_mode(): number;
    rows(): number;
    sizeof(): number;
    width(): number;
}