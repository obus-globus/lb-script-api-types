import type { Object } from '../../../java/lang/Object.d.ts'
import type { VkAccelerationStructureBuildSizesInfoKHR } from '../../../org/lwjgl/vulkan/VkAccelerationStructureBuildSizesInfoKHR.d.ts'
import type { VkBuildPartitionedAccelerationStructureInfoNV } from '../../../org/lwjgl/vulkan/VkBuildPartitionedAccelerationStructureInfoNV.d.ts'
import type { VkCommandBuffer } from '../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
import type { VkDevice } from '../../../org/lwjgl/vulkan/VkDevice.d.ts'
import type { VkPartitionedAccelerationStructureInstancesInputNV } from '../../../org/lwjgl/vulkan/VkPartitionedAccelerationStructureInstancesInputNV.d.ts'
export class NVPartitionedAccelerationStructure extends Object {
    static VK_DESCRIPTOR_TYPE_PARTITIONED_ACCELERATION_STRUCTURE_NV: number;
    static VK_NV_PARTITIONED_ACCELERATION_STRUCTURE_EXTENSION_NAME: string;
    static VK_NV_PARTITIONED_ACCELERATION_STRUCTURE_SPEC_VERSION: number;
    static VK_PARTITIONED_ACCELERATION_STRUCTURE_INSTANCE_FLAG_ENABLE_EXPLICIT_BOUNDING_BOX_NV: number;
    static VK_PARTITIONED_ACCELERATION_STRUCTURE_INSTANCE_FLAG_FORCE_NO_OPAQUE_BIT_NV: number;
    static VK_PARTITIONED_ACCELERATION_STRUCTURE_INSTANCE_FLAG_FORCE_OPAQUE_BIT_NV: number;
    static VK_PARTITIONED_ACCELERATION_STRUCTURE_INSTANCE_FLAG_TRIANGLE_FACING_CULL_DISABLE_BIT_NV: number;
    static VK_PARTITIONED_ACCELERATION_STRUCTURE_INSTANCE_FLAG_TRIANGLE_FLIP_FACING_BIT_NV: number;
    static VK_PARTITIONED_ACCELERATION_STRUCTURE_OP_TYPE_UPDATE_INSTANCE_NV: number;
    static VK_PARTITIONED_ACCELERATION_STRUCTURE_OP_TYPE_WRITE_INSTANCE_NV: number;
    static VK_PARTITIONED_ACCELERATION_STRUCTURE_OP_TYPE_WRITE_PARTITION_TRANSLATION_NV: number;
    static VK_PARTITIONED_ACCELERATION_STRUCTURE_PARTITION_INDEX_GLOBAL_NV: number;
    static VK_STRUCTURE_TYPE_BUILD_PARTITIONED_ACCELERATION_STRUCTURE_INFO_NV: number;
    static VK_STRUCTURE_TYPE_PARTITIONED_ACCELERATION_STRUCTURE_FLAGS_NV: number;
    static VK_STRUCTURE_TYPE_PARTITIONED_ACCELERATION_STRUCTURE_INSTANCES_INPUT_NV: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_PARTITIONED_ACCELERATION_STRUCTURE_FEATURES_NV: number;
    static VK_STRUCTURE_TYPE_PHYSICAL_DEVICE_PARTITIONED_ACCELERATION_STRUCTURE_PROPERTIES_NV: number;
    static VK_STRUCTURE_TYPE_WRITE_DESCRIPTOR_SET_PARTITIONED_ACCELERATION_STRUCTURE_NV: number;
    static nvkCmdBuildPartitionedAccelerationStructuresNV(paramarg0: VkCommandBuffer, paramarg1: number): void;
    static nvkGetPartitionedAccelerationStructuresBuildSizesNV(paramarg0: VkDevice, paramarg1: number, paramarg2: number): void;
    static vkCmdBuildPartitionedAccelerationStructuresNV(paramarg0: VkCommandBuffer, paramarg1: VkBuildPartitionedAccelerationStructureInfoNV): void;
    static vkGetPartitionedAccelerationStructuresBuildSizesNV(paramarg0: VkDevice, paramarg1: VkPartitionedAccelerationStructureInstancesInputNV, paramarg2: VkAccelerationStructureBuildSizesInfoKHR): void;
    constructor()
}