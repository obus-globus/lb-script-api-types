import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkConvertCooperativeVectorMatrixInfoNV } from '../../../org/lwjgl/vulkan/VkConvertCooperativeVectorMatrixInfoNV.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkPhysicalDevice } from '../../../org/lwjgl/vulkan/VkPhysicalDevice.d.ts'
export class NVCooperativeVector extends Object {
    static VK_COMPONENT_TYPE_FLOAT_E4M3_NV: number;
    static VK_COMPONENT_TYPE_FLOAT_E5M2_NV: number;
    static VK_COMPONENT_TYPE_SINT8_PACKED_NV: number;
    static VK_COMPONENT_TYPE_UINT8_PACKED_NV: number;
    static VK_COOPERATIVE_VECTOR_MATRIX_LAYOUT_COLUMN_MAJOR_NV: number;
    static VK_COOPERATIVE_VECTOR_MATRIX_LAYOUT_INFERENCING_OPTIMAL_NV: number;
    static VK_COOPERATIVE_VECTOR_MATRIX_LAYOUT_ROW_MAJOR_NV: number;
    static VK_COOPERATIVE_VECTOR_MATRIX_LAYOUT_TRAINING_OPTIMAL_NV: number;
    static VK_NV_COOPERATIVE_VECTOR_EXTENSION_NAME: string;
    static VK_NV_COOPERATIVE_VECTOR_SPEC_VERSION: number;
    static VK_PIPELINE_STAGE_2_CONVERT_COOPERATIVE_VECTOR_MATRIX_BIT_NV: number;
    static VK_STRUCTURE_TYPE_CONVERT_COOPERATIVE_VECTOR_MATRIX_INFO_NV: number;
    static VK_STRUCTURE_TYPE_COOPERATIVE_VECTOR_PROPERTIES_NV: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_COOPERATIVE_VECTOR_FEATURES_NV: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_COOPERATIVE_VECTOR_PROPERTIES_NV: number;
    static nvkCmdConvertCooperativeVectorMatrixNV(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number): void;
    static nvkConvertCooperativeVectorMatrixNV(paramarg0: VkDevice, paramarg1: number): number;
    static nvkGetPhysicalDeviceCooperativeVectorPropertiesNV(paramarg0: VkPhysicalDevice, paramarg1: number, paramarg2: number): number;
    static vkCmdConvertCooperativeVectorMatrixNV(paramarg0: VkCommandBuffer, paramarg1: (Object | null)[]): void;
    static vkConvertCooperativeVectorMatrixNV(paramarg0: VkDevice, paramarg1: VkConvertCooperativeVectorMatrixInfoNV): number;
    static vkGetPhysicalDeviceCooperativeVectorPropertiesNV(paramarg0: VkPhysicalDevice, paramarg1: number[], paramarg2: (Object | null)[]): number;
    static vkGetPhysicalDeviceCooperativeVectorPropertiesNV(paramarg0: VkPhysicalDevice, paramarg1: IntBuffer, paramarg2: (Object | null)[]): number;
    constructor()
}