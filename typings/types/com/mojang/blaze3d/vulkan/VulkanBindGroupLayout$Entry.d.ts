import type { GpuFormat } from '../../../../com/mojang/blaze3d/GpuFormat.d.ts'
import type { VulkanBindGroupLayout$VulkanBindGroupEntryType } from '../../../../com/mojang/blaze3d/vulkan/VulkanBindGroupLayout$VulkanBindGroupEntryType.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class VulkanBindGroupLayout$Entry extends Record {
    constructor(type: VulkanBindGroupLayout$VulkanBindGroupEntryType, name: string, texelBufferFormat: GpuFormat)
    // private name: string;
    // private texelBufferFormat: GpuFormat;
    // private type: VulkanBindGroupLayout$VulkanBindGroupEntryType;
    equals(o: Object | null): boolean;
    hashCode(): number;
    name(): string;
    texelBufferFormat(): GpuFormat;
    toString(): string;
    type(): VulkanBindGroupLayout$VulkanBindGroupEntryType;
}