import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkAttachmentSampleCountInfoAMD } from '../../../org/lwjgl/vulkan/VkAttachmentSampleCountInfoAMD.d.ts'
import type { VkAttachmentSampleCountInfoNV } from '../../../org/lwjgl/vulkan/VkAttachmentSampleCountInfoNV.d.ts'
import type { VkCommandBufferInheritanceConditionalRenderingInfoEXT } from '../../../org/lwjgl/vulkan/VkCommandBufferInheritanceConditionalRenderingInfoEXT.d.ts'
import type { VkCommandBufferInheritanceDescriptorHeapInfoEXT } from '../../../org/lwjgl/vulkan/VkCommandBufferInheritanceDescriptorHeapInfoEXT.d.ts'
import type { VkCommandBufferInheritanceRenderPassTransformInfoQCOM } from '../../../org/lwjgl/vulkan/VkCommandBufferInheritanceRenderPassTransformInfoQCOM.d.ts'
import type { VkCommandBufferInheritanceRenderingInfo } from '../../../org/lwjgl/vulkan/VkCommandBufferInheritanceRenderingInfo.d.ts'
import type { VkCommandBufferInheritanceRenderingInfoKHR } from '../../../org/lwjgl/vulkan/VkCommandBufferInheritanceRenderingInfoKHR.d.ts'
import type { VkCommandBufferInheritanceViewportScissorInfoNV } from '../../../org/lwjgl/vulkan/VkCommandBufferInheritanceViewportScissorInfoNV.d.ts'
import type { VkCustomResolveCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkCustomResolveCreateInfoEXT.d.ts'
import type { VkExternalFormatANDROID } from '../../../org/lwjgl/vulkan/VkExternalFormatANDROID.d.ts'
import type { VkMultiviewPerViewAttributesInfoNVX } from '../../../org/lwjgl/vulkan/VkMultiviewPerViewAttributesInfoNVX.d.ts'
import type { VkRenderPassTileShadingCreateInfoQCOM } from '../../../org/lwjgl/vulkan/VkRenderPassTileShadingCreateInfoQCOM.d.ts'
import type { VkRenderingAttachmentLocationInfo } from '../../../org/lwjgl/vulkan/VkRenderingAttachmentLocationInfo.d.ts'
import type { VkRenderingAttachmentLocationInfoKHR } from '../../../org/lwjgl/vulkan/VkRenderingAttachmentLocationInfoKHR.d.ts'
import type { VkRenderingInputAttachmentIndexInfo } from '../../../org/lwjgl/vulkan/VkRenderingInputAttachmentIndexInfo.d.ts'
import type { VkRenderingInputAttachmentIndexInfoKHR } from '../../../org/lwjgl/vulkan/VkRenderingInputAttachmentIndexInfoKHR.d.ts'
import type { VkTileMemoryBindInfoQCOM } from '../../../org/lwjgl/vulkan/VkTileMemoryBindInfoQCOM.d.ts'
export class VkCommandBufferInheritanceInfo extends Struct<VkCommandBufferInheritanceInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FRAMEBUFFER: number;
    static OCCLUSIONQUERYENABLE: number;
    static PIPELINESTATISTICS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static QUERYFLAGS: number;
    static RENDERPASS: number;
    static SIZEOF: number;
    static STYPE: number;
    static SUBPASS: number;
    static calloc(): VkCommandBufferInheritanceInfo;
    static calloc(paramarg0: MemoryStack): VkCommandBufferInheritanceInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkCommandBufferInheritanceInfo;
    static create(paramarg0: number): VkCommandBufferInheritanceInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCommandBufferInheritanceInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkCommandBufferInheritanceInfo;
    static malloc(paramarg0: MemoryStack): VkCommandBufferInheritanceInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nframebuffer(paramarg0: number): number;
    static nframebuffer(paramarg0: number, paramarg1: number): void;
    static nocclusionQueryEnable(paramarg0: number): number;
    static nocclusionQueryEnable(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npipelineStatistics(paramarg0: number): number;
    static npipelineStatistics(paramarg0: number, paramarg1: number): void;
    static nqueryFlags(paramarg0: number): number;
    static nqueryFlags(paramarg0: number, paramarg1: number): void;
    static nrenderPass(paramarg0: number): number;
    static nrenderPass(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsubpass(paramarg0: number): number;
    static nsubpass(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkCommandBufferInheritanceInfo;
    framebuffer(): number;
    framebuffer(arg0: number): VkCommandBufferInheritanceInfo;
    occlusionQueryEnable(): boolean;
    occlusionQueryEnable(arg0: boolean): VkCommandBufferInheritanceInfo;
    pNext(): number;
    pNext(arg0: number): VkCommandBufferInheritanceInfo;
    pNext(arg0: VkAttachmentSampleCountInfoAMD): VkCommandBufferInheritanceInfo;
    pNext(arg0: VkAttachmentSampleCountInfoNV): VkCommandBufferInheritanceInfo;
    pNext(arg0: VkCommandBufferInheritanceConditionalRenderingInfoEXT): VkCommandBufferInheritanceInfo;
    pNext(arg0: VkCommandBufferInheritanceDescriptorHeapInfoEXT): VkCommandBufferInheritanceInfo;
    pNext(arg0: VkCommandBufferInheritanceRenderPassTransformInfoQCOM): VkCommandBufferInheritanceInfo;
    pNext(arg0: VkCommandBufferInheritanceRenderingInfo): VkCommandBufferInheritanceInfo;
    pNext(arg0: VkCommandBufferInheritanceRenderingInfoKHR): VkCommandBufferInheritanceInfo;
    pNext(arg0: VkCommandBufferInheritanceViewportScissorInfoNV): VkCommandBufferInheritanceInfo;
    pNext(arg0: VkCustomResolveCreateInfoEXT): VkCommandBufferInheritanceInfo;
    pNext(arg0: VkExternalFormatANDROID): VkCommandBufferInheritanceInfo;
    pNext(arg0: VkMultiviewPerViewAttributesInfoNVX): VkCommandBufferInheritanceInfo;
    pNext(arg0: VkRenderPassTileShadingCreateInfoQCOM): VkCommandBufferInheritanceInfo;
    pNext(arg0: VkRenderingAttachmentLocationInfo): VkCommandBufferInheritanceInfo;
    pNext(arg0: VkRenderingAttachmentLocationInfoKHR): VkCommandBufferInheritanceInfo;
    pNext(arg0: VkRenderingInputAttachmentIndexInfo): VkCommandBufferInheritanceInfo;
    pNext(arg0: VkRenderingInputAttachmentIndexInfoKHR): VkCommandBufferInheritanceInfo;
    pNext(arg0: VkTileMemoryBindInfoQCOM): VkCommandBufferInheritanceInfo;
    pipelineStatistics(): number;
    pipelineStatistics(arg0: number): VkCommandBufferInheritanceInfo;
    queryFlags(): number;
    queryFlags(arg0: number): VkCommandBufferInheritanceInfo;
    renderPass(): number;
    renderPass(arg0: number): VkCommandBufferInheritanceInfo;
    sType(): number;
    sType(arg0: number): VkCommandBufferInheritanceInfo;
    sType$Default(): VkCommandBufferInheritanceInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: number, arg7: number): VkCommandBufferInheritanceInfo;
    set(arg0: VkCommandBufferInheritanceInfo): VkCommandBufferInheritanceInfo;
    sizeof(): number;
    subpass(): number;
    subpass(arg0: number): VkCommandBufferInheritanceInfo;
}