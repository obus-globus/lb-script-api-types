import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoAV1GlobalMotion extends Struct<StdVideoAV1GlobalMotion> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static GMTYPE: number;
    static GM_PARAMS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): StdVideoAV1GlobalMotion;
    static calloc(paramarg0: MemoryStack): StdVideoAV1GlobalMotion;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoAV1GlobalMotion;
    static create(paramarg0: number): StdVideoAV1GlobalMotion;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoAV1GlobalMotion;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoAV1GlobalMotion;
    static malloc(paramarg0: MemoryStack): StdVideoAV1GlobalMotion;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nGmType(paramarg0: number, paramarg1: number): number;
    static nGmType(paramarg0: number): ByteBuffer;
    static nGmType(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nGmType(paramarg0: number, paramarg1: ByteBuffer): void;
    static ngm_params(paramarg0: number, paramarg1: number): number;
    static ngm_params(paramarg0: number): IntBuffer;
    static ngm_params(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static ngm_params(paramarg0: number, paramarg1: IntBuffer): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    GmType(): ByteBuffer;
    GmType(arg0: ByteBuffer): StdVideoAV1GlobalMotion;
    GmType(arg0: number): number;
    GmType(arg0: number, arg1: number): StdVideoAV1GlobalMotion;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoAV1GlobalMotion;
    gm_params(): IntBuffer;
    gm_params(arg0: IntBuffer): StdVideoAV1GlobalMotion;
    gm_params(arg0: number): number;
    gm_params(arg0: number, arg1: number): StdVideoAV1GlobalMotion;
    set(arg0: ByteBuffer, arg1: IntBuffer): StdVideoAV1GlobalMotion;
    set(arg0: StdVideoAV1GlobalMotion): StdVideoAV1GlobalMotion;
    sizeof(): number;
}