import type { CompiledRenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/CompiledRenderPipeline.d.ts'
import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { Destroyable } from '../../../../com/mojang/blaze3d/vulkan/Destroyable.d.ts'
import type { VulkanBindGroupLayout } from '../../../../com/mojang/blaze3d/vulkan/VulkanBindGroupLayout.d.ts'
import type { VulkanDevice } from '../../../../com/mojang/blaze3d/vulkan/VulkanDevice.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class VulkanRenderPipeline extends Record implements CompiledRenderPipeline, Destroyable {
    static INVALID_PIPELINE: number;
    static compile(paramdevice: VulkanDevice, paramlayout: VulkanBindGroupLayout, parampipeline: RenderPipeline, paramvertexModule: number, paramfragmentModule: number): VulkanRenderPipeline;
    constructor(info: RenderPipeline, device: VulkanDevice, withDepthPipeline: number, withoutDepthPipeline: number, pipelineLayout: number, layout: VulkanBindGroupLayout, vertexModule: number, fragmentModule: number)
    // private device: VulkanDevice;
    // private fragmentModule: number;
    // private info: RenderPipeline;
    // private layout: VulkanBindGroupLayout;
    // private pipelineLayout: number;
    // private vertexModule: number;
    // private withDepthPipeline: number;
    // private withoutDepthPipeline: number;
    destroy(): void;
    device(): VulkanDevice;
    equals(o: Object | null): boolean;
    fragmentModule(): number;
    hashCode(): number;
    info(): RenderPipeline;
    isValid(): boolean;
    layout(): VulkanBindGroupLayout;
    pipelineLayout(): number;
    toString(): string;
    vertexModule(): number;
    withDepthPipeline(): number;
    withoutDepthPipeline(): number;
}