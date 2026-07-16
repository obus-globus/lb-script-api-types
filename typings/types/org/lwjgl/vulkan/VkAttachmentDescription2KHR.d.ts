import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkAttachmentDescription2 } from '../../../org/lwjgl/vulkan/VkAttachmentDescription2.d.ts'
import type { VkAttachmentDescriptionStencilLayout } from '../../../org/lwjgl/vulkan/VkAttachmentDescriptionStencilLayout.d.ts'
import type { VkAttachmentDescriptionStencilLayoutKHR } from '../../../org/lwjgl/vulkan/VkAttachmentDescriptionStencilLayoutKHR.d.ts'
import type { VkExternalFormatANDROID } from '../../../org/lwjgl/vulkan/VkExternalFormatANDROID.d.ts'
export class VkAttachmentDescription2KHR extends VkAttachmentDescription2 {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FINALLAYOUT: number;
    static FLAGS: number;
    static FORMAT: number;
    static INITIALLAYOUT: number;
    static LOADOP: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SAMPLES: number;
    static SIZEOF: number;
    static STENCILLOADOP: number;
    static STENCILSTOREOP: number;
    static STOREOP: number;
    static STYPE: number;
    static calloc(): VkAttachmentDescription2;
    static calloc(paramarg0: MemoryStack): VkAttachmentDescription2;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkAttachmentDescription2KHR;
    static calloc(paramarg0: MemoryStack): VkAttachmentDescription2KHR;
    static create(): VkAttachmentDescription2;
    static create(paramarg0: number): VkAttachmentDescription2;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkAttachmentDescription2KHR;
    static create(paramarg0: number): VkAttachmentDescription2KHR;
    static createSafe(paramarg0: number): VkAttachmentDescription2;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkAttachmentDescription2KHR;
    static malloc(): VkAttachmentDescription2;
    static malloc(paramarg0: MemoryStack): VkAttachmentDescription2;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkAttachmentDescription2KHR;
    static malloc(paramarg0: MemoryStack): VkAttachmentDescription2KHR;
    static nfinalLayout(paramarg0: number): number;
    static nfinalLayout(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nformat(paramarg0: number): number;
    static nformat(paramarg0: number, paramarg1: number): void;
    static ninitialLayout(paramarg0: number): number;
    static ninitialLayout(paramarg0: number, paramarg1: number): void;
    static nloadOp(paramarg0: number): number;
    static nloadOp(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsamples(paramarg0: number): number;
    static nsamples(paramarg0: number, paramarg1: number): void;
    static nstencilLoadOp(paramarg0: number): number;
    static nstencilLoadOp(paramarg0: number, paramarg1: number): void;
    static nstencilStoreOp(paramarg0: number): number;
    static nstencilStoreOp(paramarg0: number, paramarg1: number): void;
    static nstoreOp(paramarg0: number): number;
    static nstoreOp(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkAttachmentDescription2KHR;
    finalLayout(): number;
    finalLayout(arg0: number): VkAttachmentDescription2KHR;
    flags(): number;
    flags(arg0: number): VkAttachmentDescription2KHR;
    format(): number;
    format(arg0: number): VkAttachmentDescription2KHR;
    initialLayout(): number;
    initialLayout(arg0: number): VkAttachmentDescription2KHR;
    loadOp(): number;
    loadOp(arg0: number): VkAttachmentDescription2KHR;
    pNext(): number;
    pNext(arg0: number): VkAttachmentDescription2KHR;
    pNext(arg0: VkAttachmentDescriptionStencilLayout): VkAttachmentDescription2;
    pNext(arg0: VkAttachmentDescriptionStencilLayoutKHR): VkAttachmentDescription2;
    pNext(arg0: VkExternalFormatANDROID): VkAttachmentDescription2;
    sType(): number;
    sType(arg0: number): VkAttachmentDescription2KHR;
    sType$Default(): VkAttachmentDescription2KHR;
    samples(): number;
    samples(arg0: number): VkAttachmentDescription2KHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): VkAttachmentDescription2KHR;
    set(arg0: VkAttachmentDescription2): VkAttachmentDescription2;
    set(arg0: VkAttachmentDescription2KHR): VkAttachmentDescription2KHR;
    stencilLoadOp(): number;
    stencilLoadOp(arg0: number): VkAttachmentDescription2KHR;
    stencilStoreOp(): number;
    stencilStoreOp(arg0: number): VkAttachmentDescription2KHR;
    storeOp(): number;
    storeOp(arg0: number): VkAttachmentDescription2KHR;
}