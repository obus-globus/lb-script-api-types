import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
export class EXTMeshShader extends Object {
    static VK_EXT_MESH_SHADER_EXTENSION_NAME: string;
    static VK_EXT_MESH_SHADER_SPEC_VERSION: number;
    static VK_INDIRECT_COMMANDS_TOKEN_TYPE_DRAW_MESH_TASKS_COUNT_EXT: number;
    static VK_INDIRECT_COMMANDS_TOKEN_TYPE_DRAW_MESH_TASKS_EXT: number;
    static VK_INDIRECT_COMMANDS_TOKEN_TYPE_DRAW_MESH_TASKS_NV: number;
    static VK_PIPELINE_STAGE_MESH_SHADER_BIT_EXT: number;
    static VK_PIPELINE_STAGE_TASK_SHADER_BIT_EXT: number;
    static VK_QUERY_PIPELINE_STATISTIC_MESH_SHADER_INVOCATIONS_BIT_EXT: number;
    static VK_QUERY_PIPELINE_STATISTIC_TASK_SHADER_INVOCATIONS_BIT_EXT: number;
    static VK_QUERY_TYPE_MESH_PRIMITIVES_GENERATED_EXT: number;
    static VK_SHADER_STAGE_MESH_BIT_EXT: number;
    static VK_SHADER_STAGE_TASK_BIT_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_MESH_SHADER_FEATURES_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_MESH_SHADER_PROPERTIES_EXT: number;
    static vkCmdDrawMeshTasksEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static vkCmdDrawMeshTasksIndirectCountEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    static vkCmdDrawMeshTasksIndirectEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    constructor()
}