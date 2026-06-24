import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class SpvcReflectedResource extends Struct<SpvcReflectedResource> implements NativeResource {
    static ALIGNOF: number;
    static BASE_TYPE_ID: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static ID: number;
    static NAME: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static TYPE_ID: number;
    static calloc(): SpvcReflectedResource;
    static calloc(paramarg0: MemoryStack): SpvcReflectedResource;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): SpvcReflectedResource;
    static create(paramarg0: number): SpvcReflectedResource;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): SpvcReflectedResource;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): SpvcReflectedResource;
    static malloc(paramarg0: MemoryStack): SpvcReflectedResource;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbase_type_id(paramarg0: number): number;
    static nbase_type_id(paramarg0: number, paramarg1: number): void;
    static nid(paramarg0: number): number;
    static nid(paramarg0: number, paramarg1: number): void;
    static nname(paramarg0: number): ByteBuffer;
    static nname(paramarg0: number, paramarg1: ByteBuffer): void;
    static nnameString(paramarg0: number): string;
    static ntype_id(paramarg0: number): number;
    static ntype_id(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    base_type_id(): number;
    base_type_id(arg0: number): SpvcReflectedResource;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): SpvcReflectedResource;
    id(): number;
    id(arg0: number): SpvcReflectedResource;
    name(): ByteBuffer;
    name(arg0: ByteBuffer): SpvcReflectedResource;
    nameString(): string;
    set(arg0: number, arg1: number, arg2: number, arg3: ByteBuffer): SpvcReflectedResource;
    set(arg0: SpvcReflectedResource): SpvcReflectedResource;
    sizeof(): number;
    type_id(): number;
    type_id(arg0: number): SpvcReflectedResource;
}