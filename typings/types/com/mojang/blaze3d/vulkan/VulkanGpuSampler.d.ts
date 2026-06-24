import type { AddressMode } from '../../../../com/mojang/blaze3d/textures/AddressMode.d.ts'
import type { FilterMode } from '../../../../com/mojang/blaze3d/textures/FilterMode.d.ts'
import type { GpuSampler } from '../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { Destroyable } from '../../../../com/mojang/blaze3d/vulkan/Destroyable.d.ts'
import type { VulkanDevice } from '../../../../com/mojang/blaze3d/vulkan/VulkanDevice.d.ts'
import type { OptionalDouble } from '../../../../java/util/OptionalDouble.d.ts'
export class VulkanGpuSampler extends GpuSampler implements Destroyable {
    constructor(device: VulkanDevice, addressModeU: AddressMode, addressModeV: AddressMode, minFilter: FilterMode, magFilter: FilterMode, maxAnisotropy: number, maxLod: OptionalDouble)
    readonly addressModeU: AddressMode;
    readonly addressModeV: AddressMode;
    // private closed: boolean;
    // private device: VulkanDevice;
    readonly magFilter: FilterMode;
    readonly maxAnisotropy: number;
    readonly maxLod: OptionalDouble;
    readonly minFilter: FilterMode;
    // private vkSampler: number;
    close(): void;
    destroy(): void;
    getAddressModeU(): AddressMode;
    getAddressModeV(): AddressMode;
    getMagFilter(): FilterMode;
    getMaxAnisotropy(): number;
    getMaxLod(): OptionalDouble;
    getMinFilter(): FilterMode;
    vkSampler(): number;
}