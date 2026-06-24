import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
export class NVMemoryDecompression extends Object {
    static VK_NV_MEMORY_DECOMPRESSION_EXTENSION_NAME: string;
    static VK_NV_MEMORY_DECOMPRESSION_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_MEMORY_DECOMPRESSION_FEATURES_NV: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_MEMORY_DECOMPRESSION_PROPERTIES_NV: number;
    static nvkCmdDecompressMemoryNV(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number): void;
    static vkCmdDecompressMemoryIndirectCountNV(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static vkCmdDecompressMemoryNV(paramarg0: VkCommandBuffer, paramarg1: (Object | null)[]): void;
    constructor()
}