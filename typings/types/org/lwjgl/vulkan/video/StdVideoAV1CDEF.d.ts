import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoAV1CDEF extends Struct<StdVideoAV1CDEF> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CDEF_BITS: number;
    static CDEF_DAMPING_MINUS_3: number;
    static CDEF_UV_PRI_STRENGTH: number;
    static CDEF_UV_SEC_STRENGTH: number;
    static CDEF_Y_PRI_STRENGTH: number;
    static CDEF_Y_SEC_STRENGTH: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): StdVideoAV1CDEF;
    static calloc(paramarg0: MemoryStack): StdVideoAV1CDEF;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoAV1CDEF;
    static create(paramarg0: number): StdVideoAV1CDEF;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoAV1CDEF;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoAV1CDEF;
    static malloc(paramarg0: MemoryStack): StdVideoAV1CDEF;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncdef_bits(paramarg0: number): number;
    static ncdef_bits(paramarg0: number, paramarg1: number): void;
    static ncdef_damping_minus_3(paramarg0: number): number;
    static ncdef_damping_minus_3(paramarg0: number, paramarg1: number): void;
    static ncdef_uv_pri_strength(paramarg0: number, paramarg1: number): number;
    static ncdef_uv_pri_strength(paramarg0: number): ByteBuffer;
    static ncdef_uv_pri_strength(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static ncdef_uv_pri_strength(paramarg0: number, paramarg1: ByteBuffer): void;
    static ncdef_uv_sec_strength(paramarg0: number, paramarg1: number): number;
    static ncdef_uv_sec_strength(paramarg0: number): ByteBuffer;
    static ncdef_uv_sec_strength(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static ncdef_uv_sec_strength(paramarg0: number, paramarg1: ByteBuffer): void;
    static ncdef_y_pri_strength(paramarg0: number, paramarg1: number): number;
    static ncdef_y_pri_strength(paramarg0: number): ByteBuffer;
    static ncdef_y_pri_strength(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static ncdef_y_pri_strength(paramarg0: number, paramarg1: ByteBuffer): void;
    static ncdef_y_sec_strength(paramarg0: number, paramarg1: number): number;
    static ncdef_y_sec_strength(paramarg0: number): ByteBuffer;
    static ncdef_y_sec_strength(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static ncdef_y_sec_strength(paramarg0: number, paramarg1: ByteBuffer): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    cdef_bits(): number;
    cdef_bits(arg0: number): StdVideoAV1CDEF;
    cdef_damping_minus_3(): number;
    cdef_damping_minus_3(arg0: number): StdVideoAV1CDEF;
    cdef_uv_pri_strength(): ByteBuffer;
    cdef_uv_pri_strength(arg0: ByteBuffer): StdVideoAV1CDEF;
    cdef_uv_pri_strength(arg0: number): number;
    cdef_uv_pri_strength(arg0: number, arg1: number): StdVideoAV1CDEF;
    cdef_uv_sec_strength(): ByteBuffer;
    cdef_uv_sec_strength(arg0: ByteBuffer): StdVideoAV1CDEF;
    cdef_uv_sec_strength(arg0: number): number;
    cdef_uv_sec_strength(arg0: number, arg1: number): StdVideoAV1CDEF;
    cdef_y_pri_strength(): ByteBuffer;
    cdef_y_pri_strength(arg0: ByteBuffer): StdVideoAV1CDEF;
    cdef_y_pri_strength(arg0: number): number;
    cdef_y_pri_strength(arg0: number, arg1: number): StdVideoAV1CDEF;
    cdef_y_sec_strength(): ByteBuffer;
    cdef_y_sec_strength(arg0: ByteBuffer): StdVideoAV1CDEF;
    cdef_y_sec_strength(arg0: number): number;
    cdef_y_sec_strength(arg0: number, arg1: number): StdVideoAV1CDEF;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoAV1CDEF;
    set(arg0: number, arg1: number, arg2: ByteBuffer, arg3: ByteBuffer, arg4: ByteBuffer, arg5: ByteBuffer): StdVideoAV1CDEF;
    set(arg0: StdVideoAV1CDEF): StdVideoAV1CDEF;
    sizeof(): number;
}