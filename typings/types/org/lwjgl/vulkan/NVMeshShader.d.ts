import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
export class NVMeshShader extends Object {
    static VK_INDIRECT_COMMANDS_TOKEN_TYPE_DRAW_MESH_TASKS_COUNT_NV_EXT: number;
    static VK_INDIRECT_COMMANDS_TOKEN_TYPE_DRAW_MESH_TASKS_NV_EXT: number;
    static VK_NV_MESH_SHADER_EXTENSION_NAME: string;
    static VK_NV_MESH_SHADER_SPEC_VERSION: number;
    static VK_PIPELINE_STAGE_MESH_SHADER_BIT_NV: number;
    static VK_PIPELINE_STAGE_TASK_SHADER_BIT_NV: number;
    static VK_SHADER_STAGE_MESH_BIT_NV: number;
    static VK_SHADER_STAGE_TASK_BIT_NV: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_MESH_SHADER_FEATURES_NV: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_MESH_SHADER_PROPERTIES_NV: number;
    static vkCmdDrawMeshTasksIndirectCountNV(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    static vkCmdDrawMeshTasksIndirectNV(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static vkCmdDrawMeshTasksNV(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number): void;
    constructor()
}