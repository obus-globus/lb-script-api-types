import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkSamplerYcbcrConversionCreateInfo } from '../../../org/lwjgl/vulkan/VkSamplerYcbcrConversionCreateInfo.d.ts'
export class KHRSamplerYcbcrConversion extends Object {
    static VK_CHROMA_LOCATION_COSITED_EVEN_KHR: number;
    static VK_CHROMA_LOCATION_MIDPOINT_KHR: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_SAMPLER_YCBCR_CONVERSION_EXT: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_SAMPLER_YCBCR_CONVERSION_KHR_EXT: number;
    static VK_FORMAT_B10X6G10X6R10X6G10X6_422_UNORM_4PACK16_KHR: number;
    static VK_FORMAT_B12X4G12X4R12X4G12X4_422_UNORM_4PACK16_KHR: number;
    static VK_FORMAT_B16G16R16G16_422_UNORM_KHR: number;
    static VK_FORMAT_B8G8R8G8_422_UNORM_KHR: number;
    static VK_FORMAT_FEATURE_COSITED_CHROMA_SAMPLES_BIT_KHR: number;
    static VK_FORMAT_FEATURE_DISJOINT_BIT_KHR: number;
    static VK_FORMAT_FEATURE_MIDPOINT_CHROMA_SAMPLES_BIT_KHR: number;
    static VK_FORMAT_FEATURE_SAMPLED_IMAGE_YCBCR_CONVERSION_CHROMA_RECONSTRUCTION_EXPLICIT_BIT_KHR: number;
    static VK_FORMAT_FEATURE_SAMPLED_IMAGE_YCBCR_CONVERSION_CHROMA_RECONSTRUCTION_EXPLICIT_FORCEABLE_BIT_KHR: number;
    static VK_FORMAT_FEATURE_SAMPLED_IMAGE_YCBCR_CONVERSION_LINEAR_FILTER_BIT_KHR: number;
    static VK_FORMAT_FEATURE_SAMPLED_IMAGE_YCBCR_CONVERSION_SEPARATE_RECONSTRUCTION_FILTER_BIT_KHR: number;
    static VK_FORMAT_G10X6B10X6G10X6R10X6_422_UNORM_4PACK16_KHR: number;
    static VK_FORMAT_G10X6_B10X6R10X6_2PLANE_420_UNORM_3PACK16_KHR: number;
    static VK_FORMAT_G10X6_B10X6R10X6_2PLANE_422_UNORM_3PACK16_KHR: number;
    static VK_FORMAT_G10X6_B10X6_R10X6_3PLANE_420_UNORM_3PACK16_KHR: number;
    static VK_FORMAT_G10X6_B10X6_R10X6_3PLANE_422_UNORM_3PACK16_KHR: number;
    static VK_FORMAT_G10X6_B10X6_R10X6_3PLANE_444_UNORM_3PACK16_KHR: number;
    static VK_FORMAT_G12X4B12X4G12X4R12X4_422_UNORM_4PACK16_KHR: number;
    static VK_FORMAT_G12X4_B12X4R12X4_2PLANE_420_UNORM_3PACK16_KHR: number;
    static VK_FORMAT_G12X4_B12X4R12X4_2PLANE_422_UNORM_3PACK16_KHR: number;
    static VK_FORMAT_G12X4_B12X4_R12X4_3PLANE_420_UNORM_3PACK16_KHR: number;
    static VK_FORMAT_G12X4_B12X4_R12X4_3PLANE_422_UNORM_3PACK16_KHR: number;
    static VK_FORMAT_G12X4_B12X4_R12X4_3PLANE_444_UNORM_3PACK16_KHR: number;
    static VK_FORMAT_G16B16G16R16_422_UNORM_KHR: number;
    static VK_FORMAT_G16_B16R16_2PLANE_420_UNORM_KHR: number;
    static VK_FORMAT_G16_B16R16_2PLANE_422_UNORM_KHR: number;
    static VK_FORMAT_G16_B16_R16_3PLANE_420_UNORM_KHR: number;
    static VK_FORMAT_G16_B16_R16_3PLANE_422_UNORM_KHR: number;
    static VK_FORMAT_G16_B16_R16_3PLANE_444_UNORM_KHR: number;
    static VK_FORMAT_G8B8G8R8_422_UNORM_KHR: number;
    static VK_FORMAT_G8_B8R8_2PLANE_420_UNORM_KHR: number;
    static VK_FORMAT_G8_B8R8_2PLANE_422_UNORM_KHR: number;
    static VK_FORMAT_G8_B8_R8_3PLANE_420_UNORM_KHR: number;
    static VK_FORMAT_G8_B8_R8_3PLANE_422_UNORM_KHR: number;
    static VK_FORMAT_G8_B8_R8_3PLANE_444_UNORM_KHR: number;
    static VK_FORMAT_R10X6G10X6B10X6A10X6_UNORM_4PACK16_KHR: number;
    static VK_FORMAT_R10X6G10X6_UNORM_2PACK16_KHR: number;
    static VK_FORMAT_R10X6_UNORM_PACK16_KHR: number;
    static VK_FORMAT_R12X4G12X4B12X4A12X4_UNORM_4PACK16_KHR: number;
    static VK_FORMAT_R12X4G12X4_UNORM_2PACK16_KHR: number;
    static VK_FORMAT_R12X4_UNORM_PACK16_KHR: number;
    static VK_IMAGE_ASPECT_PLANE_0_BIT_KHR: number;
    static VK_IMAGE_ASPECT_PLANE_1_BIT_KHR: number;
    static VK_IMAGE_ASPECT_PLANE_2_BIT_KHR: number;
    static VK_IMAGE_CREATE_DISJOINT_BIT_KHR: number;
    static VK_KHR_SAMPLER_YCBCR_CONVERSION_EXTENSION_NAME: string;
    static VK_KHR_SAMPLER_YCBCR_CONVERSION_SPEC_VERSION: number;
    static VK_OBJECT_TYPE_SAMPLER_YCBCR_CONVERSION_KHR: number;
    static VK_SAMPLER_YCBCR_MODEL_CONVERSION_RGB_IDENTITY_KHR: number;
    static VK_SAMPLER_YCBCR_MODEL_CONVERSION_YCBCR_2020_KHR: number;
    static VK_SAMPLER_YCBCR_MODEL_CONVERSION_YCBCR_601_KHR: number;
    static VK_SAMPLER_YCBCR_MODEL_CONVERSION_YCBCR_709_KHR: number;
    static VK_SAMPLER_YCBCR_MODEL_CONVERSION_YCBCR_IDENTITY_KHR: number;
    static VK_SAMPLER_YCBCR_RANGE_ITU_FULL_KHR: number;
    static VK_SAMPLER_YCBCR_RANGE_ITU_NARROW_KHR: number;
    static VK_STRUCTURE_TYPE_BIND_IMAGE_PLANE_MEMORY_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_IMAGE_PLANE_MEMORY_REQUIREMENTS_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_SAMPLER_YCBCR_CONVERSION_FEATURES_KHR: number;
    static VK_STRUCTURE_TYPE_SAMPLER_YCBCR_CONVERSION_CREATE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_SAMPLER_YCBCR_CONVERSION_IMAGE_FORMAT_PROPERTIES_KHR: number;
    static VK_STRUCTURE_TYPE_SAMPLER_YCBCR_CONVERSION_INFO_KHR: number;
    static nvkCreateSamplerYcbcrConversionKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkDestroySamplerYcbcrConversionKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static vkCreateSamplerYcbcrConversionKHR(paramarg0: VkDevice, paramarg1: VkSamplerYcbcrConversionCreateInfo, paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static vkCreateSamplerYcbcrConversionKHR(paramarg0: VkDevice, paramarg1: VkSamplerYcbcrConversionCreateInfo, paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    static vkDestroySamplerYcbcrConversionKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: VkAllocationCallbacks): void;
    constructor()
}