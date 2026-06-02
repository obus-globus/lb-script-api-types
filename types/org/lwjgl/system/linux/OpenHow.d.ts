import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class OpenHow extends Struct<OpenHow> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static MODE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESOLVE: number;
    static SIZEOF: number;
    static calloc(): OpenHow;
    static calloc(paramarg0: MemoryStack): OpenHow;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): OpenHow;
    static create(paramarg0: number): OpenHow;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): OpenHow;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): OpenHow;
    static malloc(paramarg0: MemoryStack): OpenHow;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nmode(paramarg0: number): number;
    static nmode(paramarg0: number, paramarg1: number): void;
    static nresolve(paramarg0: number): number;
    static nresolve(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): OpenHow;
    flags(): number;
    flags(arg0: number): OpenHow;
    mode(): number;
    mode(arg0: number): OpenHow;
    resolve(): number;
    resolve(arg0: number): OpenHow;
    set(arg0: number, arg1: number, arg2: number): OpenHow;
    set(arg0: OpenHow): OpenHow;
    sizeof(): number;
}