import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { VkAccelerationStructureBuildGeometryInfoKHR } from '../../../org/lwjgl/vulkan/VkAccelerationStructureBuildGeometryInfoKHR.d.ts'
import type { VkAccelerationStructureBuildSizesInfoKHR } from '../../../org/lwjgl/vulkan/VkAccelerationStructureBuildSizesInfoKHR.d.ts'
import type { VkAccelerationStructureCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkAccelerationStructureCreateInfoKHR.d.ts'
import type { VkAccelerationStructureDeviceAddressInfoKHR } from '../../../org/lwjgl/vulkan/VkAccelerationStructureDeviceAddressInfoKHR.d.ts'
import type { VkAccelerationStructureVersionInfoKHR } from '../../../org/lwjgl/vulkan/VkAccelerationStructureVersionInfoKHR.d.ts'
import type { VkAllocationCallbacks } from '../../../org/lwjgl/vulkan/VkAllocationCallbacks.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkCopyAccelerationStructureInfoKHR } from '../../../org/lwjgl/vulkan/VkCopyAccelerationStructureInfoKHR.d.ts'
import type { VkCopyAccelerationStructureToMemoryInfoKHR } from '../../../org/lwjgl/vulkan/VkCopyAccelerationStructureToMemoryInfoKHR.d.ts'
import type { VkCopyMemoryToAccelerationStructureInfoKHR } from '../../../org/lwjgl/vulkan/VkCopyMemoryToAccelerationStructureInfoKHR.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
export class KHRAccelerationStructure extends Object {
    static VK_ACCELERATION_STRUCTURE_BUILD_TYPE_DEVICE_KHR: number;
    static VK_ACCELERATION_STRUCTURE_BUILD_TYPE_HOST_KHR: number;
    static VK_ACCELERATION_STRUCTURE_BUILD_TYPE_HOST_OR_DEVICE_KHR: number;
    static VK_ACCELERATION_STRUCTURE_COMPATIBILITY_COMPATIBLE_KHR: number;
    static VK_ACCELERATION_STRUCTURE_COMPATIBILITY_INCOMPATIBLE_KHR: number;
    static VK_ACCELERATION_STRUCTURE_CREATE_DEVICE_ADDRESS_CAPTURE_REPLAY_BIT_KHR: number;
    static VK_ACCELERATION_STRUCTURE_TYPE_BOTTOM_LEVEL_KHR: number;
    static VK_ACCELERATION_STRUCTURE_TYPE_GENERIC_KHR: number;
    static VK_ACCELERATION_STRUCTURE_TYPE_TOP_LEVEL_KHR: number;
    static VK_ACCESS_ACCELERATION_STRUCTURE_READ_BIT_KHR: number;
    static VK_ACCESS_ACCELERATION_STRUCTURE_WRITE_BIT_KHR: number;
    static VK_BUFFER_USAGE_ACCELERATION_STRUCTURE_BUILD_INPUT_READ_ONLY_BIT_KHR: number;
    static VK_BUFFER_USAGE_ACCELERATION_STRUCTURE_STORAGE_BIT_KHR: number;
    static VK_BUILD_ACCELERATION_STRUCTURE_ALLOW_COMPACTION_BIT_KHR: number;
    static VK_BUILD_ACCELERATION_STRUCTURE_ALLOW_UPDATE_BIT_KHR: number;
    static VK_BUILD_ACCELERATION_STRUCTURE_LOW_MEMORY_BIT_KHR: number;
    static VK_BUILD_ACCELERATION_STRUCTURE_MODE_BUILD_KHR: number;
    static VK_BUILD_ACCELERATION_STRUCTURE_MODE_UPDATE_KHR: number;
    static VK_BUILD_ACCELERATION_STRUCTURE_PREFER_FAST_BUILD_BIT_KHR: number;
    static VK_BUILD_ACCELERATION_STRUCTURE_PREFER_FAST_TRACE_BIT_KHR: number;
    static VK_COPY_ACCELERATION_STRUCTURE_MODE_CLONE_KHR: number;
    static VK_COPY_ACCELERATION_STRUCTURE_MODE_COMPACT_KHR: number;
    static VK_COPY_ACCELERATION_STRUCTURE_MODE_DESERIALIZE_KHR: number;
    static VK_COPY_ACCELERATION_STRUCTURE_MODE_SERIALIZE_KHR: number;
    static VK_DEBUG_REPORT_OBJECT_TYPE_ACCELERATION_STRUCTURE_KHR_EXT: number;
    static VK_DESCRIPTOR_TYPE_ACCELERATION_STRUCTURE_KHR: number;
    static VK_FORMAT_FEATURE_2_ACCELERATION_STRUCTURE_VERTEX_BUFFER_BIT_KHR: number;
    static VK_FORMAT_FEATURE_ACCELERATION_STRUCTURE_VERTEX_BUFFER_BIT_KHR: number;
    static VK_GEOMETRY_INSTANCE_FORCE_NO_OPAQUE_BIT_KHR: number;
    static VK_GEOMETRY_INSTANCE_FORCE_OPAQUE_BIT_KHR: number;
    static VK_GEOMETRY_INSTANCE_TRIANGLE_FACING_CULL_DISABLE_BIT_KHR: number;
    static VK_GEOMETRY_INSTANCE_TRIANGLE_FLIP_FACING_BIT_KHR: number;
    static VK_GEOMETRY_INSTANCE_TRIANGLE_FRONT_COUNTERCLOCKWISE_BIT_KHR: number;
    static VK_GEOMETRY_NO_DUPLICATE_ANY_HIT_INVOCATION_BIT_KHR: number;
    static VK_GEOMETRY_OPAQUE_BIT_KHR: number;
    static VK_GEOMETRY_TYPE_AABBS_KHR: number;
    static VK_GEOMETRY_TYPE_INSTANCES_KHR: number;
    static VK_GEOMETRY_TYPE_TRIANGLES_KHR: number;
    static VK_INDEX_TYPE_NONE_KHR: number;
    static VK_KHR_ACCELERATION_STRUCTURE_EXTENSION_NAME: string;
    static VK_KHR_ACCELERATION_STRUCTURE_SPEC_VERSION: number;
    static VK_OBJECT_TYPE_ACCELERATION_STRUCTURE_KHR: number;
    static VK_PIPELINE_STAGE_ACCELERATION_STRUCTURE_BUILD_BIT_KHR: number;
    static VK_QUERY_TYPE_ACCELERATION_STRUCTURE_COMPACTED_SIZE_KHR: number;
    static VK_QUERY_TYPE_ACCELERATION_STRUCTURE_SERIALIZATION_SIZE_KHR: number;
    static VK_STRUCTURE_TYPE_ACCELERATION_STRUCTURE_BUILD_GEOMETRY_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_ACCELERATION_STRUCTURE_BUILD_SIZES_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_ACCELERATION_STRUCTURE_CREATE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_ACCELERATION_STRUCTURE_DEVICE_ADDRESS_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_ACCELERATION_STRUCTURE_GEOMETRY_AABBS_DATA_KHR: number;
    static VK_STRUCTURE_TYPE_ACCELERATION_STRUCTURE_GEOMETRY_INSTANCES_DATA_KHR: number;
    static VK_STRUCTURE_TYPE_ACCELERATION_STRUCTURE_GEOMETRY_KHR: number;
    static VK_STRUCTURE_TYPE_ACCELERATION_STRUCTURE_GEOMETRY_TRIANGLES_DATA_KHR: number;
    static VK_STRUCTURE_TYPE_ACCELERATION_STRUCTURE_VERSION_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_COPY_ACCELERATION_STRUCTURE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_COPY_ACCELERATION_STRUCTURE_TO_MEMORY_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_COPY_MEMORY_TO_ACCELERATION_STRUCTURE_INFO_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_ACCELERATION_STRUCTURE_FEATURES_KHR: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_ACCELERATION_STRUCTURE_PROPERTIES_KHR: number;
    static VK_STRUCTURE_TYPE_WRITE_DESCRIPTOR_SET_ACCELERATION_STRUCTURE_KHR: number;
    static nvkBuildAccelerationStructuresKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nvkCmdBuildAccelerationStructuresIndirectKHR(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static nvkCmdBuildAccelerationStructuresKHR(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nvkCmdCopyAccelerationStructureKHR(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkCmdCopyAccelerationStructureToMemoryKHR(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkCmdCopyMemoryToAccelerationStructureKHR(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkCmdWriteAccelerationStructuresPropertiesKHR(paramarg0: VkCommandBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static nvkCopyAccelerationStructureKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkCopyAccelerationStructureToMemoryKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkCopyMemoryToAccelerationStructureKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): number;
    static nvkCreateAccelerationStructureKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvkDestroyAccelerationStructureKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static nvkGetAccelerationStructureBuildSizesKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nvkGetAccelerationStructureDeviceAddressKHR(paramarg0: VkDevice, paramarg1: number): number;
    static nvkGetDeviceAccelerationStructureCompatibilityKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static nvkWriteAccelerationStructuresPropertiesKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): number;
    static vkBuildAccelerationStructuresKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: (Object | null)[], paramarg3: PointerBuffer): number;
    static vkCmdBuildAccelerationStructuresIndirectKHR(paramarg0: VkCommandBuffer, paramarg1: (Object | null)[], paramarg2: LongBuffer, paramarg3: IntBuffer, paramarg4: PointerBuffer): void;
    static vkCmdBuildAccelerationStructuresIndirectKHR(paramarg0: VkCommandBuffer, paramarg1: (Object | null)[], paramarg2: number[], paramarg3: number[], paramarg4: PointerBuffer): void;
    static vkCmdBuildAccelerationStructuresKHR(paramarg0: VkCommandBuffer, paramarg1: (Object | null)[], paramarg2: PointerBuffer): void;
    static vkCmdCopyAccelerationStructureKHR(paramarg0: VkCommandBuffer, paramarg1: VkCopyAccelerationStructureInfoKHR): void;
    static vkCmdCopyAccelerationStructureToMemoryKHR(paramarg0: VkCommandBuffer, paramarg1: VkCopyAccelerationStructureToMemoryInfoKHR): void;
    static vkCmdCopyMemoryToAccelerationStructureKHR(paramarg0: VkCommandBuffer, paramarg1: VkCopyMemoryToAccelerationStructureInfoKHR): void;
    static vkCmdWriteAccelerationStructuresPropertiesKHR(paramarg0: VkCommandBuffer, paramarg1: LongBuffer, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static vkCmdWriteAccelerationStructuresPropertiesKHR(paramarg0: VkCommandBuffer, paramarg1: number[], paramarg2: number, paramarg3: number, paramarg4: number): void;
    static vkCopyAccelerationStructureKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: VkCopyAccelerationStructureInfoKHR): number;
    static vkCopyAccelerationStructureToMemoryKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: VkCopyAccelerationStructureToMemoryInfoKHR): number;
    static vkCopyMemoryToAccelerationStructureKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: VkCopyMemoryToAccelerationStructureInfoKHR): number;
    static vkCreateAccelerationStructureKHR(paramarg0: VkDevice, paramarg1: VkAccelerationStructureCreateInfoKHR, paramarg2: VkAllocationCallbacks, paramarg3: LongBuffer): number;
    static vkCreateAccelerationStructureKHR(paramarg0: VkDevice, paramarg1: VkAccelerationStructureCreateInfoKHR, paramarg2: VkAllocationCallbacks, paramarg3: number[]): number;
    static vkDestroyAccelerationStructureKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: VkAllocationCallbacks): void;
    static vkGetAccelerationStructureBuildSizesKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: VkAccelerationStructureBuildGeometryInfoKHR, paramarg3: number[], paramarg4: VkAccelerationStructureBuildSizesInfoKHR): void;
    static vkGetAccelerationStructureBuildSizesKHR(paramarg0: VkDevice, paramarg1: number, paramarg2: VkAccelerationStructureBuildGeometryInfoKHR, paramarg3: IntBuffer, paramarg4: VkAccelerationStructureBuildSizesInfoKHR): void;
    static vkGetAccelerationStructureDeviceAddressKHR(paramarg0: VkDevice, paramarg1: VkAccelerationStructureDeviceAddressInfoKHR): number;
    static vkGetDeviceAccelerationStructureCompatibilityKHR(paramarg0: VkDevice, paramarg1: VkAccelerationStructureVersionInfoKHR, paramarg2: number[]): void;
    static vkGetDeviceAccelerationStructureCompatibilityKHR(paramarg0: VkDevice, paramarg1: VkAccelerationStructureVersionInfoKHR, paramarg2: IntBuffer): void;
    static vkWriteAccelerationStructuresPropertiesKHR(paramarg0: VkDevice, paramarg1: LongBuffer, paramarg2: number, paramarg3: ByteBuffer, paramarg4: number): number;
    static vkWriteAccelerationStructuresPropertiesKHR(paramarg0: VkDevice, paramarg1: number[], paramarg2: number, paramarg3: ByteBuffer, paramarg4: number): number;
    constructor()
}