import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkTileMemoryBindInfoQCOM } from '../../../org/lwjgl/vulkan/VkTileMemoryBindInfoQCOM.d.ts'
export class QCOMTileMemoryHeap extends Object {
    static VK_BUFFER_USAGE_2_TILE_MEMORY_BIT_QCOM: number;
    static VK_BUFFER_USAGE_TILE_MEMORY_BIT_QCOM: number;
    static VK_IMAGE_USAGE_TILE_MEMORY_BIT_QCOM: number;
    static VK_MEMORY_HEAP_TILE_MEMORY_BIT_QCOM: number;
    static VK_QCOM_TILE_MEMORY_HEAP_EXTENSION_NAME: string;
    static VK_QCOM_TILE_MEMORY_HEAP_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_TILE_MEMORY_HEAP_FEATURES_QCOM: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_TILE_MEMORY_HEAP_PROPERTIES_QCOM: number;
    static VK_STRUCTURE_TYPE_TILE_MEMORY_BIND_INFO_QCOM: number;
    static VK_STRUCTURE_TYPE_TILE_MEMORY_REQUIREMENTS_QCOM: number;
    static VK_STRUCTURE_TYPE_TILE_MEMORY_SIZE_INFO_QCOM: number;
    static nvkCmdBindTileMemoryQCOM(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdBindTileMemoryQCOM(paramarg0: VkCommandBuffer, paramarg1: VkTileMemoryBindInfoQCOM): void;
    constructor()
}