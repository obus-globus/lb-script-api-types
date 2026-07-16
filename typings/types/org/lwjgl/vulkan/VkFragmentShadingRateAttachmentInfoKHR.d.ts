import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkAttachmentReference2 } from '../../../org/lwjgl/vulkan/VkAttachmentReference2.d.ts'
import type { VkExtent2D } from '../../../org/lwjgl/vulkan/VkExtent2D.d.ts'
export class VkFragmentShadingRateAttachmentInfoKHR extends Struct<VkFragmentShadingRateAttachmentInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PFRAGMENTSHADINGRATEATTACHMENT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SHADINGRATEATTACHMENTTEXELSIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkFragmentShadingRateAttachmentInfoKHR;
    static calloc(paramarg0: MemoryStack): VkFragmentShadingRateAttachmentInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkFragmentShadingRateAttachmentInfoKHR;
    static create(paramarg0: number): VkFragmentShadingRateAttachmentInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkFragmentShadingRateAttachmentInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkFragmentShadingRateAttachmentInfoKHR;
    static malloc(paramarg0: MemoryStack): VkFragmentShadingRateAttachmentInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npFragmentShadingRateAttachment(paramarg0: number): VkAttachmentReference2;
    static npFragmentShadingRateAttachment(paramarg0: number, paramarg1: VkAttachmentReference2): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nshadingRateAttachmentTexelSize(paramarg0: number): VkExtent2D;
    static nshadingRateAttachmentTexelSize(paramarg0: number, paramarg1: VkExtent2D): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkFragmentShadingRateAttachmentInfoKHR;
    pFragmentShadingRateAttachment(): VkAttachmentReference2;
    pFragmentShadingRateAttachment(arg0: VkAttachmentReference2): VkFragmentShadingRateAttachmentInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkFragmentShadingRateAttachmentInfoKHR;
    sType(): number;
    sType(arg0: number): VkFragmentShadingRateAttachmentInfoKHR;
    sType$Default(): VkFragmentShadingRateAttachmentInfoKHR;
    set(arg0: number, arg1: number, arg2: VkAttachmentReference2, arg3: VkExtent2D): VkFragmentShadingRateAttachmentInfoKHR;
    set(arg0: VkFragmentShadingRateAttachmentInfoKHR): VkFragmentShadingRateAttachmentInfoKHR;
    shadingRateAttachmentTexelSize(): VkExtent2D;
    shadingRateAttachmentTexelSize(arg0: (param0: VkExtent2D) => void): VkFragmentShadingRateAttachmentInfoKHR;
    shadingRateAttachmentTexelSize(arg0: VkExtent2D): VkFragmentShadingRateAttachmentInfoKHR;
    sizeof(): number;
}