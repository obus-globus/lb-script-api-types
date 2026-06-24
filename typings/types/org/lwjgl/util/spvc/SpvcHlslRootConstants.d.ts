import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class SpvcHlslRootConstants extends Struct<SpvcHlslRootConstants> implements NativeResource {
    static ALIGNOF: number;
    static BINDING: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static END: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SPACE: number;
    static START: number;
    static calloc(): SpvcHlslRootConstants;
    static calloc(paramarg0: MemoryStack): SpvcHlslRootConstants;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): SpvcHlslRootConstants;
    static create(paramarg0: number): SpvcHlslRootConstants;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): SpvcHlslRootConstants;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): SpvcHlslRootConstants;
    static malloc(paramarg0: MemoryStack): SpvcHlslRootConstants;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbinding(paramarg0: number): number;
    static nbinding(paramarg0: number, paramarg1: number): void;
    static nend(paramarg0: number): number;
    static nend(paramarg0: number, paramarg1: number): void;
    static nspace(paramarg0: number): number;
    static nspace(paramarg0: number, paramarg1: number): void;
    static nstart(paramarg0: number): number;
    static nstart(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    binding(): number;
    binding(arg0: number): SpvcHlslRootConstants;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): SpvcHlslRootConstants;
    end(): number;
    end(arg0: number): SpvcHlslRootConstants;
    set(arg0: number, arg1: number, arg2: number, arg3: number): SpvcHlslRootConstants;
    set(arg0: SpvcHlslRootConstants): SpvcHlslRootConstants;
    sizeof(): number;
    space(): number;
    space(arg0: number): SpvcHlslRootConstants;
    start(): number;
    start(arg0: number): SpvcHlslRootConstants;
}