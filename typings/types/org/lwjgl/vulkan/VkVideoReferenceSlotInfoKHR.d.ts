import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkVideoDecodeAV1DpbSlotInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoDecodeAV1DpbSlotInfoKHR.d.ts'
import type { VkVideoDecodeH264DpbSlotInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoDecodeH264DpbSlotInfoKHR.d.ts'
import type { VkVideoDecodeH265DpbSlotInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoDecodeH265DpbSlotInfoKHR.d.ts'
import type { VkVideoEncodeAV1DpbSlotInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeAV1DpbSlotInfoKHR.d.ts'
import type { VkVideoEncodeH264DpbSlotInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeH264DpbSlotInfoKHR.d.ts'
import type { VkVideoEncodeH265DpbSlotInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeH265DpbSlotInfoKHR.d.ts'
import type { VkVideoPictureResourceInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoPictureResourceInfoKHR.d.ts'
import type { VkVideoReferenceIntraRefreshInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoReferenceIntraRefreshInfoKHR.d.ts'
export class VkVideoReferenceSlotInfoKHR extends Struct<VkVideoReferenceSlotInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PPICTURERESOURCE: number;
    static SIZEOF: number;
    static SLOTINDEX: number;
    static STYPE: number;
    static calloc(): VkVideoReferenceSlotInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoReferenceSlotInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoReferenceSlotInfoKHR;
    static create(paramarg0: number): VkVideoReferenceSlotInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoReferenceSlotInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoReferenceSlotInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoReferenceSlotInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npPictureResource(paramarg0: number): VkVideoPictureResourceInfoKHR;
    static npPictureResource(paramarg0: number, paramarg1: VkVideoPictureResourceInfoKHR): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nslotIndex(paramarg0: number): number;
    static nslotIndex(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoReferenceSlotInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoReferenceSlotInfoKHR;
    pNext(arg0: VkVideoDecodeAV1DpbSlotInfoKHR): VkVideoReferenceSlotInfoKHR;
    pNext(arg0: VkVideoDecodeH264DpbSlotInfoKHR): VkVideoReferenceSlotInfoKHR;
    pNext(arg0: VkVideoDecodeH265DpbSlotInfoKHR): VkVideoReferenceSlotInfoKHR;
    pNext(arg0: VkVideoEncodeAV1DpbSlotInfoKHR): VkVideoReferenceSlotInfoKHR;
    pNext(arg0: VkVideoEncodeH264DpbSlotInfoKHR): VkVideoReferenceSlotInfoKHR;
    pNext(arg0: VkVideoEncodeH265DpbSlotInfoKHR): VkVideoReferenceSlotInfoKHR;
    pNext(arg0: VkVideoReferenceIntraRefreshInfoKHR): VkVideoReferenceSlotInfoKHR;
    pPictureResource(): VkVideoPictureResourceInfoKHR;
    pPictureResource(arg0: VkVideoPictureResourceInfoKHR): VkVideoReferenceSlotInfoKHR;
    sType(): number;
    sType(arg0: number): VkVideoReferenceSlotInfoKHR;
    sType$Default(): VkVideoReferenceSlotInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: VkVideoPictureResourceInfoKHR): VkVideoReferenceSlotInfoKHR;
    set(arg0: VkVideoReferenceSlotInfoKHR): VkVideoReferenceSlotInfoKHR;
    sizeof(): number;
    slotIndex(): number;
    slotIndex(arg0: number): VkVideoReferenceSlotInfoKHR;
}