import type { RenderPipeline } from '../../../../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { RenderTarget } from '../../../../../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { GpuTextureView } from '../../../../../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ChunkSectionLayer } from '../../../../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
export class TerrainRenderPass extends Object {
    constructor(arg0: ChunkSectionLayer, arg1: boolean, arg2: boolean)
    // private fragmentDiscard: boolean;
    // private isTranslucent: boolean;
    // private renderType: ChunkSectionLayer;
    getAtlas(): GpuTextureView;
    getPipeline(): RenderPipeline;
    getTarget(): RenderTarget;
    isTranslucent(): boolean;
    supportsFragmentDiscard(): boolean;
}