import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkVideoEncodeH264FrameSizeKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeH264FrameSizeKHR.d.ts'
import type { VkVideoEncodeH264QpKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeH264QpKHR.d.ts'
export class VkVideoEncodeH264RateControlLayerInfoKHR extends Struct<VkVideoEncodeH264RateControlLayerInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAXFRAMESIZE: number;
    static MAXQP: number;
    static MINQP: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static USEMAXFRAMESIZE: number;
    static USEMAXQP: number;
    static USEMINQP: number;
    static calloc(): VkVideoEncodeH264RateControlLayerInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoEncodeH264RateControlLayerInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoEncodeH264RateControlLayerInfoKHR;
    static create(paramarg0: number): VkVideoEncodeH264RateControlLayerInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoEncodeH264RateControlLayerInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoEncodeH264RateControlLayerInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoEncodeH264RateControlLayerInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmaxFrameSize(paramarg0: number): VkVideoEncodeH264FrameSizeKHR;
    static nmaxFrameSize(paramarg0: number, paramarg1: VkVideoEncodeH264FrameSizeKHR): void;
    static nmaxQp(paramarg0: number): VkVideoEncodeH264QpKHR;
    static nmaxQp(paramarg0: number, paramarg1: VkVideoEncodeH264QpKHR): void;
    static nminQp(paramarg0: number): VkVideoEncodeH264QpKHR;
    static nminQp(paramarg0: number, paramarg1: VkVideoEncodeH264QpKHR): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nuseMaxFrameSize(paramarg0: number): number;
    static nuseMaxFrameSize(paramarg0: number, paramarg1: number): void;
    static nuseMaxQp(paramarg0: number): number;
    static nuseMaxQp(paramarg0: number, paramarg1: number): void;
    static nuseMinQp(paramarg0: number): number;
    static nuseMinQp(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoEncodeH264RateControlLayerInfoKHR;
    maxFrameSize(): VkVideoEncodeH264FrameSizeKHR;
    maxFrameSize(arg0: (param0: VkVideoEncodeH264FrameSizeKHR) => void): VkVideoEncodeH264RateControlLayerInfoKHR;
    maxFrameSize(arg0: VkVideoEncodeH264FrameSizeKHR): VkVideoEncodeH264RateControlLayerInfoKHR;
    maxQp(): VkVideoEncodeH264QpKHR;
    maxQp(arg0: (param0: VkVideoEncodeH264QpKHR) => void): VkVideoEncodeH264RateControlLayerInfoKHR;
    maxQp(arg0: VkVideoEncodeH264QpKHR): VkVideoEncodeH264RateControlLayerInfoKHR;
    minQp(): VkVideoEncodeH264QpKHR;
    minQp(arg0: (param0: VkVideoEncodeH264QpKHR) => void): VkVideoEncodeH264RateControlLayerInfoKHR;
    minQp(arg0: VkVideoEncodeH264QpKHR): VkVideoEncodeH264RateControlLayerInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoEncodeH264RateControlLayerInfoKHR;
    sType(): number;
    sType(arg0: number): VkVideoEncodeH264RateControlLayerInfoKHR;
    sType$Default(): VkVideoEncodeH264RateControlLayerInfoKHR;
    set(arg0: number, arg1: number, arg2: boolean, arg3: VkVideoEncodeH264QpKHR, arg4: boolean, arg5: VkVideoEncodeH264QpKHR, arg6: boolean, arg7: VkVideoEncodeH264FrameSizeKHR): VkVideoEncodeH264RateControlLayerInfoKHR;
    set(arg0: VkVideoEncodeH264RateControlLayerInfoKHR): VkVideoEncodeH264RateControlLayerInfoKHR;
    sizeof(): number;
    useMaxFrameSize(): boolean;
    useMaxFrameSize(arg0: boolean): VkVideoEncodeH264RateControlLayerInfoKHR;
    useMaxQp(): boolean;
    useMaxQp(arg0: boolean): VkVideoEncodeH264RateControlLayerInfoKHR;
    useMinQp(): boolean;
    useMinQp(arg0: boolean): VkVideoEncodeH264RateControlLayerInfoKHR;
}