import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class SpvcEntryPoint extends Struct<SpvcEntryPoint> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static EXECUTION_MODEL: number;
    static NAME: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): SpvcEntryPoint;
    static calloc(paramarg0: MemoryStack): SpvcEntryPoint;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): SpvcEntryPoint;
    static create(paramarg0: number): SpvcEntryPoint;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): SpvcEntryPoint;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): SpvcEntryPoint;
    static malloc(paramarg0: MemoryStack): SpvcEntryPoint;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nexecution_model(paramarg0: number): number;
    static nexecution_model(paramarg0: number, paramarg1: number): void;
    static nname(paramarg0: number): ByteBuffer;
    static nname(paramarg0: number, paramarg1: ByteBuffer): void;
    static nnameString(paramarg0: number): string;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): SpvcEntryPoint;
    execution_model(): number;
    execution_model(arg0: number): SpvcEntryPoint;
    name(): ByteBuffer;
    name(arg0: ByteBuffer): SpvcEntryPoint;
    nameString(): string;
    set(arg0: number, arg1: ByteBuffer): SpvcEntryPoint;
    set(arg0: SpvcEntryPoint): SpvcEntryPoint;
    sizeof(): number;
}