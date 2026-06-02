import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { FT_Vector } from '../../../../org/lwjgl/util/freetype/FT_Vector.d.ts'
export class FT_ClipBox extends Struct<FT_ClipBox> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BOTTOM_LEFT: number;
    static BOTTOM_RIGHT: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static TOP_LEFT: number;
    static TOP_RIGHT: number;
    static calloc(): FT_ClipBox;
    static calloc(paramarg0: MemoryStack): FT_ClipBox;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): FT_ClipBox;
    static create(paramarg0: number): FT_ClipBox;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_ClipBox;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): FT_ClipBox;
    static malloc(paramarg0: MemoryStack): FT_ClipBox;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbottom_left(paramarg0: number): FT_Vector;
    static nbottom_right(paramarg0: number): FT_Vector;
    static ntop_left(paramarg0: number): FT_Vector;
    static ntop_right(paramarg0: number): FT_Vector;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    bottom_left(): FT_Vector;
    bottom_right(): FT_Vector;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): FT_ClipBox;
    sizeof(): number;
    top_left(): FT_Vector;
    top_right(): FT_Vector;
}