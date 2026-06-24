import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkCopyMemoryToMicromapInfoEXT } from '../../../org/lwjgl/vulkan/VkCopyMemoryToMicromapInfoEXT.d.ts'
import type { VkCopyMicromapInfoEXT } from '../../../org/lwjgl/vulkan/VkCopyMicromapInfoEXT.d.ts'
import type { VkCopyMicromapToMemoryInfoEXT } from '../../../org/lwjgl/vulkan/VkCopyMicromapToMemoryInfoEXT.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkMicromapBuildInfoEXT } from '../../../org/lwjgl/vulkan/VkMicromapBuildInfoEXT.d.ts'
import type { VkMicromapBuildSizesInfoEXT } from '../../../org/lwjgl/vulkan/VkMicromapBuildSizesInfoEXT.d.ts'
import type { VkMicromapCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkMicromapCreateInfoEXT.d.ts'
import type { VkMicromapVersionInfoEXT } from '../../../org/lwjgl/vulkan/VkMicromapVersionInfoEXT.d.ts'
export class EXTOpacityMicromap extends Object {
    static VK_ACCESS_2_MICROMAP_READ_BIT_EXT: number;
    static VK_ACCESS_2_MICROMAP_WRITE_BIT_EXT: number;
    static VK_BUFFER_USAGE_MICROMAP_BUILD_INPUT_READ_ONLY_BIT_EXT: number;
    static VK_BUFFER_USAGE_MICROMAP_STORAGE_BIT_EXT: number;
    static VK_BUILD_ACCELERATION_STRUCTURE_ALLOW_DISABLE_OPACITY_MICROMAPS_BIT_EXT: number;
    static VK_BUILD_ACCELERATION_STRUCTURE_ALLOW_DISABLE_OPACITY_MICROMAPS_EXT: number;
    static VK_BUILD_ACCELERATION_STRUCTURE_ALLOW_OPACITY_MICROMAP_DATA_UPDATE_BIT_EXT: number;
    static VK_BUILD_ACCELERATION_STRUCTURE_ALLOW_OPACITY_MICROMAP_DATA_UPDATE_EXT: number;
    static VK_BUILD_ACCELERATION_STRUCTURE_ALLOW_OPACITY_MICROMAP_UPDATE_BIT_EXT: number;
    static VK_BUILD_ACCELERATION_STRUCTURE_ALLOW_OPACITY_MICROMAP_UPDATE_EXT: number;
    static VK_BUILD_MICROMAP_ALLOW_COMPACTION_BIT_EXT: number;
    static VK_BUILD_MICROMAP_MODE_BUILD_EXT: number;
    static VK_BUILD_MICROMAP_PREFER_FAST_BUILD_BIT_EXT: number;
    static VK_BUILD_MICROMAP_PREFER_FAST_TRACE_BIT_EXT: number;
    static VK_COPY_MICROMAP_MODE_CLONE_EXT: number;
    static VK_COPY_MICROMAP_MODE_COMPACT_EXT: number;
    static VK_COPY_MICROMAP_MODE_DESERIALIZE_EXT: number;
    static VK_COPY_MICROMAP_MODE_SERIALIZE_EXT: number;
    static VK_EXT_OPACITY_MICROMAP_EXTENSION_NAME: string;
    static VK_EXT_OPACITY_MICROMAP_SPEC_VERSION: number;
    static VK_GEOMETRY_INSTANCE_DISABLE_OPACITY_MICROMAPS_BIT_EXT: number;
    static VK_GEOMETRY_INSTANCE_DISABLE_OPACITY_MICROMAPS_EXT: number;
    static VK_GEOMETRY_INSTANCE_FORCE_OPACITY_MICROMAP_2_STATE_BIT_EXT: number;
    static VK_GEOMETRY_INSTANCE_FORCE_OPACITY_MICROMAP_2_STATE_EXT: number;
    static VK_MICROMAP_CREATE_DEVICE_ADDRESS_CAPTURE_REPLAY_BIT_EXT: number;
    static VK_MICROMAP_TYPE_OPACITY_MICROMAP_EXT: number;
    static VK_OBJECT_TYPE_MICROMAP_EXT: number;
    static VK_OPACITY_MICROMAP_FORMAT_2_STATE_EXT: number;
    static VK_OPACITY_MICROMAP_FORMAT_4_STATE_EXT: number;
    static VK_OPACITY_MICROMAP_SPECIAL_INDEX_FULLY_OPAQUE_EXT: number;
    static VK_OPACITY_MICROMAP_SPECIAL_INDEX_FULLY_TRANSPARENT_EXT: number;
    static VK_OPACITY_MICROMAP_SPECIAL_INDEX_FULLY_UNKNOWN_OPAQUE_EXT: number;
    static VK_OPACITY_MICROMAP_SPECIAL_INDEX_FULLY_UNKNOWN_TRANSPARENT_EXT: number;
    static VK_PIPELINE_CREATE_RAY_TRACING_OPACITY_MICROMAP_BIT_EXT: number;
    static VK_PIPELINE_STAGE_2_MICROMAP_BUILD_BIT_EXT: number;
    static VK_QUERY_TYPE_MICROMAP_COMPACTED_SIZE_EXT: number;
    static VK_QUERY_TYPE_MICROMAP_SERIALIZATION_SIZE_EXT: number;
    static VK_STRUCTURE_TYPE_ACCELERATION_STRUCTURE_TRIANGLES_OPACITY_MICROMAP_EXT: number;
    static VK_STRUCTURE_TYPE_COPY_MEMORY_TO_MICROMAP_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_COPY_MICROMAP_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_COPY_MICROMAP_TO_MEMORY_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_MICROMAP_BUILD_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_MICROMAP_BUILD_SIZES_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_MICROMAP_CREATE_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_MICROMAP_VERSION_INFO_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_OPACITY_MICROMAP_FEATURES_EXT: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_OPACITY_MICROMAP_PROPERTIES_EXT: number;
    static nvkBuildMicromapsEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkCmdBuildMicromapsEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number): void;
    static nvkCmdCopyMemoryToMicromapEXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkCmdCopyMicromapEXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkCmdCopyMicromapToMemoryEXT(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkCmdWriteMicromapsPropertiesEXT(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static nvkCopyMemoryToMicromapEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkCopyMicromapEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkCopyMicromapToMemoryEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkCreateMicromapEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkDestroyMicromapEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static nvkGetDeviceMicromapCompatibilityEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static nvkGetMicromapBuildSizesEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nvkWriteMicromapsPropertiesEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): number;
    static vkBuildMicromapsEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: (Object | null)[]): number;
    static vkCmdBuildMicromapsEXT(paramarg0: VkCommandBuffer, paramarg1: (Object | null)[]): void;
    static vkCmdCopyMemoryToMicromapEXT(paramarg0: VkCommandBuffer, paramarg1: VkCopyMemoryToMicromapInfoEXT): void;
    static vkCmdCopyMicromapEXT(paramarg0: VkCommandBuffer, paramarg1: VkCopyMicromapInfoEXT): void;
    static vkCmdCopyMicromapToMemoryEXT(paramarg0: VkCommandBuffer, paramarg1: VkCopyMicromapToMemoryInfoEXT): void;
    static vkCmdWriteMicromapsPropertiesEXT(paramarg0: VkCommandBuffer, paramarg1: LongBuffer, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static vkCmdWriteMicromapsPropertiesEXT(paramarg0: VkCommandBuffer, paramarg1: number[], paramarg2: number, paramarg3: number, paramarg4: number): void;
    static vkCopyMemoryToMicromapEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: VkCopyMemoryToMicromapInfoEXT): number;
    static vkCopyMicromapEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: VkCopyMicromapInfoEXT): number;
    static vkCopyMicromapToMemoryEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: VkCopyMicromapToMemoryInfoEXT): number;
    static vkCreateMicromapEXT(paramarg0: VkDevice, paramarg1: VkMicromapCreateInfoEXT, paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static vkCreateMicromapEXT(paramarg0: VkDevice, paramarg1: VkMicromapCreateInfoEXT, paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    static vkDestroyMicromapEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: VkAllocationCallbacks): void;
    static vkGetDeviceMicromapCompatibilityEXT(paramarg0: VkDevice, paramarg1: VkMicromapVersionInfoEXT, paramarg2: number[]): void;
    static vkGetDeviceMicromapCompatibilityEXT(paramarg0: VkDevice, paramarg1: VkMicromapVersionInfoEXT, paramarg2: IntBuffer): void;
    static vkGetMicromapBuildSizesEXT(paramarg0: VkDevice, paramarg1: number, paramarg2: VkMicromapBuildInfoEXT, paramarg3: VkMicromapBuildSizesInfoEXT): void;
    static vkWriteMicromapsPropertiesEXT(paramarg0: VkDevice, paramarg1: LongBuffer, paramarg2: number, paramarg3: ByteBuffer, paramarg4: number): number;
    static vkWriteMicromapsPropertiesEXT(paramarg0: VkDevice, paramarg1: number[], paramarg2: number, paramarg3: ByteBuffer, paramarg4: number): number;
    constructor()
}