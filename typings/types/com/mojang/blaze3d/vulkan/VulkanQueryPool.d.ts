import type { GpuQueryPool } from '../../../../com/mojang/blaze3d/systems/GpuQueryPool.d.ts'
import type { Destroyable } from '../../../../com/mojang/blaze3d/vulkan/Destroyable.d.ts'
import type { VulkanDevice } from '../../../../com/mojang/blaze3d/vulkan/VulkanDevice.d.ts'
import type { OptionalLong } from '../../../../java/util/OptionalLong.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class VulkanQueryPool extends Object implements GpuQueryPool, Destroyable {
    constructor(device: VulkanDevice, size: number)
    // private device: VulkanDevice;
    // private size: number;
    // private vkQueryPool: number;
    close(): void;
    destroy(): void;
    getValue(index: number): OptionalLong;
    getValues(index: number, count: number): OptionalLong[];
    size(): number;
    vkQueryPool(): number;
}