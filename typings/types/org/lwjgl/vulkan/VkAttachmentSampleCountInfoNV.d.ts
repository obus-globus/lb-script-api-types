import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkAttachmentSampleCountInfoAMD } from '../../../org/lwjgl/vulkan/VkAttachmentSampleCountInfoAMD.d.ts'
export class VkAttachmentSampleCountInfoNV extends VkAttachmentSampleCountInfoAMD {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COLORATTACHMENTCOUNT: number;
    static DEPTHSTENCILATTACHMENTSAMPLES: number;
    static PCOLORATTACHMENTSAMPLES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkAttachmentSampleCountInfoAMD;
    static calloc(paramarg0: MemoryStack): VkAttachmentSampleCountInfoAMD;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkAttachmentSampleCountInfoNV;
    static calloc(paramarg0: MemoryStack): VkAttachmentSampleCountInfoNV;
    static create(): VkAttachmentSampleCountInfoAMD;
    static create(paramarg0: number): VkAttachmentSampleCountInfoAMD;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkAttachmentSampleCountInfoNV;
    static create(paramarg0: number): VkAttachmentSampleCountInfoNV;
    static createSafe(paramarg0: number): VkAttachmentSampleCountInfoAMD;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkAttachmentSampleCountInfoNV;
    static malloc(): VkAttachmentSampleCountInfoAMD;
    static malloc(paramarg0: MemoryStack): VkAttachmentSampleCountInfoAMD;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkAttachmentSampleCountInfoNV;
    static malloc(paramarg0: MemoryStack): VkAttachmentSampleCountInfoNV;
    static ncolorAttachmentCount(paramarg0: number): number;
    static ncolorAttachmentCount(paramarg0: number, paramarg1: number): void;
    static ndepthStencilAttachmentSamples(paramarg0: number): number;
    static ndepthStencilAttachmentSamples(paramarg0: number, paramarg1: number): void;
    static npColorAttachmentSamples(paramarg0: number): IntBuffer;
    static npColorAttachmentSamples(paramarg0: number, paramarg1: IntBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    colorAttachmentCount(): number;
    colorAttachmentCount(arg0: number): VkAttachmentSampleCountInfoNV;
    create(arg0: number, arg1: ByteBuffer): VkAttachmentSampleCountInfoNV;
    depthStencilAttachmentSamples(): number;
    depthStencilAttachmentSamples(arg0: number): VkAttachmentSampleCountInfoNV;
    pColorAttachmentSamples(): IntBuffer;
    pColorAttachmentSamples(arg0: IntBuffer): VkAttachmentSampleCountInfoNV;
    pNext(): number;
    pNext(arg0: number): VkAttachmentSampleCountInfoNV;
    sType(): number;
    sType(arg0: number): VkAttachmentSampleCountInfoNV;
    sType$Default(): VkAttachmentSampleCountInfoNV;
    set(arg0: number, arg1: number, arg2: number, arg3: IntBuffer, arg4: number): VkAttachmentSampleCountInfoNV;
    set(arg0: VkAttachmentSampleCountInfoAMD): VkAttachmentSampleCountInfoAMD;
    set(arg0: VkAttachmentSampleCountInfoNV): VkAttachmentSampleCountInfoNV;
}