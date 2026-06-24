import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkRenderPassCreateInfo2 } from '../../../org/lwjgl/vulkan/VkRenderPassCreateInfo2.d.ts'
import type { VkRenderPassCreationControlEXT } from '../../../org/lwjgl/vulkan/VkRenderPassCreationControlEXT.d.ts'
import type { VkRenderPassCreationFeedbackCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkRenderPassCreationFeedbackCreateInfoEXT.d.ts'
import type { VkRenderPassFragmentDensityMapCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkRenderPassFragmentDensityMapCreateInfoEXT.d.ts'
import type { VkRenderPassTileShadingCreateInfoQCOM } from '../../../org/lwjgl/vulkan/VkRenderPassTileShadingCreateInfoQCOM.d.ts'
import type { VkTileMemorySizeInfoQCOM } from '../../../org/lwjgl/vulkan/VkTileMemorySizeInfoQCOM.d.ts'
export class VkRenderPassCreateInfo2KHR extends VkRenderPassCreateInfo2 {
    static ALIGNOF: number;
    static ATTACHMENTCOUNT: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CORRELATEDVIEWMASKCOUNT: number;
    static DEPENDENCYCOUNT: number;
    static FLAGS: number;
    static PATTACHMENTS: number;
    static PCORRELATEDVIEWMASKS: number;
    static PDEPENDENCIES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSUBPASSES: number;
    static SIZEOF: number;
    static STYPE: number;
    static SUBPASSCOUNT: number;
    static calloc(): VkRenderPassCreateInfo2;
    static calloc(paramarg0: MemoryStack): VkRenderPassCreateInfo2;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkRenderPassCreateInfo2KHR;
    static calloc(paramarg0: MemoryStack): VkRenderPassCreateInfo2KHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkRenderPassCreateInfo2;
    static create(paramarg0: number): VkRenderPassCreateInfo2;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkRenderPassCreateInfo2KHR;
    static create(paramarg0: number): VkRenderPassCreateInfo2KHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkRenderPassCreateInfo2;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkRenderPassCreateInfo2KHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkRenderPassCreateInfo2;
    static malloc(paramarg0: MemoryStack): VkRenderPassCreateInfo2;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkRenderPassCreateInfo2KHR;
    static malloc(paramarg0: MemoryStack): VkRenderPassCreateInfo2KHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nattachmentCount(paramarg0: number): number;
    static nattachmentCount(paramarg0: number, paramarg1: number): void;
    static ncorrelatedViewMaskCount(paramarg0: number): number;
    static ncorrelatedViewMaskCount(paramarg0: number, paramarg1: number): void;
    static ndependencyCount(paramarg0: number): number;
    static ndependencyCount(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npAttachments(paramarg0: number): (Object | null)[];
    static npAttachments(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npCorrelatedViewMasks(paramarg0: number): IntBuffer;
    static npCorrelatedViewMasks(paramarg0: number, paramarg1: IntBuffer): void;
    static npDependencies(paramarg0: number): (Object | null)[];
    static npDependencies(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npSubpasses(paramarg0: number): (Object | null)[];
    static npSubpasses(paramarg0: number, paramarg1: (Object | null)[]): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsubpassCount(paramarg0: number): number;
    static nsubpassCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkRenderPassCreateInfo2KHR;
    flags(): number;
    flags(arg0: number): VkRenderPassCreateInfo2KHR;
    pAttachments(): (Object | null)[];
    pAttachments(arg0: (Object | null)[]): VkRenderPassCreateInfo2KHR;
    pCorrelatedViewMasks(): IntBuffer;
    pCorrelatedViewMasks(arg0: IntBuffer): VkRenderPassCreateInfo2KHR;
    pDependencies(): (Object | null)[];
    pDependencies(arg0: (Object | null)[]): VkRenderPassCreateInfo2KHR;
    pNext(): number;
    pNext(arg0: number): VkRenderPassCreateInfo2KHR;
    pNext(arg0: VkRenderPassCreationControlEXT): VkRenderPassCreateInfo2;
    pNext(arg0: VkRenderPassCreationFeedbackCreateInfoEXT): VkRenderPassCreateInfo2;
    pNext(arg0: VkRenderPassFragmentDensityMapCreateInfoEXT): VkRenderPassCreateInfo2;
    pNext(arg0: VkRenderPassTileShadingCreateInfoQCOM): VkRenderPassCreateInfo2;
    pNext(arg0: VkTileMemorySizeInfoQCOM): VkRenderPassCreateInfo2;
    pSubpasses(): (Object | null)[];
    pSubpasses(arg0: (Object | null)[]): VkRenderPassCreateInfo2KHR;
    sType(): number;
    sType(arg0: number): VkRenderPassCreateInfo2KHR;
    sType$Default(): VkRenderPassCreateInfo2KHR;
    set(arg0: number, arg1: number, arg2: number, arg3: (Object | null)[], arg4: (Object | null)[], arg5: (Object | null)[], arg6: IntBuffer): VkRenderPassCreateInfo2KHR;
    set(arg0: VkRenderPassCreateInfo2): VkRenderPassCreateInfo2;
    set(arg0: VkRenderPassCreateInfo2KHR): VkRenderPassCreateInfo2KHR;
}