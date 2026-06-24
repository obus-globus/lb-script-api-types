import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkDecompressMemoryInfoEXT } from '../../../org/lwjgl/vulkan/VkDecompressMemoryInfoEXT.d.ts'
export class EXTMemoryDecompression extends Object {
    static VK_ACCESS_2_MEMORY_DECOMPRESSION_READ_BIT_EXT: number;
    static VK_ACCESS_2_MEMORY_DECOMPRESSION_WRITE_BIT_EXT: number;
    static VK_BUFFER_USAGE_2_MEMORY_DECOMPRESSION_BIT_EXT: number;
    static VK_EXT_MEMORY_DECOMPRESSION_EXTENSION_NAME: string;
    static VK_EXT_MEMORY_DECOMPRESSION_SPEC_VERSION: number;
    static VK_MEMORY_DECOMPRESSION_METHOD_GDEFLATE_1_0_BIT_EXT: number;
    static VK_MEMORY_DECOMPRESSION_METHOD_GDEFLATE_1_0_BIT_NV: number;
    static VK_PIPELINE_STAGE_2_MEMORY_DECOMPRESSION_BIT_EXT: number;
    static VK_STRUCTURE_TYPE_DECOMPRESS_MEMORY_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_MEMORY_DECOMPRESSION_FEATURES_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_MEMORY_DECOMPRESSION_PROPERTIES_EXT: number;
    static nvkCmdDecompressMemoryEXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static vkCmdDecompressMemoryEXT(paramarg0: VkCommandBuffer, paramarg1: VkDecompressMemoryInfoEXT): void;
    static vkCmdDecompressMemoryIndirectCountEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    constructor()
}