import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkQueue } from '../../../org/lwjgl/vulkan/VkQueue.d.ts'
export class NVDeviceDiagnosticCheckpoints extends Object {
    static VK_NV_DEVICE_DIAGNOSTIC_CHECKPOINTS_EXTENSION_NAME: string;
    static VK_NV_DEVICE_DIAGNOSTIC_CHECKPOINTS_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_CHECKPOINT_DATA_2_NV: number;
    static VK_STRUCTURE_TYPE_CHECKPOINT_DATA_NV: number;
    static VK_STRUCTURE_TYPE_QUEUE_FAMILY_CHECKPOINT_PROPERTIES_2_NV: number;
    static VK_STRUCTURE_TYPE_QUEUE_FAMILY_CHECKPOINT_PROPERTIES_NV: number;
    static nvkGetQueueCheckpointData2NV(paramarg0: VkQueue, paramarg1: number, paramarg2: number): void;
    static nvkGetQueueCheckpointDataNV(paramarg0: VkQueue, paramarg1: number, paramarg2: number): void;
    static vkCmdSetCheckpointNV(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkGetQueueCheckpointData2NV(paramarg0: VkQueue, paramarg1: number[], paramarg2: (Object | null)[]): void;
    static vkGetQueueCheckpointData2NV(paramarg0: VkQueue, paramarg1: IntBuffer, paramarg2: (Object | null)[]): void;
    static vkGetQueueCheckpointDataNV(paramarg0: VkQueue, paramarg1: number[], paramarg2: (Object | null)[]): void;
    static vkGetQueueCheckpointDataNV(paramarg0: VkQueue, paramarg1: IntBuffer, paramarg2: (Object | null)[]): void;
    constructor()
}