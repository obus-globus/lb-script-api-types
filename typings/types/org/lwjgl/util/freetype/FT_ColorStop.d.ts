import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { FT_ColorIndex } from '../../../../org/lwjgl/util/freetype/FT_ColorIndex.d.ts'
export class FT_ColorStop extends Struct<FT_ColorStop> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COLOR: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STOP_OFFSET: number;
    static calloc(): FT_ColorStop;
    static calloc(paramarg0: MemoryStack): FT_ColorStop;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): FT_ColorStop;
    static create(paramarg0: number): FT_ColorStop;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_ColorStop;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): FT_ColorStop;
    static malloc(paramarg0: MemoryStack): FT_ColorStop;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncolor(paramarg0: number): FT_ColorIndex;
    static nstop_offset(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    color(): FT_ColorIndex;
    create(arg0: number, arg1: ByteBuffer): FT_ColorStop;
    sizeof(): number;
    stop_offset(): number;
}