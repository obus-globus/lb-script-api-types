import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
export class EXTExtendedDynamicState extends Object {
    static VK_DYNAMIC_STATE_CULL_MODE_EXT: number;
    static VK_DYNAMIC_STATE_DEPTH_BOUNDS_TEST_ENABLE_EXT: number;
    static VK_DYNAMIC_STATE_DEPTH_COMPARE_OP_EXT: number;
    static VK_DYNAMIC_STATE_DEPTH_TEST_ENABLE_EXT: number;
    static VK_DYNAMIC_STATE_DEPTH_WRITE_ENABLE_EXT: number;
    static VK_DYNAMIC_STATE_FRONT_FACE_EXT: number;
    static VK_DYNAMIC_STATE_PRIMITIVE_TOPOLOGY_EXT: number;
    static VK_DYNAMIC_STATE_SCISSOR_WITH_COUNT_EXT: number;
    static VK_DYNAMIC_STATE_STENCIL_OP_EXT: number;
    static VK_DYNAMIC_STATE_STENCIL_TEST_ENABLE_EXT: number;
    static VK_DYNAMIC_STATE_VERTEX_INPUT_BINDING_STRIDE_EXT: number;
    static VK_DYNAMIC_STATE_VIEWPORT_WITH_COUNT_EXT: number;
    static VK_EXT_EXTENDED_DYNAMIC_STATE_EXTENSION_NAME: string;
    static VK_EXT_EXTENDED_DYNAMIC_STATE_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_EXTENDED_DYNAMIC_STATE_FEATURES_EXT: number;
    static nvkCmdBindVertexBuffers2EXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    static nvkCmdSetScissorWithCountEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number): void;
    static nvkCmdSetViewportWithCountEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number): void;
    static vkCmdBindVertexBuffers2EXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: LongBuffer, paramarg3: LongBuffer, paramarg4: LongBuffer, paramarg5: LongBuffer): void;
    static vkCmdBindVertexBuffers2EXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number[], paramarg3: number[], paramarg4: number[], paramarg5: number[]): void;
    static vkCmdSetCullModeEXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdSetDepthBoundsTestEnableEXT(paramarg0: VkCommandBuffer, paramarg1: boolean): void;
    static vkCmdSetDepthCompareOpEXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdSetDepthTestEnableEXT(paramarg0: VkCommandBuffer, paramarg1: boolean): void;
    static vkCmdSetDepthWriteEnableEXT(paramarg0: VkCommandBuffer, paramarg1: boolean): void;
    static vkCmdSetFrontFaceEXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdSetPrimitiveTopologyEXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdSetScissorWithCountEXT(paramarg0: VkCommandBuffer, paramarg1: (Object | null)[]): void;
    static vkCmdSetStencilOpEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static vkCmdSetStencilTestEnableEXT(paramarg0: VkCommandBuffer, paramarg1: boolean): void;
    static vkCmdSetViewportWithCountEXT(paramarg0: VkCommandBuffer, paramarg1: (Object | null)[]): void;
    constructor()
}