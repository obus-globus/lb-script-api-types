import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkVideoDecodeAV1InlineSessionParametersInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoDecodeAV1InlineSessionParametersInfoKHR.d.ts'
import type { VkVideoDecodeAV1PictureInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoDecodeAV1PictureInfoKHR.d.ts'
import type { VkVideoDecodeH264InlineSessionParametersInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoDecodeH264InlineSessionParametersInfoKHR.d.ts'
import type { VkVideoDecodeH264PictureInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoDecodeH264PictureInfoKHR.d.ts'
import type { VkVideoDecodeH265InlineSessionParametersInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoDecodeH265InlineSessionParametersInfoKHR.d.ts'
import type { VkVideoDecodeH265PictureInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoDecodeH265PictureInfoKHR.d.ts'
import type { VkVideoDecodeVP9PictureInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoDecodeVP9PictureInfoKHR.d.ts'
import type { VkVideoInlineQueryInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoInlineQueryInfoKHR.d.ts'
import type { VkVideoPictureResourceInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoPictureResourceInfoKHR.d.ts'
import type { VkVideoReferenceSlotInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoReferenceSlotInfoKHR.d.ts'
export class VkVideoDecodeInfoKHR extends Struct<VkVideoDecodeInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DSTPICTURERESOURCE: number;
    static FLAGS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PREFERENCESLOTS: number;
    static PSETUPREFERENCESLOT: number;
    static REFERENCESLOTCOUNT: number;
    static SIZEOF: number;
    static SRCBUFFER: number;
    static SRCBUFFEROFFSET: number;
    static SRCBUFFERRANGE: number;
    static STYPE: number;
    static calloc(): VkVideoDecodeInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoDecodeInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoDecodeInfoKHR;
    static create(paramarg0: number): VkVideoDecodeInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoDecodeInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoDecodeInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoDecodeInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndstPictureResource(paramarg0: number): VkVideoPictureResourceInfoKHR;
    static ndstPictureResource(paramarg0: number, paramarg1: VkVideoPictureResourceInfoKHR): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npReferenceSlots(paramarg0: number): (Object | null)[];
    static npReferenceSlots(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npSetupReferenceSlot(paramarg0: number): VkVideoReferenceSlotInfoKHR;
    static npSetupReferenceSlot(paramarg0: number, paramarg1: VkVideoReferenceSlotInfoKHR): void;
    static nreferenceSlotCount(paramarg0: number): number;
    static nreferenceSlotCount(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsrcBuffer(paramarg0: number): number;
    static nsrcBuffer(paramarg0: number, paramarg1: number): void;
    static nsrcBufferOffset(paramarg0: number): number;
    static nsrcBufferOffset(paramarg0: number, paramarg1: number): void;
    static nsrcBufferRange(paramarg0: number): number;
    static nsrcBufferRange(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoDecodeInfoKHR;
    dstPictureResource(): VkVideoPictureResourceInfoKHR;
    dstPictureResource(arg0: (param0: VkVideoPictureResourceInfoKHR) => void): VkVideoDecodeInfoKHR;
    dstPictureResource(arg0: VkVideoPictureResourceInfoKHR): VkVideoDecodeInfoKHR;
    flags(): number;
    flags(arg0: number): VkVideoDecodeInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoDecodeInfoKHR;
    pNext(arg0: VkVideoDecodeAV1InlineSessionParametersInfoKHR): VkVideoDecodeInfoKHR;
    pNext(arg0: VkVideoDecodeAV1PictureInfoKHR): VkVideoDecodeInfoKHR;
    pNext(arg0: VkVideoDecodeH264InlineSessionParametersInfoKHR): VkVideoDecodeInfoKHR;
    pNext(arg0: VkVideoDecodeH264PictureInfoKHR): VkVideoDecodeInfoKHR;
    pNext(arg0: VkVideoDecodeH265InlineSessionParametersInfoKHR): VkVideoDecodeInfoKHR;
    pNext(arg0: VkVideoDecodeH265PictureInfoKHR): VkVideoDecodeInfoKHR;
    pNext(arg0: VkVideoDecodeVP9PictureInfoKHR): VkVideoDecodeInfoKHR;
    pNext(arg0: VkVideoInlineQueryInfoKHR): VkVideoDecodeInfoKHR;
    pReferenceSlots(): (Object | null)[];
    pReferenceSlots(arg0: (Object | null)[]): VkVideoDecodeInfoKHR;
    pSetupReferenceSlot(): VkVideoReferenceSlotInfoKHR;
    pSetupReferenceSlot(arg0: VkVideoReferenceSlotInfoKHR): VkVideoDecodeInfoKHR;
    referenceSlotCount(): number;
    sType(): number;
    sType(arg0: number): VkVideoDecodeInfoKHR;
    sType$Default(): VkVideoDecodeInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: VkVideoPictureResourceInfoKHR, arg7: VkVideoReferenceSlotInfoKHR, arg8: (Object | null)[]): VkVideoDecodeInfoKHR;
    set(arg0: VkVideoDecodeInfoKHR): VkVideoDecodeInfoKHR;
    sizeof(): number;
    srcBuffer(): number;
    srcBuffer(arg0: number): VkVideoDecodeInfoKHR;
    srcBufferOffset(): number;
    srcBufferOffset(arg0: number): VkVideoDecodeInfoKHR;
    srcBufferRange(): number;
    srcBufferRange(arg0: number): VkVideoDecodeInfoKHR;
}