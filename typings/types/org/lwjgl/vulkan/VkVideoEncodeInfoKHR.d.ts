import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkVideoEncodeAV1PictureInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeAV1PictureInfoKHR.d.ts'
import type { VkVideoEncodeH264PictureInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeH264PictureInfoKHR.d.ts'
import type { VkVideoEncodeH265PictureInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeH265PictureInfoKHR.d.ts'
import type { VkVideoEncodeIntraRefreshInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeIntraRefreshInfoKHR.d.ts'
import type { VkVideoEncodeQuantizationMapInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeQuantizationMapInfoKHR.d.ts'
import type { VkVideoInlineQueryInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoInlineQueryInfoKHR.d.ts'
import type { VkVideoPictureResourceInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoPictureResourceInfoKHR.d.ts'
import type { VkVideoReferenceSlotInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoReferenceSlotInfoKHR.d.ts'
export class VkVideoEncodeInfoKHR extends Struct<VkVideoEncodeInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DSTBUFFER: number;
    static DSTBUFFEROFFSET: number;
    static DSTBUFFERRANGE: number;
    static FLAGS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PRECEDINGEXTERNALLYENCODEDBYTES: number;
    static PREFERENCESLOTS: number;
    static PSETUPREFERENCESLOT: number;
    static REFERENCESLOTCOUNT: number;
    static SIZEOF: number;
    static SRCPICTURERESOURCE: number;
    static STYPE: number;
    static calloc(): VkVideoEncodeInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoEncodeInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoEncodeInfoKHR;
    static create(paramarg0: number): VkVideoEncodeInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoEncodeInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoEncodeInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoEncodeInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndstBuffer(paramarg0: number): number;
    static ndstBuffer(paramarg0: number, paramarg1: number): void;
    static ndstBufferOffset(paramarg0: number): number;
    static ndstBufferOffset(paramarg0: number, paramarg1: number): void;
    static ndstBufferRange(paramarg0: number): number;
    static ndstBufferRange(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npReferenceSlots(paramarg0: number): (Object | null)[];
    static npReferenceSlots(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npSetupReferenceSlot(paramarg0: number): VkVideoReferenceSlotInfoKHR;
    static npSetupReferenceSlot(paramarg0: number, paramarg1: VkVideoReferenceSlotInfoKHR): void;
    static nprecedingExternallyEncodedBytes(paramarg0: number): number;
    static nprecedingExternallyEncodedBytes(paramarg0: number, paramarg1: number): void;
    static nreferenceSlotCount(paramarg0: number): number;
    static nreferenceSlotCount(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsrcPictureResource(paramarg0: number): VkVideoPictureResourceInfoKHR;
    static nsrcPictureResource(paramarg0: number, paramarg1: VkVideoPictureResourceInfoKHR): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoEncodeInfoKHR;
    dstBuffer(): number;
    dstBuffer(arg0: number): VkVideoEncodeInfoKHR;
    dstBufferOffset(): number;
    dstBufferOffset(arg0: number): VkVideoEncodeInfoKHR;
    dstBufferRange(): number;
    dstBufferRange(arg0: number): VkVideoEncodeInfoKHR;
    flags(): number;
    flags(arg0: number): VkVideoEncodeInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoEncodeInfoKHR;
    pNext(arg0: VkVideoEncodeAV1PictureInfoKHR): VkVideoEncodeInfoKHR;
    pNext(arg0: VkVideoEncodeH264PictureInfoKHR): VkVideoEncodeInfoKHR;
    pNext(arg0: VkVideoEncodeH265PictureInfoKHR): VkVideoEncodeInfoKHR;
    pNext(arg0: VkVideoEncodeIntraRefreshInfoKHR): VkVideoEncodeInfoKHR;
    pNext(arg0: VkVideoEncodeQuantizationMapInfoKHR): VkVideoEncodeInfoKHR;
    pNext(arg0: VkVideoInlineQueryInfoKHR): VkVideoEncodeInfoKHR;
    pReferenceSlots(): (Object | null)[];
    pReferenceSlots(arg0: (Object | null)[]): VkVideoEncodeInfoKHR;
    pSetupReferenceSlot(): VkVideoReferenceSlotInfoKHR;
    pSetupReferenceSlot(arg0: VkVideoReferenceSlotInfoKHR): VkVideoEncodeInfoKHR;
    precedingExternallyEncodedBytes(): number;
    precedingExternallyEncodedBytes(arg0: number): VkVideoEncodeInfoKHR;
    referenceSlotCount(): number;
    sType(): number;
    sType(arg0: number): VkVideoEncodeInfoKHR;
    sType$Default(): VkVideoEncodeInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: VkVideoPictureResourceInfoKHR, arg7: VkVideoReferenceSlotInfoKHR, arg8: (Object | null)[], arg9: number): VkVideoEncodeInfoKHR;
    set(arg0: VkVideoEncodeInfoKHR): VkVideoEncodeInfoKHR;
    sizeof(): number;
    srcPictureResource(): VkVideoPictureResourceInfoKHR;
    srcPictureResource(arg0: (param0: VkVideoPictureResourceInfoKHR) => void): VkVideoEncodeInfoKHR;
    srcPictureResource(arg0: VkVideoPictureResourceInfoKHR): VkVideoEncodeInfoKHR;
}