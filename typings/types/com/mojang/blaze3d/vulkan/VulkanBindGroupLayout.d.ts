import type { VulkanBindGroupLayout$Entry } from '../../../../com/mojang/blaze3d/vulkan/VulkanBindGroupLayout$Entry.d.ts'
import type { VulkanDevice } from '../../../../com/mojang/blaze3d/vulkan/VulkanDevice.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class VulkanBindGroupLayout extends Record {
    static INVALID_LAYOUT: VulkanBindGroupLayout;
    static create(paramdevice: VulkanDevice, paramentries: VulkanBindGroupLayout$Entry[], paramname: string): VulkanBindGroupLayout;
    constructor(handle: number, entries: VulkanBindGroupLayout$Entry[])
    // private entries: VulkanBindGroupLayout$Entry[];
    // private handle: number;
    entries(): VulkanBindGroupLayout$Entry[];
    equals(o: Object | null): boolean;
    handle(): number;
    hashCode(): number;
    toString(): string;
}