import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkRenderPassFragmentDensityMapCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkRenderPassFragmentDensityMapCreateInfoEXT.d.ts'
import type { VkRenderPassInputAttachmentAspectCreateInfo } from '../../../org/lwjgl/vulkan/VkRenderPassInputAttachmentAspectCreateInfo.d.ts'
import type { VkRenderPassInputAttachmentAspectCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkRenderPassInputAttachmentAspectCreateInfoKHR.d.ts'
import type { VkRenderPassMultiviewCreateInfo } from '../../../org/lwjgl/vulkan/VkRenderPassMultiviewCreateInfo.d.ts'
import type { VkRenderPassMultiviewCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkRenderPassMultiviewCreateInfoKHR.d.ts'
import type { VkRenderPassTileShadingCreateInfoQCOM } from '../../../org/lwjgl/vulkan/VkRenderPassTileShadingCreateInfoQCOM.d.ts'
import type { VkTileMemorySizeInfoQCOM } from '../../../org/lwjgl/vulkan/VkTileMemorySizeInfoQCOM.d.ts'
export class VkRenderPassCreateInfo extends Struct<VkRenderPassCreateInfo> implements NativeResource {
    static ALIGNOF: number;
    static ATTACHMENTCOUNT: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DEPENDENCYCOUNT: number;
    static FLAGS: number;
    static PATTACHMENTS: number;
    static PDEPENDENCIES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSUBPASSES: number;
    static SIZEOF: number;
    static STYPE: number;
    static SUBPASSCOUNT: number;
    static calloc(): VkRenderPassCreateInfo;
    static calloc(paramarg0: MemoryStack): VkRenderPassCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkRenderPassCreateInfo;
    static create(paramarg0: number): VkRenderPassCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkRenderPassCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkRenderPassCreateInfo;
    static malloc(paramarg0: MemoryStack): VkRenderPassCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nattachmentCount(paramarg0: number): number;
    static nattachmentCount(paramarg0: number, paramarg1: number): void;
    static ndependencyCount(paramarg0: number): number;
    static ndependencyCount(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npAttachments(paramarg0: number): (Object | null)[];
    static npAttachments(paramarg0: number, paramarg1: (Object | null)[]): void;
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
    attachmentCount(): number;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkRenderPassCreateInfo;
    dependencyCount(): number;
    flags(): number;
    flags(arg0: number): VkRenderPassCreateInfo;
    pAttachments(): (Object | null)[];
    pAttachments(arg0: (Object | null)[]): VkRenderPassCreateInfo;
    pDependencies(): (Object | null)[];
    pDependencies(arg0: (Object | null)[]): VkRenderPassCreateInfo;
    pNext(): number;
    pNext(arg0: number): VkRenderPassCreateInfo;
    pNext(arg0: VkRenderPassFragmentDensityMapCreateInfoEXT): VkRenderPassCreateInfo;
    pNext(arg0: VkRenderPassInputAttachmentAspectCreateInfo): VkRenderPassCreateInfo;
    pNext(arg0: VkRenderPassInputAttachmentAspectCreateInfoKHR): VkRenderPassCreateInfo;
    pNext(arg0: VkRenderPassMultiviewCreateInfo): VkRenderPassCreateInfo;
    pNext(arg0: VkRenderPassMultiviewCreateInfoKHR): VkRenderPassCreateInfo;
    pNext(arg0: VkRenderPassTileShadingCreateInfoQCOM): VkRenderPassCreateInfo;
    pNext(arg0: VkTileMemorySizeInfoQCOM): VkRenderPassCreateInfo;
    pSubpasses(): (Object | null)[];
    pSubpasses(arg0: (Object | null)[]): VkRenderPassCreateInfo;
    sType(): number;
    sType(arg0: number): VkRenderPassCreateInfo;
    sType$Default(): VkRenderPassCreateInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: (Object | null)[], arg4: (Object | null)[], arg5: (Object | null)[]): VkRenderPassCreateInfo;
    set(arg0: VkRenderPassCreateInfo): VkRenderPassCreateInfo;
    sizeof(): number;
    subpassCount(): number;
}