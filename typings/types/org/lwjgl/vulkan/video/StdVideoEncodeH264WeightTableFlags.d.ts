import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoEncodeH264WeightTableFlags extends Struct<StdVideoEncodeH264WeightTableFlags> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CHROMA_WEIGHT_L0_FLAG: number;
    static CHROMA_WEIGHT_L1_FLAG: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static LUMA_WEIGHT_L0_FLAG: number;
    static LUMA_WEIGHT_L1_FLAG: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): StdVideoEncodeH264WeightTableFlags;
    static calloc(paramarg0: MemoryStack): StdVideoEncodeH264WeightTableFlags;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoEncodeH264WeightTableFlags;
    static create(paramarg0: number): StdVideoEncodeH264WeightTableFlags;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoEncodeH264WeightTableFlags;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoEncodeH264WeightTableFlags;
    static malloc(paramarg0: MemoryStack): StdVideoEncodeH264WeightTableFlags;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nchroma_weight_l0_flag(paramarg0: number): number;
    static nchroma_weight_l0_flag(paramarg0: number, paramarg1: number): void;
    static nchroma_weight_l1_flag(paramarg0: number): number;
    static nchroma_weight_l1_flag(paramarg0: number, paramarg1: number): void;
    static nluma_weight_l0_flag(paramarg0: number): number;
    static nluma_weight_l0_flag(paramarg0: number, paramarg1: number): void;
    static nluma_weight_l1_flag(paramarg0: number): number;
    static nluma_weight_l1_flag(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    chroma_weight_l0_flag(): number;
    chroma_weight_l0_flag(arg0: number): StdVideoEncodeH264WeightTableFlags;
    chroma_weight_l1_flag(): number;
    chroma_weight_l1_flag(arg0: number): StdVideoEncodeH264WeightTableFlags;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoEncodeH264WeightTableFlags;
    luma_weight_l0_flag(): number;
    luma_weight_l0_flag(arg0: number): StdVideoEncodeH264WeightTableFlags;
    luma_weight_l1_flag(): number;
    luma_weight_l1_flag(arg0: number): StdVideoEncodeH264WeightTableFlags;
    set(arg0: number, arg1: number, arg2: number, arg3: number): StdVideoEncodeH264WeightTableFlags;
    set(arg0: StdVideoEncodeH264WeightTableFlags): StdVideoEncodeH264WeightTableFlags;
    sizeof(): number;
}