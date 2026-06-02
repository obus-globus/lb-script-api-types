import type { FramePass } from '../../../../com/mojang/blaze3d/framegraph/FramePass.d.ts'
import type { RenderTarget } from '../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { ResourceHandle } from '../../../../com/mojang/blaze3d/resource/ResourceHandle.d.ts'
import type { GpuTextureView } from '../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PostPass$Input } from '../../../../net/minecraft/client/renderer/PostPass$Input.d.ts'
import type { AbstractTexture } from '../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class PostPass$TextureInput extends Record implements PostPass$Input {
    // private bilinear: boolean;
    // private height: number;
    // private samplerName: string;
    // private texture: AbstractTexture;
    // private width: number;
    addToPass(pass: FramePass, targets: Map<Identifier, ResourceHandle<RenderTarget>>): void;
    bilinear(): boolean;
    cleanup(targets: Map<Identifier, ResourceHandle<RenderTarget>>): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    height(): number;
    samplerName(): string;
    texture(): AbstractTexture;
    texture(targets: Map<Identifier, ResourceHandle<RenderTarget>>): GpuTextureView;
    toString(): string;
    width(): number;
}