import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkVideoEncodeAV1RateControlLayerInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeAV1RateControlLayerInfoKHR.d.ts'
import type { VkVideoEncodeH264RateControlLayerInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeH264RateControlLayerInfoKHR.d.ts'
import type { VkVideoEncodeH265RateControlLayerInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeH265RateControlLayerInfoKHR.d.ts'
export class VkVideoEncodeRateControlLayerInfoKHR extends Struct<VkVideoEncodeRateControlLayerInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static AVERAGEBITRATE: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FRAMERATEDENOMINATOR: number;
    static FRAMERATENUMERATOR: number;
    static MAXBITRATE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkVideoEncodeRateControlLayerInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoEncodeRateControlLayerInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoEncodeRateControlLayerInfoKHR;
    static create(paramarg0: number): VkVideoEncodeRateControlLayerInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoEncodeRateControlLayerInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoEncodeRateControlLayerInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoEncodeRateControlLayerInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static naverageBitrate(paramarg0: number): number;
    static naverageBitrate(paramarg0: number, paramarg1: number): void;
    static nframeRateDenominator(paramarg0: number): number;
    static nframeRateDenominator(paramarg0: number, paramarg1: number): void;
    static nframeRateNumerator(paramarg0: number): number;
    static nframeRateNumerator(paramarg0: number, paramarg1: number): void;
    static nmaxBitrate(paramarg0: number): number;
    static nmaxBitrate(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    averageBitrate(): number;
    averageBitrate(arg0: number): VkVideoEncodeRateControlLayerInfoKHR;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoEncodeRateControlLayerInfoKHR;
    frameRateDenominator(): number;
    frameRateDenominator(arg0: number): VkVideoEncodeRateControlLayerInfoKHR;
    frameRateNumerator(): number;
    frameRateNumerator(arg0: number): VkVideoEncodeRateControlLayerInfoKHR;
    maxBitrate(): number;
    maxBitrate(arg0: number): VkVideoEncodeRateControlLayerInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoEncodeRateControlLayerInfoKHR;
    pNext(arg0: VkVideoEncodeAV1RateControlLayerInfoKHR): VkVideoEncodeRateControlLayerInfoKHR;
    pNext(arg0: VkVideoEncodeH264RateControlLayerInfoKHR): VkVideoEncodeRateControlLayerInfoKHR;
    pNext(arg0: VkVideoEncodeH265RateControlLayerInfoKHR): VkVideoEncodeRateControlLayerInfoKHR;
    sType(): number;
    sType(arg0: number): VkVideoEncodeRateControlLayerInfoKHR;
    sType$Default(): VkVideoEncodeRateControlLayerInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): VkVideoEncodeRateControlLayerInfoKHR;
    set(arg0: VkVideoEncodeRateControlLayerInfoKHR): VkVideoEncodeRateControlLayerInfoKHR;
    sizeof(): number;
}