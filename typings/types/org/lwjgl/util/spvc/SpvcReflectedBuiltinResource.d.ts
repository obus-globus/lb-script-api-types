import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { SpvcReflectedResource } from '../../../../org/lwjgl/util/spvc/SpvcReflectedResource.d.ts'
export class SpvcReflectedBuiltinResource extends Struct<SpvcReflectedBuiltinResource> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BUILTIN: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESOURCE: number;
    static SIZEOF: number;
    static VALUE_TYPE_ID: number;
    static calloc(): SpvcReflectedBuiltinResource;
    static calloc(paramarg0: MemoryStack): SpvcReflectedBuiltinResource;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): SpvcReflectedBuiltinResource;
    static create(paramarg0: number): SpvcReflectedBuiltinResource;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): SpvcReflectedBuiltinResource;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): SpvcReflectedBuiltinResource;
    static malloc(paramarg0: MemoryStack): SpvcReflectedBuiltinResource;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbuiltin(paramarg0: number): number;
    static nbuiltin(paramarg0: number, paramarg1: number): void;
    static nresource(paramarg0: number): SpvcReflectedResource;
    static nresource(paramarg0: number, paramarg1: SpvcReflectedResource): void;
    static nvalue_type_id(paramarg0: number): number;
    static nvalue_type_id(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    builtin(): number;
    builtin(arg0: number): SpvcReflectedBuiltinResource;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): SpvcReflectedBuiltinResource;
    resource(): SpvcReflectedResource;
    resource(arg0: (param0: SpvcReflectedResource) => void): SpvcReflectedBuiltinResource;
    resource(arg0: SpvcReflectedResource): SpvcReflectedBuiltinResource;
    set(arg0: number, arg1: number, arg2: SpvcReflectedResource): SpvcReflectedBuiltinResource;
    set(arg0: SpvcReflectedBuiltinResource): SpvcReflectedBuiltinResource;
    sizeof(): number;
    value_type_id(): number;
    value_type_id(arg0: number): SpvcReflectedBuiltinResource;
}