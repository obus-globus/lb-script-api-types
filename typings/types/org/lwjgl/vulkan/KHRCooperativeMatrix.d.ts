import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
export class KHRCooperativeMatrix extends Object {
    static VK_COMPONENT_TYPE_FLOAT16_KHR: number;
    static VK_COMPONENT_TYPE_FLOAT32_KHR: number;
    static VK_COMPONENT_TYPE_FLOAT64_KHR: number;
    static VK_COMPONENT_TYPE_SINT16_KHR: number;
    static VK_COMPONENT_TYPE_SINT32_KHR: number;
    static VK_COMPONENT_TYPE_SINT64_KHR: number;
    static VK_COMPONENT_TYPE_SINT8_KHR: number;
    static VK_COMPONENT_TYPE_UINT16_KHR: number;
    static VK_COMPONENT_TYPE_UINT32_KHR: number;
    static VK_COMPONENT_TYPE_UINT64_KHR: number;
    static VK_COMPONENT_TYPE_UINT8_KHR: number;
    static VK_KHR_COOPERATIVE_MATRIX_EXTENSION_NAME: string;
    static VK_KHR_COOPERATIVE_MATRIX_SPEC_VERSION: number;
    static VK_SCOPE_DEVICE_KHR: number;
    static VK_SCOPE_QUEUE_FAMILY_KHR: number;
    static VK_SCOPE_SUBGROUP_KHR: number;
    static VK_SCOPE_WORKGROUP_KHR: number;
    static VK_STRUCTURE_TYPE_COOPERATIVE_MATRIX_PROPERTIES_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_COOPERATIVE_MATRIX_FEATURES_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_COOPERATIVE_MATRIX_PROPERTIES_KHR: number;
    static nvkGetPhysicalDeviceCooperativeMatrixPropertiesKHR(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number): number;
    static vkGetPhysicalDeviceCooperativeMatrixPropertiesKHR(paramarg0: VkPhysicalDevice, paramarg1: number[], paramarg2: (Object | null)[]): number;
    static vkGetPhysicalDeviceCooperativeMatrixPropertiesKHR(paramarg0: VkPhysicalDevice, paramarg1: IntBuffer, paramarg2: (Object | null)[]): number;
    constructor()
}