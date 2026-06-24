import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkImageSubresource2 } from '../../../org/lwjgl/vulkan/VkImageSubresource2.d.ts'
import type { VkSubresourceLayout2 } from '../../../org/lwjgl/vulkan/VkSubresourceLayout2.d.ts'
export class EXTImageCompressionControl extends Object {
    static VK_ERROR_COMPRESSION_EXHAUSTED_EXT: number;
    static VK_EXT_IMAGE_COMPRESSION_CONTROL_EXTENSION_NAME: string;
    static VK_EXT_IMAGE_COMPRESSION_CONTROL_SPEC_VERSION: number;
    static VK_IMAGE_COMPRESSION_DEFAULT_EXT: number;
    static VK_IMAGE_COMPRESSION_DISABLED_EXT: number;
    static VK_IMAGE_COMPRESSION_FIXED_RATE_10BPC_BIT_EXT: number;
    static VK_IMAGE_COMPRESSION_FIXED_RATE_11BPC_BIT_EXT: number;
    static VK_IMAGE_COMPRESSION_FIXED_RATE_12BPC_BIT_EXT: number;
    static VK_IMAGE_COMPRESSION_FIXED_RATE_13BPC_BIT_EXT: number;
    static VK_IMAGE_COMPRESSION_FIXED_RATE_14BPC_BIT_EXT: number;
    static VK_IMAGE_COMPRESSION_FIXED_RATE_15BPC_BIT_EXT: number;
    static VK_IMAGE_COMPRESSION_FIXED_RATE_16BPC_BIT_EXT: number;
    static VK_IMAGE_COMPRESSION_FIXED_RATE_17BPC_BIT_EXT: number;
    static VK_IMAGE_COMPRESSION_FIXED_RATE_18BPC_BIT_EXT: number;
    static VK_IMAGE_COMPRESSION_FIXED_RATE_19BPC_BIT_EXT: number;
    static VK_IMAGE_COMPRESSION_FIXED_RATE_1BPC_BIT_EXT: number;
    static VK_IMAGE_COMPRESSION_FIXED_RATE_20BPC_BIT_EXT: number;
    static VK_IMAGE_COMPRESSION_FIXED_RATE_21BPC_BIT_EXT: number;
    static VK_IMAGE_COMPRESSION_FIXED_RATE_22BPC_BIT_EXT: number;
    static VK_IMAGE_COMPRESSION_FIXED_RATE_23BPC_BIT_EXT: number;
    static VK_IMAGE_COMPRESSION_FIXED_RATE_24BPC_BIT_EXT: number;
    static VK_IMAGE_COMPRESSION_FIXED_RATE_2BPC_BIT_EXT: number;
    static VK_IMAGE_COMPRESSION_FIXED_RATE_3BPC_BIT_EXT: number;
    static VK_IMAGE_COMPRESSION_FIXED_RATE_4BPC_BIT_EXT: number;
    static VK_IMAGE_COMPRESSION_FIXED_RATE_5BPC_BIT_EXT: number;
    static VK_IMAGE_COMPRESSION_FIXED_RATE_6BPC_BIT_EXT: number;
    static VK_IMAGE_COMPRESSION_FIXED_RATE_7BPC_BIT_EXT: number;
    static VK_IMAGE_COMPRESSION_FIXED_RATE_8BPC_BIT_EXT: number;
    static VK_IMAGE_COMPRESSION_FIXED_RATE_9BPC_BIT_EXT: number;
    static VK_IMAGE_COMPRESSION_FIXED_RATE_DEFAULT_EXT: number;
    static VK_IMAGE_COMPRESSION_FIXED_RATE_EXPLICIT_EXT: number;
    static VK_IMAGE_COMPRESSION_FIXED_RATE_NONE_EXT: number;
    static VK_STRUCTURE_TYPE_IMAGE_COMPRESSION_CONTROL_EXT: number;
    static VK_STRUCTURE_TYPE_IMAGE_COMPRESSION_PROPERTIES_EXT: number;
    static VK_STRUCTURE_TYPE_IMAGE_SUBRESOURCE_2_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_IMAGE_COMPRESSION_CONTROL_FEATURES_EXT: number;
    static VK_STRUCTURE_TYPE_SUBRESOURCE_LAYOUT_2_EXT: number;
    static nvkGetImageSubresourceLayout2EXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static vkGetImageSubresourceLayout2EXT(paramarg0: VkDevice, paramarg1: number, paramarg2: VkImageSubresource2, paramarg3: VkSubresourceLayout2): void;
    constructor()
}