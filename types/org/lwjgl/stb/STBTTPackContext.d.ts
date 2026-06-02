import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { STBRPContext } from '../../../org/lwjgl/stb/STBRPContext.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class STBTTPackContext extends Struct<STBTTPackContext> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static HEIGHT: number;
    static H_OVERSAMPLE: number;
    static NODES: number;
    static PACK_INFO: number;
    static PADDING: number;
    static PIXELS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SKIP_MISSING: number;
    static STRIDE_IN_BYTES: number;
    static USER_ALLOCATOR_CONTEXT: number;
    static V_OVERSAMPLE: number;
    static WIDTH: number;
    static calloc(): STBTTPackContext;
    static calloc(paramarg0: MemoryStack): STBTTPackContext;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): STBTTPackContext;
    static create(paramarg0: number): STBTTPackContext;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): STBTTPackContext;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): STBTTPackContext;
    static malloc(paramarg0: MemoryStack): STBTTPackContext;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nh_oversample(paramarg0: number): number;
    static nheight(paramarg0: number): number;
    static nnodes(paramarg0: number, paramarg1: number): (Object | null)[];
    static npack_info(paramarg0: number): STBRPContext;
    static npadding(paramarg0: number): number;
    static npixels(paramarg0: number, paramarg1: number): ByteBuffer;
    static nskip_missing(paramarg0: number): number;
    static nstride_in_bytes(paramarg0: number): number;
    static nuser_allocator_context(paramarg0: number): number;
    static nv_oversample(paramarg0: number): number;
    static nwidth(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): STBTTPackContext;
    h_oversample(): number;
    height(): number;
    nodes(arg0: number): (Object | null)[];
    pack_info(): STBRPContext;
    padding(): number;
    pixels(arg0: number): ByteBuffer;
    sizeof(): number;
    skip_missing(): boolean;
    stride_in_bytes(): number;
    user_allocator_context(): number;
    v_oversample(): number;
    width(): number;
}