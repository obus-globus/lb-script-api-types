import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { GpuBufferSlice$MappedView } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice$MappedView.d.ts'
import type { TransientMemory } from '../../../../com/mojang/blaze3d/systems/TransientMemory.d.ts'
import type { TransientBlockAllocator } from '../../../../com/mojang/blaze3d/util/TransientBlockAllocator.d.ts'
import type { Destroyable } from '../../../../com/mojang/blaze3d/vulkan/Destroyable.d.ts'
import type { VulkanCommandEncoder } from '../../../../com/mojang/blaze3d/vulkan/VulkanCommandEncoder.d.ts'
import type { VulkanDevice } from '../../../../com/mojang/blaze3d/vulkan/VulkanDevice.d.ts'
import type { VulkanTransientMemory$VulkanAllocation } from '../../../../com/mojang/blaze3d/vulkan/VulkanTransientMemory$VulkanAllocation.d.ts'
import type { Pair } from '../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { VkCommandBuffer } from '../../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
export class VulkanTransientMemory extends Object implements TransientMemory, Destroyable {
    constructor(device: VulkanDevice, encoder: VulkanCommandEncoder)
    // private anyCommandRecorded: boolean;
    // private commandBuffer: VkCommandBuffer;
    // private cpuBlockAllocator: TransientBlockAllocator<number>;
    // private device: VulkanDevice;
    // private encoder: VulkanCommandEncoder;
    // private gpuBlockAllocator: TransientBlockAllocator<VulkanTransientMemory$VulkanAllocation>;
    // private gpuMappedBlockAllocator: TransientBlockAllocator<Pair<VulkanTransientMemory$VulkanAllocation, VulkanTransientMemory$VulkanAllocation>>;
    // private stagingBlockAllocator: TransientBlockAllocator<VulkanTransientMemory$VulkanAllocation>;
    // private submitIndex: number;
    // private useDeviceMemoryForMappedGpuStaging: boolean;
    allocateCpu(size: number, alignment: number): ByteBuffer;
    allocateCpu(size: number, alignment: number, minimumAllocation: number, elementSize: number): ByteBuffer;
    allocateGpu(size: number, alignment: number, usage: number): GpuBufferSlice;
    allocateGpu(size: number, alignment: number, usage: number, minimumAllocation: number, elementSize: number): GpuBufferSlice;
    allocateGpuMapped(size: number, alignment: number, usage: number): GpuBufferSlice$MappedView;
    allocateGpuMapped(size: number, alignment: number, usage: number, minimumAllocation: number, elementSize: number): GpuBufferSlice$MappedView;
    // private allocateGpuMappedVulkanBlock(size: number): Pair<VulkanTransientMemory$VulkanAllocation, VulkanTransientMemory$VulkanAllocation>;
    allocateStaging(size: number, alignment: number, usage: number): GpuBufferSlice$MappedView;
    allocateStaging(size: number, alignment: number, usage: number, minimumAllocation: number, elementSize: number): GpuBufferSlice$MappedView;
    // private allocateVulkanBlock(size: number, staging: boolean): VulkanTransientMemory$VulkanAllocation;
    beginSubmit(): void;
    destroy(): void;
    endSubmit(): void;
    // private freeGpuMappedVulkanBlock(allocations: Pair<VulkanTransientMemory$VulkanAllocation, VulkanTransientMemory$VulkanAllocation>): void;
    // private freeVulkanBlock(allocation: VulkanTransientMemory$VulkanAllocation): void;
    multiUpload(data: ByteBuffer[], alignment: number, usage: number, staging: boolean): GpuBufferSlice[];
    multiUploadGpu(data: ByteBuffer[], alignment: number, usage: number): GpuBufferSlice[];
    multiUploadStaging(data: ByteBuffer[], alignment: number, usage: number): GpuBufferSlice[];
    // private queueFreeVulkanBlock(allocation: VulkanTransientMemory$VulkanAllocation): void;
    // private recordGpuMappedCopy(block: Pair<VulkanTransientMemory$VulkanAllocation, VulkanTransientMemory$VulkanAllocation>): void;
    upload(data: ByteBuffer[], alignment: number, usage: number, minimumAllocation: number, elementSize: number, staging: boolean): GpuBufferSlice;
    uploadGpu(data: ByteBuffer, alignment: number, usage: number): GpuBufferSlice;
    uploadGpu(data: ByteBuffer, alignment: number, usage: number, minimumAllocation: number, elementSize: number): GpuBufferSlice;
    uploadGpu(data: ByteBuffer[], alignment: number, usage: number): GpuBufferSlice;
    uploadGpu(data: ByteBuffer[], alignment: number, usage: number, minimumAllocation: number, elementSize: number): GpuBufferSlice;
    uploadStaging(data: ByteBuffer, alignment: number, usage: number): GpuBufferSlice;
    uploadStaging(data: ByteBuffer, alignment: number, usage: number, minimumAllocation: number, elementSize: number): GpuBufferSlice;
    uploadStaging(data: ByteBuffer[], alignment: number, usage: number): GpuBufferSlice;
    uploadStaging(data: ByteBuffer[], alignment: number, usage: number, minimumAllocation: number, elementSize: number): GpuBufferSlice;
}