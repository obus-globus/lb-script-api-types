import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class VulkanBindGroupLayout$VulkanBindGroupEntryType extends Enum<VulkanBindGroupLayout$VulkanBindGroupEntryType> {
    static SAMPLED_IMAGE: VulkanBindGroupLayout$VulkanBindGroupEntryType;
    static TEXEL_BUFFER: VulkanBindGroupLayout$VulkanBindGroupEntryType;
    static UNIFORM_BUFFER: VulkanBindGroupLayout$VulkanBindGroupEntryType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): VulkanBindGroupLayout$VulkanBindGroupEntryType;
    static values(): VulkanBindGroupLayout$VulkanBindGroupEntryType[];
    private constructor()
    name(): "UNIFORM_BUFFER" | "SAMPLED_IMAGE" | "TEXEL_BUFFER";
}