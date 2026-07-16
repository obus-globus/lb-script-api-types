import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkVideoEncodeAV1GopRemainingFrameInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeAV1GopRemainingFrameInfoKHR.d.ts'
import type { VkVideoEncodeAV1RateControlInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeAV1RateControlInfoKHR.d.ts'
import type { VkVideoEncodeH264GopRemainingFrameInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeH264GopRemainingFrameInfoKHR.d.ts'
import type { VkVideoEncodeH264RateControlInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeH264RateControlInfoKHR.d.ts'
import type { VkVideoEncodeH265GopRemainingFrameInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeH265GopRemainingFrameInfoKHR.d.ts'
import type { VkVideoEncodeH265RateControlInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeH265RateControlInfoKHR.d.ts'
import type { VkVideoEncodeRateControlInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeRateControlInfoKHR.d.ts'
export class VkVideoBeginCodingInfoKHR extends Struct<VkVideoBeginCodingInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PREFERENCESLOTS: number;
    static REFERENCESLOTCOUNT: number;
    static SIZEOF: number;
    static STYPE: number;
    static VIDEOSESSION: number;
    static VIDEOSESSIONPARAMETERS: number;
    static calloc(): VkVideoBeginCodingInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoBeginCodingInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoBeginCodingInfoKHR;
    static create(paramarg0: number): VkVideoBeginCodingInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoBeginCodingInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoBeginCodingInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoBeginCodingInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npReferenceSlots(paramarg0: number): (Object | null)[];
    static npReferenceSlots(paramarg0: number, paramarg1: (Object | null)[]): void;
    static nreferenceSlotCount(paramarg0: number): number;
    static nreferenceSlotCount(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nvideoSession(paramarg0: number): number;
    static nvideoSession(paramarg0: number, paramarg1: number): void;
    static nvideoSessionParameters(paramarg0: number): number;
    static nvideoSessionParameters(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoBeginCodingInfoKHR;
    flags(): number;
    flags(arg0: number): VkVideoBeginCodingInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoBeginCodingInfoKHR;
    pNext(arg0: VkVideoEncodeAV1GopRemainingFrameInfoKHR): VkVideoBeginCodingInfoKHR;
    pNext(arg0: VkVideoEncodeAV1RateControlInfoKHR): VkVideoBeginCodingInfoKHR;
    pNext(arg0: VkVideoEncodeH264GopRemainingFrameInfoKHR): VkVideoBeginCodingInfoKHR;
    pNext(arg0: VkVideoEncodeH264RateControlInfoKHR): VkVideoBeginCodingInfoKHR;
    pNext(arg0: VkVideoEncodeH265GopRemainingFrameInfoKHR): VkVideoBeginCodingInfoKHR;
    pNext(arg0: VkVideoEncodeH265RateControlInfoKHR): VkVideoBeginCodingInfoKHR;
    pNext(arg0: VkVideoEncodeRateControlInfoKHR): VkVideoBeginCodingInfoKHR;
    pReferenceSlots(): (Object | null)[];
    pReferenceSlots(arg0: (Object | null)[]): VkVideoBeginCodingInfoKHR;
    referenceSlotCount(): number;
    sType(): number;
    sType(arg0: number): VkVideoBeginCodingInfoKHR;
    sType$Default(): VkVideoBeginCodingInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: (Object | null)[]): VkVideoBeginCodingInfoKHR;
    set(arg0: VkVideoBeginCodingInfoKHR): VkVideoBeginCodingInfoKHR;
    sizeof(): number;
    videoSession(): number;
    videoSession(arg0: number): VkVideoBeginCodingInfoKHR;
    videoSessionParameters(): number;
    videoSessionParameters(arg0: number): VkVideoBeginCodingInfoKHR;
}