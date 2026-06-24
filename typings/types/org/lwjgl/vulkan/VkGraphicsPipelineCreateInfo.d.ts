import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkAttachmentSampleCountInfoAMD } from '../../../org/lwjgl/vulkan/VkAttachmentSampleCountInfoAMD.d.ts'
import type { VkAttachmentSampleCountInfoNV } from '../../../org/lwjgl/vulkan/VkAttachmentSampleCountInfoNV.d.ts'
import type { VkCustomResolveCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkCustomResolveCreateInfoEXT.d.ts'
import type { VkExternalFormatANDROID } from '../../../org/lwjgl/vulkan/VkExternalFormatANDROID.d.ts'
import type { VkGraphicsPipelineLibraryCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkGraphicsPipelineLibraryCreateInfoEXT.d.ts'
import type { VkGraphicsPipelineShaderGroupsCreateInfoNV } from '../../../org/lwjgl/vulkan/VkGraphicsPipelineShaderGroupsCreateInfoNV.d.ts'
import type { VkMultiviewPerViewAttributesInfoNVX } from '../../../org/lwjgl/vulkan/VkMultiviewPerViewAttributesInfoNVX.d.ts'
import type { VkPipelineBinaryInfoKHR } from '../../../org/lwjgl/vulkan/VkPipelineBinaryInfoKHR.d.ts'
import type { VkPipelineColorBlendStateCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineColorBlendStateCreateInfo.d.ts'
import type { VkPipelineCompilerControlCreateInfoAMD } from '../../../org/lwjgl/vulkan/VkPipelineCompilerControlCreateInfoAMD.d.ts'
import type { VkPipelineCreateFlags2CreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineCreateFlags2CreateInfo.d.ts'
import type { VkPipelineCreateFlags2CreateInfoKHR } from '../../../org/lwjgl/vulkan/VkPipelineCreateFlags2CreateInfoKHR.d.ts'
import type { VkPipelineCreationFeedbackCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineCreationFeedbackCreateInfo.d.ts'
import type { VkPipelineCreationFeedbackCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkPipelineCreationFeedbackCreateInfoEXT.d.ts'
import type { VkPipelineDepthStencilStateCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineDepthStencilStateCreateInfo.d.ts'
import type { VkPipelineDiscardRectangleStateCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkPipelineDiscardRectangleStateCreateInfoEXT.d.ts'
import type { VkPipelineDynamicStateCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineDynamicStateCreateInfo.d.ts'
import type { VkPipelineFragmentDensityMapLayeredCreateInfoVALVE } from '../../../org/lwjgl/vulkan/VkPipelineFragmentDensityMapLayeredCreateInfoVALVE.d.ts'
import type { VkPipelineFragmentShadingRateEnumStateCreateInfoNV } from '../../../org/lwjgl/vulkan/VkPipelineFragmentShadingRateEnumStateCreateInfoNV.d.ts'
import type { VkPipelineFragmentShadingRateStateCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkPipelineFragmentShadingRateStateCreateInfoKHR.d.ts'
import type { VkPipelineInputAssemblyStateCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineInputAssemblyStateCreateInfo.d.ts'
import type { VkPipelineLibraryCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkPipelineLibraryCreateInfoKHR.d.ts'
import type { VkPipelineMultisampleStateCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineMultisampleStateCreateInfo.d.ts'
import type { VkPipelineRasterizationStateCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineRasterizationStateCreateInfo.d.ts'
import type { VkPipelineRenderingCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineRenderingCreateInfo.d.ts'
import type { VkPipelineRenderingCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkPipelineRenderingCreateInfoKHR.d.ts'
import type { VkPipelineRepresentativeFragmentTestStateCreateInfoNV } from '../../../org/lwjgl/vulkan/VkPipelineRepresentativeFragmentTestStateCreateInfoNV.d.ts'
import type { VkPipelineRobustnessCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineRobustnessCreateInfo.d.ts'
import type { VkPipelineRobustnessCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkPipelineRobustnessCreateInfoEXT.d.ts'
import type { VkPipelineTessellationStateCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineTessellationStateCreateInfo.d.ts'
import type { VkPipelineVertexInputStateCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineVertexInputStateCreateInfo.d.ts'
import type { VkPipelineViewportStateCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineViewportStateCreateInfo.d.ts'
import type { VkRenderingAttachmentLocationInfo } from '../../../org/lwjgl/vulkan/VkRenderingAttachmentLocationInfo.d.ts'
import type { VkRenderingAttachmentLocationInfoKHR } from '../../../org/lwjgl/vulkan/VkRenderingAttachmentLocationInfoKHR.d.ts'
import type { VkRenderingInputAttachmentIndexInfo } from '../../../org/lwjgl/vulkan/VkRenderingInputAttachmentIndexInfo.d.ts'
import type { VkRenderingInputAttachmentIndexInfoKHR } from '../../../org/lwjgl/vulkan/VkRenderingInputAttachmentIndexInfoKHR.d.ts'
export class VkGraphicsPipelineCreateInfo extends Struct<VkGraphicsPipelineCreateInfo> implements NativeResource {
    static ALIGNOF: number;
    static BASEPIPELINEHANDLE: number;
    static BASEPIPELINEINDEX: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static LAYOUT: number;
    static PCOLORBLENDSTATE: number;
    static PDEPTHSTENCILSTATE: number;
    static PDYNAMICSTATE: number;
    static PINPUTASSEMBLYSTATE: number;
    static PMULTISAMPLESTATE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PRASTERIZATIONSTATE: number;
    static PSTAGES: number;
    static PTESSELLATIONSTATE: number;
    static PVERTEXINPUTSTATE: number;
    static PVIEWPORTSTATE: number;
    static RENDERPASS: number;
    static SIZEOF: number;
    static STAGECOUNT: number;
    static STYPE: number;
    static SUBPASS: number;
    static calloc(): VkGraphicsPipelineCreateInfo;
    static calloc(paramarg0: MemoryStack): VkGraphicsPipelineCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkGraphicsPipelineCreateInfo;
    static create(paramarg0: number): VkGraphicsPipelineCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkGraphicsPipelineCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkGraphicsPipelineCreateInfo;
    static malloc(paramarg0: MemoryStack): VkGraphicsPipelineCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbasePipelineHandle(paramarg0: number): number;
    static nbasePipelineHandle(paramarg0: number, paramarg1: number): void;
    static nbasePipelineIndex(paramarg0: number): number;
    static nbasePipelineIndex(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nlayout(paramarg0: number): number;
    static nlayout(paramarg0: number, paramarg1: number): void;
    static npColorBlendState(paramarg0: number): VkPipelineColorBlendStateCreateInfo;
    static npColorBlendState(paramarg0: number, paramarg1: VkPipelineColorBlendStateCreateInfo): void;
    static npDepthStencilState(paramarg0: number): VkPipelineDepthStencilStateCreateInfo;
    static npDepthStencilState(paramarg0: number, paramarg1: VkPipelineDepthStencilStateCreateInfo): void;
    static npDynamicState(paramarg0: number): VkPipelineDynamicStateCreateInfo;
    static npDynamicState(paramarg0: number, paramarg1: VkPipelineDynamicStateCreateInfo): void;
    static npInputAssemblyState(paramarg0: number): VkPipelineInputAssemblyStateCreateInfo;
    static npInputAssemblyState(paramarg0: number, paramarg1: VkPipelineInputAssemblyStateCreateInfo): void;
    static npMultisampleState(paramarg0: number): VkPipelineMultisampleStateCreateInfo;
    static npMultisampleState(paramarg0: number, paramarg1: VkPipelineMultisampleStateCreateInfo): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npRasterizationState(paramarg0: number): VkPipelineRasterizationStateCreateInfo;
    static npRasterizationState(paramarg0: number, paramarg1: VkPipelineRasterizationStateCreateInfo): void;
    static npStages(paramarg0: number): (Object | null)[];
    static npStages(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npTessellationState(paramarg0: number): VkPipelineTessellationStateCreateInfo;
    static npTessellationState(paramarg0: number, paramarg1: VkPipelineTessellationStateCreateInfo): void;
    static npVertexInputState(paramarg0: number): VkPipelineVertexInputStateCreateInfo;
    static npVertexInputState(paramarg0: number, paramarg1: VkPipelineVertexInputStateCreateInfo): void;
    static npViewportState(paramarg0: number): VkPipelineViewportStateCreateInfo;
    static npViewportState(paramarg0: number, paramarg1: VkPipelineViewportStateCreateInfo): void;
    static nrenderPass(paramarg0: number): number;
    static nrenderPass(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nstageCount(paramarg0: number): number;
    static nstageCount(paramarg0: number, paramarg1: number): void;
    static nsubpass(paramarg0: number): number;
    static nsubpass(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    basePipelineHandle(): number;
    basePipelineHandle(arg0: number): VkGraphicsPipelineCreateInfo;
    basePipelineIndex(): number;
    basePipelineIndex(arg0: number): VkGraphicsPipelineCreateInfo;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkGraphicsPipelineCreateInfo;
    flags(): number;
    flags(arg0: number): VkGraphicsPipelineCreateInfo;
    layout(): number;
    layout(arg0: number): VkGraphicsPipelineCreateInfo;
    pColorBlendState(): VkPipelineColorBlendStateCreateInfo;
    pColorBlendState(arg0: VkPipelineColorBlendStateCreateInfo): VkGraphicsPipelineCreateInfo;
    pDepthStencilState(): VkPipelineDepthStencilStateCreateInfo;
    pDepthStencilState(arg0: VkPipelineDepthStencilStateCreateInfo): VkGraphicsPipelineCreateInfo;
    pDynamicState(): VkPipelineDynamicStateCreateInfo;
    pDynamicState(arg0: VkPipelineDynamicStateCreateInfo): VkGraphicsPipelineCreateInfo;
    pInputAssemblyState(): VkPipelineInputAssemblyStateCreateInfo;
    pInputAssemblyState(arg0: VkPipelineInputAssemblyStateCreateInfo): VkGraphicsPipelineCreateInfo;
    pMultisampleState(): VkPipelineMultisampleStateCreateInfo;
    pMultisampleState(arg0: VkPipelineMultisampleStateCreateInfo): VkGraphicsPipelineCreateInfo;
    pNext(): number;
    pNext(arg0: number): VkGraphicsPipelineCreateInfo;
    pNext(arg0: VkAttachmentSampleCountInfoAMD): VkGraphicsPipelineCreateInfo;
    pNext(arg0: VkAttachmentSampleCountInfoNV): VkGraphicsPipelineCreateInfo;
    pNext(arg0: VkCustomResolveCreateInfoEXT): VkGraphicsPipelineCreateInfo;
    pNext(arg0: VkExternalFormatANDROID): VkGraphicsPipelineCreateInfo;
    pNext(arg0: VkGraphicsPipelineLibraryCreateInfoEXT): VkGraphicsPipelineCreateInfo;
    pNext(arg0: VkGraphicsPipelineShaderGroupsCreateInfoNV): VkGraphicsPipelineCreateInfo;
    pNext(arg0: VkMultiviewPerViewAttributesInfoNVX): VkGraphicsPipelineCreateInfo;
    pNext(arg0: VkPipelineBinaryInfoKHR): VkGraphicsPipelineCreateInfo;
    pNext(arg0: VkPipelineCompilerControlCreateInfoAMD): VkGraphicsPipelineCreateInfo;
    pNext(arg0: VkPipelineCreateFlags2CreateInfo): VkGraphicsPipelineCreateInfo;
    pNext(arg0: VkPipelineCreateFlags2CreateInfoKHR): VkGraphicsPipelineCreateInfo;
    pNext(arg0: VkPipelineCreationFeedbackCreateInfo): VkGraphicsPipelineCreateInfo;
    pNext(arg0: VkPipelineCreationFeedbackCreateInfoEXT): VkGraphicsPipelineCreateInfo;
    pNext(arg0: VkPipelineDiscardRectangleStateCreateInfoEXT): VkGraphicsPipelineCreateInfo;
    pNext(arg0: VkPipelineFragmentDensityMapLayeredCreateInfoVALVE): VkGraphicsPipelineCreateInfo;
    pNext(arg0: VkPipelineFragmentShadingRateEnumStateCreateInfoNV): VkGraphicsPipelineCreateInfo;
    pNext(arg0: VkPipelineFragmentShadingRateStateCreateInfoKHR): VkGraphicsPipelineCreateInfo;
    pNext(arg0: VkPipelineLibraryCreateInfoKHR): VkGraphicsPipelineCreateInfo;
    pNext(arg0: VkPipelineRenderingCreateInfo): VkGraphicsPipelineCreateInfo;
    pNext(arg0: VkPipelineRenderingCreateInfoKHR): VkGraphicsPipelineCreateInfo;
    pNext(arg0: VkPipelineRepresentativeFragmentTestStateCreateInfoNV): VkGraphicsPipelineCreateInfo;
    pNext(arg0: VkPipelineRobustnessCreateInfo): VkGraphicsPipelineCreateInfo;
    pNext(arg0: VkPipelineRobustnessCreateInfoEXT): VkGraphicsPipelineCreateInfo;
    pNext(arg0: VkRenderingAttachmentLocationInfo): VkGraphicsPipelineCreateInfo;
    pNext(arg0: VkRenderingAttachmentLocationInfoKHR): VkGraphicsPipelineCreateInfo;
    pNext(arg0: VkRenderingInputAttachmentIndexInfo): VkGraphicsPipelineCreateInfo;
    pNext(arg0: VkRenderingInputAttachmentIndexInfoKHR): VkGraphicsPipelineCreateInfo;
    pRasterizationState(): VkPipelineRasterizationStateCreateInfo;
    pRasterizationState(arg0: VkPipelineRasterizationStateCreateInfo): VkGraphicsPipelineCreateInfo;
    pStages(): (Object | null)[];
    pStages(arg0: (Object | null)[]): VkGraphicsPipelineCreateInfo;
    pTessellationState(): VkPipelineTessellationStateCreateInfo;
    pTessellationState(arg0: VkPipelineTessellationStateCreateInfo): VkGraphicsPipelineCreateInfo;
    pVertexInputState(): VkPipelineVertexInputStateCreateInfo;
    pVertexInputState(arg0: VkPipelineVertexInputStateCreateInfo): VkGraphicsPipelineCreateInfo;
    pViewportState(): VkPipelineViewportStateCreateInfo;
    pViewportState(arg0: VkPipelineViewportStateCreateInfo): VkGraphicsPipelineCreateInfo;
    renderPass(): number;
    renderPass(arg0: number): VkGraphicsPipelineCreateInfo;
    sType(): number;
    sType(arg0: number): VkGraphicsPipelineCreateInfo;
    sType$Default(): VkGraphicsPipelineCreateInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: (Object | null)[], arg5: VkPipelineVertexInputStateCreateInfo, arg6: VkPipelineInputAssemblyStateCreateInfo, arg7: VkPipelineTessellationStateCreateInfo, arg8: VkPipelineViewportStateCreateInfo, arg9: VkPipelineRasterizationStateCreateInfo, arg10: VkPipelineMultisampleStateCreateInfo, arg11: VkPipelineDepthStencilStateCreateInfo, arg12: VkPipelineColorBlendStateCreateInfo, arg13: VkPipelineDynamicStateCreateInfo, arg14: number, arg15: number, arg16: number, arg17: number, arg18: number): VkGraphicsPipelineCreateInfo;
    set(arg0: VkGraphicsPipelineCreateInfo): VkGraphicsPipelineCreateInfo;
    sizeof(): number;
    stageCount(): number;
    stageCount(arg0: number): VkGraphicsPipelineCreateInfo;
    subpass(): number;
    subpass(arg0: number): VkGraphicsPipelineCreateInfo;
}