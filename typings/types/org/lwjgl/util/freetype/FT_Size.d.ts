import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { FT_Face } from '../../../../org/lwjgl/util/freetype/FT_Face.d.ts'
import type { FT_Generic } from '../../../../org/lwjgl/util/freetype/FT_Generic.d.ts'
import type { FT_Size_Internal } from '../../../../org/lwjgl/util/freetype/FT_Size_Internal.d.ts'
import type { FT_Size_Metrics } from '../../../../org/lwjgl/util/freetype/FT_Size_Metrics.d.ts'
export class FT_Size extends Struct<FT_Size> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FACE: number;
    static GENERIC: number;
    static INTERNAL: number;
    static METRICS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): FT_Size;
    static calloc(paramarg0: MemoryStack): FT_Size;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): FT_Size;
    static create(paramarg0: number): FT_Size;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_Size;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): FT_Size;
    static malloc(paramarg0: MemoryStack): FT_Size;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nface(paramarg0: number): FT_Face;
    static nface(paramarg0: number, paramarg1: FT_Face): void;
    static ngeneric(paramarg0: number): FT_Generic;
    static ngeneric(paramarg0: number, paramarg1: FT_Generic): void;
    static ninternal(paramarg0: number): FT_Size_Internal;
    static ninternal(paramarg0: number, paramarg1: FT_Size_Internal): void;
    static nmetrics(paramarg0: number): FT_Size_Metrics;
    static nmetrics(paramarg0: number, paramarg1: FT_Size_Metrics): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): FT_Size;
    face(): FT_Face;
    face(arg0: FT_Face): FT_Size;
    generic(): FT_Generic;
    generic(arg0: (param0: FT_Generic) => void): FT_Size;
    generic(arg0: FT_Generic): FT_Size;
    metrics(): FT_Size_Metrics;
    metrics(arg0: FT_Size_Metrics): FT_Size;
    set(arg0: FT_Face, arg1: FT_Generic, arg2: FT_Size_Metrics): FT_Size;
    set(arg0: FT_Size): FT_Size;
    sizeof(): number;
}