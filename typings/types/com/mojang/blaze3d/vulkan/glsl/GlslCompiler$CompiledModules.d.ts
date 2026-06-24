import type { VulkanBindGroupLayout } from '../../../../../com/mojang/blaze3d/vulkan/VulkanBindGroupLayout.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class GlslCompiler$CompiledModules extends Record {
    constructor(vertex: number, fragment: number, layout: VulkanBindGroupLayout)
    // private fragment: number;
    // private layout: VulkanBindGroupLayout;
    // private vertex: number;
    equals(o: Object | null): boolean;
    fragment(): number;
    hashCode(): number;
    layout(): VulkanBindGroupLayout;
    toString(): string;
    vertex(): number;
}