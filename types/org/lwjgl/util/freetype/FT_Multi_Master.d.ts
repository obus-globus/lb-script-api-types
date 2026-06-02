import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { FT_MM_Axis } from '../../../../org/lwjgl/util/freetype/FT_MM_Axis.d.ts'
export class FT_Multi_Master extends Struct<FT_Multi_Master> implements NativeResource {
    static ALIGNOF: number;
    static AXIS: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static NUM_AXIS: number;
    static NUM_DESIGNS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): FT_Multi_Master;
    static calloc(paramarg0: MemoryStack): FT_Multi_Master;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): FT_Multi_Master;
    static create(paramarg0: number): FT_Multi_Master;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_Multi_Master;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): FT_Multi_Master;
    static malloc(paramarg0: MemoryStack): FT_Multi_Master;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static naxis(paramarg0: number, paramarg1: number): FT_MM_Axis;
    static naxis(paramarg0: number): (Object | null)[];
    static nnum_axis(paramarg0: number): number;
    static nnum_designs(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    axis(): (Object | null)[];
    axis(arg0: number): FT_MM_Axis;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): FT_Multi_Master;
    num_axis(): number;
    num_designs(): number;
    sizeof(): number;
}