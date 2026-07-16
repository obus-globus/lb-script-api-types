import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { FT_BBox } from '../../../../org/lwjgl/util/freetype/FT_BBox.d.ts'
import type { FT_Bitmap } from '../../../../org/lwjgl/util/freetype/FT_Bitmap.d.ts'
import type { FT_SpanFunc } from '../../../../org/lwjgl/util/freetype/FT_SpanFunc.d.ts'
import type { FT_SpanFuncI } from '../../../../org/lwjgl/util/freetype/FT_SpanFuncI.d.ts'
export class FT_Raster_Params extends Struct<FT_Raster_Params> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BIT_SET: number;
    static BIT_TEST: number;
    static BLACK_SPANS: number;
    static CLIP_BOX: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static GRAY_SPANS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SOURCE: number;
    static TARGET: number;
    static USER: number;
    static calloc(): FT_Raster_Params;
    static calloc(paramarg0: MemoryStack): FT_Raster_Params;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): FT_Raster_Params;
    static create(paramarg0: number): FT_Raster_Params;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_Raster_Params;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): FT_Raster_Params;
    static malloc(paramarg0: MemoryStack): FT_Raster_Params;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbit_set(paramarg0: number): number;
    static nbit_set(paramarg0: number, paramarg1: number): void;
    static nbit_test(paramarg0: number): number;
    static nbit_test(paramarg0: number, paramarg1: number): void;
    static nblack_spans(paramarg0: number): FT_SpanFunc;
    static nblack_spans(paramarg0: number, paramarg1: (param0: number, param1: number, param2: number, param3: number) => void): void;
    static nclip_box(paramarg0: number): FT_BBox;
    static nclip_box(paramarg0: number, paramarg1: FT_BBox): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static ngray_spans(paramarg0: number): FT_SpanFunc;
    static ngray_spans(paramarg0: number, paramarg1: (param0: number, param1: number, param2: number, param3: number) => void): void;
    static nsource(paramarg0: number, paramarg1: number): ByteBuffer;
    static nsource(paramarg0: number, paramarg1: ByteBuffer): void;
    static ntarget(paramarg0: number): FT_Bitmap;
    static ntarget(paramarg0: number, paramarg1: FT_Bitmap): void;
    static nuser(paramarg0: number): number;
    static nuser(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    clip_box(): FT_BBox;
    clip_box(arg0: (param0: FT_BBox) => void): FT_Raster_Params;
    clip_box(arg0: FT_BBox): FT_Raster_Params;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): FT_Raster_Params;
    flags(): number;
    flags(arg0: number): FT_Raster_Params;
    gray_spans(): FT_SpanFunc;
    gray_spans(arg0: (param0: number, param1: number, param2: number, param3: number) => void): FT_Raster_Params;
    set(arg0: FT_Bitmap, arg1: ByteBuffer, arg2: number, arg3: (param0: number, param1: number, param2: number, param3: number) => void, arg4: number, arg5: FT_BBox): FT_Raster_Params;
    set(arg0: FT_Raster_Params): FT_Raster_Params;
    sizeof(): number;
    source(arg0: ByteBuffer): FT_Raster_Params;
    source(arg0: number): ByteBuffer;
    target(): FT_Bitmap;
    target(arg0: FT_Bitmap): FT_Raster_Params;
    user(): number;
    user(arg0: number): FT_Raster_Params;
}