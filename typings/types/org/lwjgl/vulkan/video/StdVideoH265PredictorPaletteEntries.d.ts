import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { ShortBuffer } from '../../../../java/nio/ShortBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoH265PredictorPaletteEntries extends Struct<StdVideoH265PredictorPaletteEntries> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PREDICTORPALETTEENTRIES: number;
    static SIZEOF: number;
    static calloc(): StdVideoH265PredictorPaletteEntries;
    static calloc(paramarg0: MemoryStack): StdVideoH265PredictorPaletteEntries;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoH265PredictorPaletteEntries;
    static create(paramarg0: number): StdVideoH265PredictorPaletteEntries;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoH265PredictorPaletteEntries;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoH265PredictorPaletteEntries;
    static malloc(paramarg0: MemoryStack): StdVideoH265PredictorPaletteEntries;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nPredictorPaletteEntries(paramarg0: number): ShortBuffer;
    static nPredictorPaletteEntries(paramarg0: number, paramarg1: number): number;
    static nPredictorPaletteEntries(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nPredictorPaletteEntries(paramarg0: number, paramarg1: ShortBuffer): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    PredictorPaletteEntries(): ShortBuffer;
    PredictorPaletteEntries(arg0: ShortBuffer): StdVideoH265PredictorPaletteEntries;
    PredictorPaletteEntries(arg0: number): number;
    PredictorPaletteEntries(arg0: number, arg1: number): StdVideoH265PredictorPaletteEntries;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoH265PredictorPaletteEntries;
    set(arg0: StdVideoH265PredictorPaletteEntries): StdVideoH265PredictorPaletteEntries;
    sizeof(): number;
}