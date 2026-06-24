import type { RenderPipeline } from '../../../../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { RenderPass } from '../../../../../../../../com/mojang/blaze3d/systems/RenderPass.d.ts'
import type { DrawContext } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gpu/device/context/DrawContext.d.ts'
import type { RenderRegion } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/region/RenderRegion.d.ts'
import type { CameraTransform } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/viewport/CameraTransform.d.ts'
import type { VkCommandBuffer } from '../../../../../../../../org/lwjgl/vulkan/VkCommandBuffer.d.ts'
export abstract class VKDrawContext extends DrawContext {
    static PUSH_CONSTANT_RANGE: number;
    static create(): DrawContext;
    constructor()
    // private cmdBuf: VkCommandBuffer;
    // private layout: number;
    setContext(arg0: RenderPass, arg1: RenderPipeline): void;
    updateData(arg0: RenderRegion, arg1: CameraTransform): void;
}