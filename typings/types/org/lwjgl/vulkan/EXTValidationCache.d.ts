import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkValidationCacheCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkValidationCacheCreateInfoEXT.d.ts'
export class EXTValidationCache extends Object {
    static VK_EXT_VALIDATION_CACHE_EXTENSION_NAME: string;
    static VK_EXT_VALIDATION_CACHE_SPEC_VERSION: number;
    static VK_OBJECT_TYPE_VALIDATION_CACHE_EXT: number;
    static VK_STRUCTURE_TYPE_SHADER_MODULE_VALIDATION_CACHE_CREATE_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_VALIDATION_CACHE_CREATE_INFO_EXT: number;
    static VK_VALIDATION_CACHE_HEADER_VERSION_ONE_EXT: number;
    static nvkCreateValidationCacheEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkDestroyValidationCacheEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static nvkGetValidationCacheDataEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkMergeValidationCachesEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static vkCreateValidationCacheEXT(paramarg0: VkDevice, paramarg1: VkValidationCacheCreateInfoEXT, paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static vkCreateValidationCacheEXT(paramarg0: VkDevice, paramarg1: VkValidationCacheCreateInfoEXT, paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    static vkDestroyValidationCacheEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: VkAllocationCallbacks): void;
    static vkGetValidationCacheDataEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: PointerBuffer, paramarg3: ByteBuffer): number;
    static vkMergeValidationCachesEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: LongBuffer): number;
    static vkMergeValidationCachesEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number[]): number;
    constructor()
}