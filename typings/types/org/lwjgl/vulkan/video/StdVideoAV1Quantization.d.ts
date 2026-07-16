import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoAV1QuantizationFlags } from '../../../../org/lwjgl/vulkan/video/StdVideoAV1QuantizationFlags.d.ts'
export class StdVideoAV1Quantization extends Struct<StdVideoAV1Quantization> implements NativeResource {
    static ALIGNOF: number;
    static BASE_Q_IDX: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DELTAQUAC: number;
    static DELTAQUDC: number;
    static DELTAQVAC: number;
    static DELTAQVDC: number;
    static DELTAQYDC: number;
    static FLAGS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static QM_U: number;
    static QM_V: number;
    static QM_Y: number;
    static SIZEOF: number;
    static calloc(): StdVideoAV1Quantization;
    static calloc(paramarg0: MemoryStack): StdVideoAV1Quantization;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoAV1Quantization;
    static create(paramarg0: number): StdVideoAV1Quantization;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoAV1Quantization;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoAV1Quantization;
    static malloc(paramarg0: MemoryStack): StdVideoAV1Quantization;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nDeltaQUAc(paramarg0: number): number;
    static nDeltaQUAc(paramarg0: number, paramarg1: number): void;
    static nDeltaQUDc(paramarg0: number): number;
    static nDeltaQUDc(paramarg0: number, paramarg1: number): void;
    static nDeltaQVAc(paramarg0: number): number;
    static nDeltaQVAc(paramarg0: number, paramarg1: number): void;
    static nDeltaQVDc(paramarg0: number): number;
    static nDeltaQVDc(paramarg0: number, paramarg1: number): void;
    static nDeltaQYDc(paramarg0: number): number;
    static nDeltaQYDc(paramarg0: number, paramarg1: number): void;
    static nbase_q_idx(paramarg0: number): number;
    static nbase_q_idx(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): StdVideoAV1QuantizationFlags;
    static nflags(paramarg0: number, paramarg1: StdVideoAV1QuantizationFlags): void;
    static nqm_u(paramarg0: number): number;
    static nqm_u(paramarg0: number, paramarg1: number): void;
    static nqm_v(paramarg0: number): number;
    static nqm_v(paramarg0: number, paramarg1: number): void;
    static nqm_y(paramarg0: number): number;
    static nqm_y(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    DeltaQUAc(): number;
    DeltaQUAc(arg0: number): StdVideoAV1Quantization;
    DeltaQUDc(): number;
    DeltaQUDc(arg0: number): StdVideoAV1Quantization;
    DeltaQVAc(): number;
    DeltaQVAc(arg0: number): StdVideoAV1Quantization;
    DeltaQVDc(): number;
    DeltaQVDc(arg0: number): StdVideoAV1Quantization;
    DeltaQYDc(): number;
    DeltaQYDc(arg0: number): StdVideoAV1Quantization;
    base_q_idx(): number;
    base_q_idx(arg0: number): StdVideoAV1Quantization;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoAV1Quantization;
    flags(): StdVideoAV1QuantizationFlags;
    flags(arg0: (param0: StdVideoAV1QuantizationFlags) => void): StdVideoAV1Quantization;
    flags(arg0: StdVideoAV1QuantizationFlags): StdVideoAV1Quantization;
    qm_u(): number;
    qm_u(arg0: number): StdVideoAV1Quantization;
    qm_v(): number;
    qm_v(arg0: number): StdVideoAV1Quantization;
    qm_y(): number;
    qm_y(arg0: number): StdVideoAV1Quantization;
    set(arg0: StdVideoAV1Quantization): StdVideoAV1Quantization;
    set(arg0: StdVideoAV1QuantizationFlags, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): StdVideoAV1Quantization;
    sizeof(): number;
}