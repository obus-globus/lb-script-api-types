import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
export class NVCooperativeMatrix2 extends Object {
    static VK_NV_COOPERATIVE_MATRIX_2_EXTENSION_NAME: string;
    static VK_NV_COOPERATIVE_MATRIX_2_SPEC_VERSION: number;
    static VK_STRUCTURE_TYPE_COOPERATIVE_MATRIX_FLEXIBLE_DIMENSIONS_PROPERTIES_NV: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_COOPERATIVE_MATRIX_2_FEATURES_NV: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_COOPERATIVE_MATRIX_2_PROPERTIES_NV: number;
    static nvkGetPhysicalDeviceCooperativeMatrixFlexibleDimensionsPropertiesNV(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number): number;
    static vkGetPhysicalDeviceCooperativeMatrixFlexibleDimensionsPropertiesNV(paramarg0: VkPhysicalDevice, paramarg1: number[], paramarg2: (Object | null)[]): number;
    static vkGetPhysicalDeviceCooperativeMatrixFlexibleDimensionsPropertiesNV(paramarg0: VkPhysicalDevice, paramarg1: IntBuffer, paramarg2: (Object | null)[]): number;
    constructor()
}