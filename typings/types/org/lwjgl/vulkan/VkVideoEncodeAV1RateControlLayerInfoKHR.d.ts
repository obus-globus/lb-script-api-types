import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkVideoEncodeAV1FrameSizeKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeAV1FrameSizeKHR.d.ts'
import type { VkVideoEncodeAV1QIndexKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeAV1QIndexKHR.d.ts'
export class VkVideoEncodeAV1RateControlLayerInfoKHR extends Struct<VkVideoEncodeAV1RateControlLayerInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAXFRAMESIZE: number;
    static MAXQINDEX: number;
    static MINQINDEX: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static USEMAXFRAMESIZE: number;
    static USEMAXQINDEX: number;
    static USEMINQINDEX: number;
    static calloc(): VkVideoEncodeAV1RateControlLayerInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoEncodeAV1RateControlLayerInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoEncodeAV1RateControlLayerInfoKHR;
    static create(paramarg0: number): VkVideoEncodeAV1RateControlLayerInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoEncodeAV1RateControlLayerInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoEncodeAV1RateControlLayerInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoEncodeAV1RateControlLayerInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmaxFrameSize(paramarg0: number): VkVideoEncodeAV1FrameSizeKHR;
    static nmaxFrameSize(paramarg0: number, paramarg1: VkVideoEncodeAV1FrameSizeKHR): void;
    static nmaxQIndex(paramarg0: number): VkVideoEncodeAV1QIndexKHR;
    static nmaxQIndex(paramarg0: number, paramarg1: VkVideoEncodeAV1QIndexKHR): void;
    static nminQIndex(paramarg0: number): VkVideoEncodeAV1QIndexKHR;
    static nminQIndex(paramarg0: number, paramarg1: VkVideoEncodeAV1QIndexKHR): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nuseMaxFrameSize(paramarg0: number): number;
    static nuseMaxFrameSize(paramarg0: number, paramarg1: number): void;
    static nuseMaxQIndex(paramarg0: number): number;
    static nuseMaxQIndex(paramarg0: number, paramarg1: number): void;
    static nuseMinQIndex(paramarg0: number): number;
    static nuseMinQIndex(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoEncodeAV1RateControlLayerInfoKHR;
    maxFrameSize(): VkVideoEncodeAV1FrameSizeKHR;
    maxFrameSize(arg0: (param0: VkVideoEncodeAV1FrameSizeKHR) => void): VkVideoEncodeAV1RateControlLayerInfoKHR;
    maxFrameSize(arg0: VkVideoEncodeAV1FrameSizeKHR): VkVideoEncodeAV1RateControlLayerInfoKHR;
    maxQIndex(): VkVideoEncodeAV1QIndexKHR;
    maxQIndex(arg0: (param0: VkVideoEncodeAV1QIndexKHR) => void): VkVideoEncodeAV1RateControlLayerInfoKHR;
    maxQIndex(arg0: VkVideoEncodeAV1QIndexKHR): VkVideoEncodeAV1RateControlLayerInfoKHR;
    minQIndex(): VkVideoEncodeAV1QIndexKHR;
    minQIndex(arg0: (param0: VkVideoEncodeAV1QIndexKHR) => void): VkVideoEncodeAV1RateControlLayerInfoKHR;
    minQIndex(arg0: VkVideoEncodeAV1QIndexKHR): VkVideoEncodeAV1RateControlLayerInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoEncodeAV1RateControlLayerInfoKHR;
    sType(): number;
    sType(arg0: number): VkVideoEncodeAV1RateControlLayerInfoKHR;
    sType$Default(): VkVideoEncodeAV1RateControlLayerInfoKHR;
    set(arg0: number, arg1: number, arg2: boolean, arg3: VkVideoEncodeAV1QIndexKHR, arg4: boolean, arg5: VkVideoEncodeAV1QIndexKHR, arg6: boolean, arg7: VkVideoEncodeAV1FrameSizeKHR): VkVideoEncodeAV1RateControlLayerInfoKHR;
    set(arg0: VkVideoEncodeAV1RateControlLayerInfoKHR): VkVideoEncodeAV1RateControlLayerInfoKHR;
    sizeof(): number;
    useMaxFrameSize(): boolean;
    useMaxFrameSize(arg0: boolean): VkVideoEncodeAV1RateControlLayerInfoKHR;
    useMaxQIndex(): boolean;
    useMaxQIndex(arg0: boolean): VkVideoEncodeAV1RateControlLayerInfoKHR;
    useMinQIndex(): boolean;
    useMinQIndex(arg0: boolean): VkVideoEncodeAV1RateControlLayerInfoKHR;
}