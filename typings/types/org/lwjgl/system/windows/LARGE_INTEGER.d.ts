import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class LARGE_INTEGER extends Struct<LARGE_INTEGER> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static QUADPART: number;
    static SIZEOF: number;
    static U: number;
    static U_HIGHPART: number;
    static U_LOWPART: number;
    static calloc(): LARGE_INTEGER;
    static calloc(paramarg0: MemoryStack): LARGE_INTEGER;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): LARGE_INTEGER;
    static create(paramarg0: number): LARGE_INTEGER;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): LARGE_INTEGER;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): LARGE_INTEGER;
    static malloc(paramarg0: MemoryStack): LARGE_INTEGER;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nQuadPart(paramarg0: number): number;
    static nQuadPart(paramarg0: number, paramarg1: number): void;
    static nu_HighPart(paramarg0: number): number;
    static nu_HighPart(paramarg0: number, paramarg1: number): void;
    static nu_LowPart(paramarg0: number): number;
    static nu_LowPart(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    QuadPart(): number;
    QuadPart(arg0: number): LARGE_INTEGER;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): LARGE_INTEGER;
    set(arg0: LARGE_INTEGER): LARGE_INTEGER;
    sizeof(): number;
    u_HighPart(): number;
    u_HighPart(arg0: number): LARGE_INTEGER;
    u_LowPart(): number;
    u_LowPart(arg0: number): LARGE_INTEGER;
}