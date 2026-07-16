import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class FT_UnitVector extends Struct<FT_UnitVector> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static X: number;
    static Y: number;
    static calloc(): FT_UnitVector;
    static calloc(paramarg0: MemoryStack): FT_UnitVector;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): FT_UnitVector;
    static create(paramarg0: number): FT_UnitVector;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_UnitVector;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): FT_UnitVector;
    static malloc(paramarg0: MemoryStack): FT_UnitVector;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nx(paramarg0: number): number;
    static nx(paramarg0: number, paramarg1: number): void;
    static ny(paramarg0: number): number;
    static ny(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): FT_UnitVector;
    set(arg0: number, arg1: number): FT_UnitVector;
    set(arg0: FT_UnitVector): FT_UnitVector;
    sizeof(): number;
    x(): number;
    x(arg0: number): FT_UnitVector;
    y(): number;
    y(arg0: number): FT_UnitVector;
}