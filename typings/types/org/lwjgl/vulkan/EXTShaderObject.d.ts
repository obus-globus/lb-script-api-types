import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkDepthClampRangeEXT } from '../../../org/lwjgl/vulkan/VkDepthClampRangeEXT.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
export class EXTShaderObject extends Object {
    static VK_DEPTH_CLAMP_MODE_USER_DEFINED_RANGE_EXT: number;
    static VK_DEPTH_CLAMP_MODE_VIEWPORT_RANGE_EXT: number;
    static VK_ERROR_INCOMPATIBLE_SHADER_BINARY_EXT: number;
    static VK_EXT_SHADER_OBJECT_EXTENSION_NAME: string;
    static VK_EXT_SHADER_OBJECT_SPEC_VERSION: number;
    static VK_INCOMPATIBLE_SHADER_BINARY_EXT: number;
    static VK_OBJECT_TYPE_SHADER_EXT: number;
    static VK_SHADER_CODE_TYPE_BINARY_EXT: number;
    static VK_SHADER_CODE_TYPE_SPIRV_EXT: number;
    static VK_SHADER_CREATE_ALLOW_VARYING_SUBGROUP_SIZE_BIT_EXT: number;
    static VK_SHADER_CREATE_DISPATCH_BASE_BIT_EXT: number;
    static VK_SHADER_CREATE_FRAGMENT_DENSITY_MAP_ATTACHMENT_BIT_EXT: number;
    static VK_SHADER_CREATE_FRAGMENT_SHADING_RATE_ATTACHMENT_BIT_EXT: number;
    static VK_SHADER_CREATE_LINK_STAGE_BIT_EXT: number;
    static VK_SHADER_CREATE_NO_TASK_SHADER_BIT_EXT: number;
    static VK_SHADER_CREATE_REQUIRE_FULL_SUBGROUPS_BIT_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_SHADER_OBJECT_FEATURES_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_SHADER_OBJECT_PROPERTIES_EXT: number;
    static VK_STRUCTURE_TYPE_SHADER_CREATE_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_SHADER_REQUIRED_SUBGROUP_SIZE_CREATE_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_VERTEX_INPUT_ATTRIBUTE_DESCRIPTION_2_EXT: number;
    static VK_STRUCTURE_TYPE_VERTEX_INPUT_BINDING_DESCRIPTION_2_EXT: number;
    static nvkCmdBindShadersEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nvkCmdBindVertexBuffers2EXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    static nvkCmdSetColorBlendAdvancedEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nvkCmdSetColorBlendEnableEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nvkCmdSetColorBlendEquationEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nvkCmdSetColorWriteMaskEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nvkCmdSetCoverageModulationTableNV(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number): void;
    static nvkCmdSetDepthClampRangeEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number): void;
    static nvkCmdSetSampleMaskEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number): void;
    static nvkCmdSetScissorWithCountEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number): void;
    static nvkCmdSetVertexInputEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nvkCmdSetViewportSwizzleNV(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nvkCmdSetViewportWithCountEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number): void;
    static nvkCreateShadersEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nvkDestroyShaderEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static nvkGetShaderBinaryDataEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static vkCmdBindShadersEXT(paramarg0: VkCommandBuffer, paramarg1: number[], paramarg2: number[]): void;
    static vkCmdBindShadersEXT(paramarg0: VkCommandBuffer, paramarg1: IntBuffer, paramarg2: LongBuffer): void;
    static vkCmdBindVertexBuffers2EXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: LongBuffer, paramarg3: LongBuffer, paramarg4: LongBuffer, paramarg5: LongBuffer): void;
    static vkCmdBindVertexBuffers2EXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number[], paramarg3: number[], paramarg4: number[], paramarg5: number[]): void;
    static vkCmdSetAlphaToCoverageEnableEXT(paramarg0: VkCommandBuffer, paramarg1: boolean): void;
    static vkCmdSetAlphaToOneEnableEXT(paramarg0: VkCommandBuffer, paramarg1: boolean): void;
    static vkCmdSetColorBlendAdvancedEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: (Object | null)[]): void;
    static vkCmdSetColorBlendEnableEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number[]): void;
    static vkCmdSetColorBlendEnableEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: IntBuffer): void;
    static vkCmdSetColorBlendEquationEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: (Object | null)[]): void;
    static vkCmdSetColorWriteMaskEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number[]): void;
    static vkCmdSetColorWriteMaskEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: IntBuffer): void;
    static vkCmdSetConservativeRasterizationModeEXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdSetCoverageModulationModeNV(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdSetCoverageModulationTableEnableNV(paramarg0: VkCommandBuffer, paramarg1: boolean): void;
    static vkCmdSetCoverageModulationTableNV(paramarg0: VkCommandBuffer, paramarg1: number[]): void;
    static vkCmdSetCoverageModulationTableNV(paramarg0: VkCommandBuffer, paramarg1: FloatBuffer): void;
    static vkCmdSetCoverageReductionModeNV(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdSetCoverageToColorEnableNV(paramarg0: VkCommandBuffer, paramarg1: boolean): void;
    static vkCmdSetCoverageToColorLocationNV(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdSetCullModeEXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdSetDepthBiasEnableEXT(paramarg0: VkCommandBuffer, paramarg1: boolean): void;
    static vkCmdSetDepthBoundsTestEnableEXT(paramarg0: VkCommandBuffer, paramarg1: boolean): void;
    static vkCmdSetDepthClampEnableEXT(paramarg0: VkCommandBuffer, paramarg1: boolean): void;
    static vkCmdSetDepthClampRangeEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: VkDepthClampRangeEXT): void;
    static vkCmdSetDepthClipEnableEXT(paramarg0: VkCommandBuffer, paramarg1: boolean): void;
    static vkCmdSetDepthClipNegativeOneToOneEXT(paramarg0: VkCommandBuffer, paramarg1: boolean): void;
    static vkCmdSetDepthCompareOpEXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdSetDepthTestEnableEXT(paramarg0: VkCommandBuffer, paramarg1: boolean): void;
    static vkCmdSetDepthWriteEnableEXT(paramarg0: VkCommandBuffer, paramarg1: boolean): void;
    static vkCmdSetExtraPrimitiveOverestimationSizeEXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdSetFrontFaceEXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdSetLineRasterizationModeEXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdSetLineStippleEnableEXT(paramarg0: VkCommandBuffer, paramarg1: boolean): void;
    static vkCmdSetLogicOpEXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdSetLogicOpEnableEXT(paramarg0: VkCommandBuffer, paramarg1: boolean): void;
    static vkCmdSetPatchControlPointsEXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdSetPolygonModeEXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdSetPrimitiveRestartEnableEXT(paramarg0: VkCommandBuffer, paramarg1: boolean): void;
    static vkCmdSetPrimitiveTopologyEXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdSetProvokingVertexModeEXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdSetRasterizationSamplesEXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdSetRasterizationStreamEXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdSetRasterizerDiscardEnableEXT(paramarg0: VkCommandBuffer, paramarg1: boolean): void;
    static vkCmdSetRepresentativeFragmentTestEnableNV(paramarg0: VkCommandBuffer, paramarg1: boolean): void;
    static vkCmdSetSampleLocationsEnableEXT(paramarg0: VkCommandBuffer, paramarg1: boolean): void;
    static vkCmdSetSampleMaskEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number[]): void;
    static vkCmdSetSampleMaskEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: IntBuffer): void;
    static vkCmdSetScissorWithCountEXT(paramarg0: VkCommandBuffer, paramarg1: (Object | null)[]): void;
    static vkCmdSetShadingRateImageEnableNV(paramarg0: VkCommandBuffer, paramarg1: boolean): void;
    static vkCmdSetStencilOpEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static vkCmdSetStencilTestEnableEXT(paramarg0: VkCommandBuffer, paramarg1: boolean): void;
    static vkCmdSetTessellationDomainOriginEXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdSetVertexInputEXT(paramarg0: VkCommandBuffer, paramarg1: (Object | null)[], paramarg2: (Object | null)[]): void;
    static vkCmdSetViewportSwizzleNV(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: (Object | null)[]): void;
    static vkCmdSetViewportWScalingEnableNV(paramarg0: VkCommandBuffer, paramarg1: boolean): void;
    static vkCmdSetViewportWithCountEXT(paramarg0: VkCommandBuffer, paramarg1: (Object | null)[]): void;
    static vkCreateShadersEXT(paramarg0: VkDevice, paramarg1: (Object | null)[], paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static vkCreateShadersEXT(paramarg0: VkDevice, paramarg1: (Object | null)[], paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    static vkDestroyShaderEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: VkAllocationCallbacks): void;
    static vkGetShaderBinaryDataEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: PointerBuffer, paramarg3: ByteBuffer): number;
    constructor()
}