import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
export class NVCooperativeMatrix extends Object {
    static VK_COMPONENT_TYPE_FLOAT16_NV: number;
    static VK_COMPONENT_TYPE_FLOAT32_NV: number;
    static VK_COMPONENT_TYPE_FLOAT64_NV: number;
    static VK_COMPONENT_TYPE_SINT16_NV: number;
    static VK_COMPONENT_TYPE_SINT32_NV: number;
    static VK_COMPONENT_TYPE_SINT64_NV: number;
    static VK_COMPONENT_TYPE_SINT8_NV: number;
    static VK_COMPONENT_TYPE_UINT16_NV: number;
    static VK_COMPONENT_TYPE_UINT32_NV: number;
    static VK_COMPONENT_TYPE_UINT64_NV: number;
    static VK_COMPONENT_TYPE_UINT8_NV: number;
    static VK_NV_COOPERATIVE_MATRIX_EXTENSION_NAME: string;
    static VK_NV_COOPERATIVE_MATRIX_SPEC_VERSION: number;
    static VK_SCOPE_DEVICE_NV: number;
    static VK_SCOPE_QUEUE_FAMILY_NV: number;
    static VK_SCOPE_SUBGROUP_NV: number;
    static VK_SCOPE_WORKGROUP_NV: number;
    static VK_STRUCTURE_TYPE_COOPERATIVE_MATRIX_PROPERTIES_NV: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_COOPERATIVE_MATRIX_FEATURES_NV: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_COOPERATIVE_MATRIX_PROPERTIES_NV: number;
    static nvkGetPhysicalDeviceCooperativeMatrixPropertiesNV(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number): number;
    static vkGetPhysicalDeviceCooperativeMatrixPropertiesNV(paramarg0: VkPhysicalDevice, paramarg1: number[], paramarg2: (Object | null)[]): number;
    static vkGetPhysicalDeviceCooperativeMatrixPropertiesNV(paramarg0: VkPhysicalDevice, paramarg1: IntBuffer, paramarg2: (Object | null)[]): number;
    constructor()
}