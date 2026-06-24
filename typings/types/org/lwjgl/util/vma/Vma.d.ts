import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { PointerBuffer } from '../../../../org/lwjgl/PointerBuffer.d.ts'
import type { VmaAllocationCreateInfo } from '../../../../org/lwjgl/util/vma/VmaAllocationCreateInfo.d.ts'
import type { VmaAllocationInfo } from '../../../../org/lwjgl/util/vma/VmaAllocationInfo.d.ts'
import type { VmaAllocationInfo2 } from '../../../../org/lwjgl/util/vma/VmaAllocationInfo2.d.ts'
import type { VmaAllocatorCreateInfo } from '../../../../org/lwjgl/util/vma/VmaAllocatorCreateInfo.d.ts'
import type { VmaAllocatorInfo } from '../../../../org/lwjgl/util/vma/VmaAllocatorInfo.d.ts'
import type { VmaDefragmentationInfo } from '../../../../org/lwjgl/util/vma/VmaDefragmentationInfo.d.ts'
import type { VmaDefragmentationPassMoveInfo } from '../../../../org/lwjgl/util/vma/VmaDefragmentationPassMoveInfo.d.ts'
import type { VmaDefragmentationStats } from '../../../../org/lwjgl/util/vma/VmaDefragmentationStats.d.ts'
import type { VmaDetailedStatistics } from '../../../../org/lwjgl/util/vma/VmaDetailedStatistics.d.ts'
import type { VmaPoolCreateInfo } from '../../../../org/lwjgl/util/vma/VmaPoolCreateInfo.d.ts'
import type { VmaStatistics } from '../../../../org/lwjgl/util/vma/VmaStatistics.d.ts'
import type { VmaTotalStatistics } from '../../../../org/lwjgl/util/vma/VmaTotalStatistics.d.ts'
import type { VmaVirtualAllocationCreateInfo } from '../../../../org/lwjgl/util/vma/VmaVirtualAllocationCreateInfo.d.ts'
import type { VmaVirtualAllocationInfo } from '../../../../org/lwjgl/util/vma/VmaVirtualAllocationInfo.d.ts'
import type { VmaVirtualBlockCreateInfo } from '../../../../org/lwjgl/util/vma/VmaVirtualBlockCreateInfo.d.ts'
import type { VkBufferCreateInfo } from '../../../../org/lwjgl/vulkan/VkBufferCreateInfo.d.ts'
import type { VkImageCreateInfo } from '../../../../org/lwjgl/vulkan/VkImageCreateInfo.d.ts'
import type { VkMemoryRequirements } from '../../../../org/lwjgl/vulkan/VkMemoryRequirements.d.ts'
export class Vma extends Object {
    static VMA_ALLOCATION_CREATE_CAN_ALIAS_BIT: number;
    static VMA_ALLOCATION_CREATE_DEDICATED_MEMORY_BIT: number;
    static VMA_ALLOCATION_CREATE_DONT_BIND_BIT: number;
    static VMA_ALLOCATION_CREATE_HOST_ACCESS_ALLOW_TRANSFER_INSTEAD_BIT: number;
    static VMA_ALLOCATION_CREATE_HOST_ACCESS_RANDOM_BIT: number;
    static VMA_ALLOCATION_CREATE_HOST_ACCESS_SEQUENTIAL_WRITE_BIT: number;
    static VMA_ALLOCATION_CREATE_MAPPED_BIT: number;
    static VMA_ALLOCATION_CREATE_NEVER_ALLOCATE_BIT: number;
    static VMA_ALLOCATION_CREATE_STRATEGY_BEST_FIT_BIT: number;
    static VMA_ALLOCATION_CREATE_STRATEGY_MASK: number;
    static VMA_ALLOCATION_CREATE_STRATEGY_MIN_MEMORY_BIT: number;
    static VMA_ALLOCATION_CREATE_STRATEGY_MIN_OFFSET_BIT: number;
    static VMA_ALLOCATION_CREATE_STRATEGY_MIN_TIME_BIT: number;
    static VMA_ALLOCATION_CREATE_UPPER_ADDRESS_BIT: number;
    static VMA_ALLOCATION_CREATE_USER_DATA_COPY_STRING_BIT: number;
    static VMA_ALLOCATION_CREATE_WITHIN_BUDGET_BIT: number;
    static VMA_ALLOCATOR_CREATE_AMD_DEVICE_COHERENT_MEMORY_BIT: number;
    static VMA_ALLOCATOR_CREATE_BUFFER_DEVICE_ADDRESS_BIT: number;
    static VMA_ALLOCATOR_CREATE_EXTERNALLY_SYNCHRONIZED_BIT: number;
    static VMA_ALLOCATOR_CREATE_EXT_MEMORY_BUDGET_BIT: number;
    static VMA_ALLOCATOR_CREATE_EXT_MEMORY_PRIORITY_BIT: number;
    static VMA_ALLOCATOR_CREATE_KHR_BIND_MEMORY2_BIT: number;
    static VMA_ALLOCATOR_CREATE_KHR_DEDICATED_ALLOCATION_BIT: number;
    static VMA_ALLOCATOR_CREATE_KHR_EXTERNAL_MEMORY_WIN32_BIT: number;
    static VMA_ALLOCATOR_CREATE_KHR_MAINTENANCE4_BIT: number;
    static VMA_ALLOCATOR_CREATE_KHR_MAINTENANCE5_BIT: number;
    static VMA_DEFRAGMENTATION_FLAG_ALGORITHM_BALANCED_BIT: number;
    static VMA_DEFRAGMENTATION_FLAG_ALGORITHM_EXTENSIVE_BIT: number;
    static VMA_DEFRAGMENTATION_FLAG_ALGORITHM_FAST_BIT: number;
    static VMA_DEFRAGMENTATION_FLAG_ALGORITHM_FULL_BIT: number;
    static VMA_DEFRAGMENTATION_FLAG_ALGORITHM_MASK: number;
    static VMA_DEFRAGMENTATION_MOVE_OPERATION_COPY: number;
    static VMA_DEFRAGMENTATION_MOVE_OPERATION_DESTROY: number;
    static VMA_DEFRAGMENTATION_MOVE_OPERATION_IGNORE: number;
    static VMA_MEMORY_USAGE_AUTO: number;
    static VMA_MEMORY_USAGE_AUTO_PREFER_DEVICE: number;
    static VMA_MEMORY_USAGE_AUTO_PREFER_HOST: number;
    static VMA_MEMORY_USAGE_CPU_COPY: number;
    static VMA_MEMORY_USAGE_CPU_ONLY: number;
    static VMA_MEMORY_USAGE_CPU_TO_GPU: number;
    static VMA_MEMORY_USAGE_GPU_LAZILY_ALLOCATED: number;
    static VMA_MEMORY_USAGE_GPU_ONLY: number;
    static VMA_MEMORY_USAGE_GPU_TO_CPU: number;
    static VMA_MEMORY_USAGE_UNKNOWN: number;
    static VMA_POOL_CREATE_ALGORITHM_MASK: number;
    static VMA_POOL_CREATE_IGNORE_BUFFER_IMAGE_GRANULARITY_BIT: number;
    static VMA_POOL_CREATE_LINEAR_ALGORITHM_BIT: number;
    static VMA_VIRTUAL_ALLOCATION_CREATE_STRATEGY_MASK: number;
    static VMA_VIRTUAL_ALLOCATION_CREATE_STRATEGY_MIN_MEMORY_BIT: number;
    static VMA_VIRTUAL_ALLOCATION_CREATE_STRATEGY_MIN_OFFSET_BIT: number;
    static VMA_VIRTUAL_ALLOCATION_CREATE_STRATEGY_MIN_TIME_BIT: number;
    static VMA_VIRTUAL_ALLOCATION_CREATE_UPPER_ADDRESS_BIT: number;
    static VMA_VIRTUAL_BLOCK_CREATE_ALGORITHM_MASK: number;
    static VMA_VIRTUAL_BLOCK_CREATE_LINEAR_ALGORITHM_BIT: number;
    static VMA_VMA_ALLOCATION_CREATE_STRATEGY_FIRST_FIT_BIT: number;
    static nvmaAllocateMemory(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nvmaAllocateMemoryForBuffer(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nvmaAllocateMemoryForImage(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nvmaAllocateMemoryPages(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static nvmaBeginDefragmentation(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nvmaBeginDefragmentationPass(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nvmaBindBufferMemory(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nvmaBindBufferMemory2(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nvmaBindImageMemory(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nvmaBindImageMemory2(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nvmaBuildStatsString(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nvmaBuildVirtualBlockStatsString(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nvmaCalculatePoolStatistics(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nvmaCalculateStatistics(paramarg0: number, paramarg1: number): void;
    static nvmaCalculateVirtualBlockStatistics(paramarg0: number, paramarg1: number): void;
    static nvmaCheckCorruption(paramarg0: number, paramarg1: number): number;
    static nvmaCheckPoolCorruption(paramarg0: number, paramarg1: number): number;
    static nvmaClearVirtualBlock(paramarg0: number): void;
    static nvmaCopyAllocationToMemory(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nvmaCopyMemoryToAllocation(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nvmaCreateAliasingBuffer(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvmaCreateAliasingBuffer2(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nvmaCreateAliasingImage(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvmaCreateAliasingImage2(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nvmaCreateAllocator(paramarg0: number, paramarg1: number): number;
    static nvmaCreateBuffer(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static nvmaCreateBufferWithAlignment(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): number;
    static nvmaCreateImage(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static nvmaCreatePool(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nvmaCreateVirtualBlock(paramarg0: number, paramarg1: number): number;
    static nvmaDestroyAllocator(paramarg0: number): void;
    static nvmaDestroyBuffer(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nvmaDestroyImage(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nvmaDestroyPool(paramarg0: number, paramarg1: number): void;
    static nvmaDestroyVirtualBlock(paramarg0: number): void;
    static nvmaEndDefragmentation(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nvmaEndDefragmentationPass(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nvmaFindMemoryTypeIndex(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvmaFindMemoryTypeIndexForBufferInfo(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvmaFindMemoryTypeIndexForImageInfo(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvmaFlushAllocation(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nvmaFlushAllocations(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nvmaFreeMemory(paramarg0: number, paramarg1: number): void;
    static nvmaFreeMemoryPages(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nvmaFreeStatsString(paramarg0: number, paramarg1: number): void;
    static nvmaFreeVirtualBlockStatsString(paramarg0: number, paramarg1: number): void;
    static nvmaGetAllocationInfo(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nvmaGetAllocationInfo2(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nvmaGetAllocationMemoryProperties(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nvmaGetAllocatorInfo(paramarg0: number, paramarg1: number): void;
    static nvmaGetHeapBudgets(paramarg0: number, paramarg1: number): void;
    static nvmaGetMemoryProperties(paramarg0: number, paramarg1: number): void;
    static nvmaGetMemoryTypeProperties(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nvmaGetMemoryWin32Handle(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvmaGetPhysicalDeviceProperties(paramarg0: number, paramarg1: number): void;
    static nvmaGetPoolName(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nvmaGetPoolStatistics(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nvmaGetVirtualAllocationInfo(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nvmaGetVirtualBlockStatistics(paramarg0: number, paramarg1: number): void;
    static nvmaInvalidateAllocation(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nvmaInvalidateAllocations(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nvmaIsVirtualBlockEmpty(paramarg0: number): number;
    static nvmaMapMemory(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nvmaSetAllocationName(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nvmaSetAllocationUserData(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nvmaSetCurrentFrameIndex(paramarg0: number, paramarg1: number): void;
    static nvmaSetPoolName(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nvmaSetVirtualAllocationUserData(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nvmaUnmapMemory(paramarg0: number, paramarg1: number): void;
    static nvmaVirtualAllocate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvmaVirtualFree(paramarg0: number, paramarg1: number): void;
    static vmaAllocateMemory(paramarg0: number, paramarg1: VkMemoryRequirements, paramarg2: VmaAllocationCreateInfo, paramarg3: PointerBuffer, paramarg4: VmaAllocationInfo): number;
    static vmaAllocateMemoryForBuffer(paramarg0: number, paramarg1: number, paramarg2: VmaAllocationCreateInfo, paramarg3: PointerBuffer, paramarg4: VmaAllocationInfo): number;
    static vmaAllocateMemoryForImage(paramarg0: number, paramarg1: number, paramarg2: VmaAllocationCreateInfo, paramarg3: PointerBuffer, paramarg4: VmaAllocationInfo): number;
    static vmaAllocateMemoryPages(paramarg0: number, paramarg1: VkMemoryRequirements, paramarg2: VmaAllocationCreateInfo, paramarg3: PointerBuffer, paramarg4: (Object | null)[]): number;
    static vmaBeginDefragmentation(paramarg0: number, paramarg1: VmaDefragmentationInfo, paramarg2: PointerBuffer): number;
    static vmaBeginDefragmentationPass(paramarg0: number, paramarg1: number, paramarg2: VmaDefragmentationPassMoveInfo): number;
    static vmaBindBufferMemory(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static vmaBindBufferMemory2(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static vmaBindImageMemory(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static vmaBindImageMemory2(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static vmaBuildStatsString(paramarg0: number, paramarg1: PointerBuffer, paramarg2: boolean): void;
    static vmaBuildVirtualBlockStatsString(paramarg0: number, paramarg1: PointerBuffer, paramarg2: boolean): void;
    static vmaCalculatePoolStatistics(paramarg0: number, paramarg1: number, paramarg2: VmaDetailedStatistics): void;
    static vmaCalculateStatistics(paramarg0: number, paramarg1: VmaTotalStatistics): void;
    static vmaCalculateVirtualBlockStatistics(paramarg0: number, paramarg1: VmaDetailedStatistics): void;
    static vmaCheckCorruption(paramarg0: number, paramarg1: number): number;
    static vmaCheckPoolCorruption(paramarg0: number, paramarg1: number): number;
    static vmaClearVirtualBlock(paramarg0: number): void;
    static vmaCopyAllocationToMemory(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: ByteBuffer): number;
    static vmaCopyMemoryToAllocation(paramarg0: number, paramarg1: ByteBuffer, paramarg2: number, paramarg3: number): number;
    static vmaCreateAliasingBuffer(paramarg0: number, paramarg1: number, paramarg2: VkBufferCreateInfo, paramarg3: LongBuffer): number;
    static vmaCreateAliasingBuffer2(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: VkBufferCreateInfo, paramarg4: LongBuffer): number;
    static vmaCreateAliasingImage(paramarg0: number, paramarg1: number, paramarg2: VkImageCreateInfo, paramarg3: LongBuffer): number;
    static vmaCreateAliasingImage2(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: VkImageCreateInfo, paramarg4: LongBuffer): number;
    static vmaCreateAllocator(paramarg0: VmaAllocatorCreateInfo, paramarg1: PointerBuffer): number;
    static vmaCreateBuffer(paramarg0: number, paramarg1: VkBufferCreateInfo, paramarg2: VmaAllocationCreateInfo, paramarg3: LongBuffer, paramarg4: PointerBuffer, paramarg5: VmaAllocationInfo): number;
    static vmaCreateBufferWithAlignment(paramarg0: number, paramarg1: VkBufferCreateInfo, paramarg2: VmaAllocationCreateInfo, paramarg3: number, paramarg4: LongBuffer, paramarg5: PointerBuffer, paramarg6: VmaAllocationInfo): number;
    static vmaCreateImage(paramarg0: number, paramarg1: VkImageCreateInfo, paramarg2: VmaAllocationCreateInfo, paramarg3: LongBuffer, paramarg4: PointerBuffer, paramarg5: VmaAllocationInfo): number;
    static vmaCreatePool(paramarg0: number, paramarg1: VmaPoolCreateInfo, paramarg2: PointerBuffer): number;
    static vmaCreateVirtualBlock(paramarg0: VmaVirtualBlockCreateInfo, paramarg1: PointerBuffer): number;
    static vmaDestroyAllocator(paramarg0: number): void;
    static vmaDestroyBuffer(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static vmaDestroyImage(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static vmaDestroyPool(paramarg0: number, paramarg1: number): void;
    static vmaDestroyVirtualBlock(paramarg0: number): void;
    static vmaEndDefragmentation(paramarg0: number, paramarg1: number, paramarg2: VmaDefragmentationStats): void;
    static vmaEndDefragmentationPass(paramarg0: number, paramarg1: number, paramarg2: VmaDefragmentationPassMoveInfo): number;
    static vmaFindMemoryTypeIndex(paramarg0: number, paramarg1: number, paramarg2: VmaAllocationCreateInfo, paramarg3: IntBuffer): number;
    static vmaFindMemoryTypeIndexForBufferInfo(paramarg0: number, paramarg1: VkBufferCreateInfo, paramarg2: VmaAllocationCreateInfo, paramarg3: IntBuffer): number;
    static vmaFindMemoryTypeIndexForImageInfo(paramarg0: number, paramarg1: VkImageCreateInfo, paramarg2: VmaAllocationCreateInfo, paramarg3: IntBuffer): number;
    static vmaFlushAllocation(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static vmaFlushAllocations(paramarg0: number, paramarg1: PointerBuffer, paramarg2: LongBuffer, paramarg3: LongBuffer): number;
    static vmaFreeMemory(paramarg0: number, paramarg1: number): void;
    static vmaFreeMemoryPages(paramarg0: number, paramarg1: PointerBuffer): void;
    static vmaFreeStatsString(paramarg0: number, paramarg1: ByteBuffer): void;
    static vmaFreeVirtualBlockStatsString(paramarg0: number, paramarg1: ByteBuffer): void;
    static vmaGetAllocationInfo(paramarg0: number, paramarg1: number, paramarg2: VmaAllocationInfo): void;
    static vmaGetAllocationInfo2(paramarg0: number, paramarg1: number, paramarg2: VmaAllocationInfo2): void;
    static vmaGetAllocationMemoryProperties(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static vmaGetAllocatorInfo(paramarg0: number, paramarg1: VmaAllocatorInfo): void;
    static vmaGetHeapBudgets(paramarg0: number, paramarg1: (Object | null)[]): void;
    static vmaGetMemoryProperties(paramarg0: number, paramarg1: PointerBuffer): void;
    static vmaGetMemoryTypeProperties(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static vmaGetMemoryWin32Handle(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: PointerBuffer): number;
    static vmaGetPhysicalDeviceProperties(paramarg0: number, paramarg1: PointerBuffer): void;
    static vmaGetPoolName(paramarg0: number, paramarg1: number, paramarg2: PointerBuffer): void;
    static vmaGetPoolStatistics(paramarg0: number, paramarg1: number, paramarg2: VmaStatistics): void;
    static vmaGetVirtualAllocationInfo(paramarg0: number, paramarg1: number, paramarg2: VmaVirtualAllocationInfo): void;
    static vmaGetVirtualBlockStatistics(paramarg0: number, paramarg1: VmaStatistics): void;
    static vmaInvalidateAllocation(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static vmaInvalidateAllocations(paramarg0: number, paramarg1: PointerBuffer, paramarg2: LongBuffer, paramarg3: LongBuffer): number;
    static vmaIsVirtualBlockEmpty(paramarg0: number): boolean;
    static vmaMapMemory(paramarg0: number, paramarg1: number, paramarg2: PointerBuffer): number;
    static vmaSetAllocationName(paramarg0: number, paramarg1: number, paramarg2: CharSequence): void;
    static vmaSetAllocationName(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer): void;
    static vmaSetAllocationUserData(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static vmaSetCurrentFrameIndex(paramarg0: number, paramarg1: number): void;
    static vmaSetPoolName(paramarg0: number, paramarg1: number, paramarg2: CharSequence): void;
    static vmaSetPoolName(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer): void;
    static vmaSetVirtualAllocationUserData(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static vmaUnmapMemory(paramarg0: number, paramarg1: number): void;
    static vmaVirtualAllocate(paramarg0: number, paramarg1: VmaVirtualAllocationCreateInfo, paramarg2: PointerBuffer, paramarg3: LongBuffer): number;
    static vmaVirtualFree(paramarg0: number, paramarg1: number): void;
    constructor()
}