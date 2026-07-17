import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { FramePass } from '../../../../com/mojang/blaze3d/framegraph/FramePass.d.ts'
import type { RenderTarget } from '../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { ResourceHandle } from '../../../../com/mojang/blaze3d/resource/ResourceHandle.d.ts'
import type { GpuTextureView } from '../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export interface PostPass$Input extends Object{
    addToPass(pass: FramePass, targets: JavaMap<Identifier, ResourceHandle<RenderTarget>>): void;
    bilinear(): boolean;
    cleanup(targets: JavaMap<Identifier, ResourceHandle<RenderTarget>>): void;
    samplerName(): string;
    texture(targets: JavaMap<Identifier, ResourceHandle<RenderTarget>>): GpuTextureView;
}