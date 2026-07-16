import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class SpvcSpecializationConstant extends Struct<SpvcSpecializationConstant> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CONSTANT_ID: number;
    static ID: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): SpvcSpecializationConstant;
    static calloc(paramarg0: MemoryStack): SpvcSpecializationConstant;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): SpvcSpecializationConstant;
    static create(paramarg0: number): SpvcSpecializationConstant;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): SpvcSpecializationConstant;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): SpvcSpecializationConstant;
    static malloc(paramarg0: MemoryStack): SpvcSpecializationConstant;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nconstant_id(paramarg0: number): number;
    static nconstant_id(paramarg0: number, paramarg1: number): void;
    static nid(paramarg0: number): number;
    static nid(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    constant_id(): number;
    constant_id(arg0: number): SpvcSpecializationConstant;
    create(arg0: number, arg1: ByteBuffer): SpvcSpecializationConstant;
    id(): number;
    id(arg0: number): SpvcSpecializationConstant;
    set(arg0: number, arg1: number): SpvcSpecializationConstant;
    set(arg0: SpvcSpecializationConstant): SpvcSpecializationConstant;
    sizeof(): number;
}