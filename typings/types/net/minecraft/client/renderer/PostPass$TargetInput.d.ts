import type { FramePass } from '../../../../com/mojang/blaze3d/framegraph/FramePass.d.ts'
import type { RenderTarget } from '../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { ResourceHandle } from '../../../../com/mojang/blaze3d/resource/ResourceHandle.d.ts'
import type { GpuTextureView } from '../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PostPass$Input } from '../../../../net/minecraft/client/renderer/PostPass$Input.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class PostPass$TargetInput extends Record implements PostPass$Input {
    constructor(samplerName: string, targetId: Identifier, depthBuffer: boolean, bilinear: boolean)
    // private bilinear: boolean;
    // private depthBuffer: boolean;
    // private samplerName: string;
    // private targetId: Identifier;
    addToPass(pass: FramePass, targets: Map<Identifier, ResourceHandle<RenderTarget>>): void;
    bilinear(): boolean;
    cleanup(targets: Map<Identifier, ResourceHandle<RenderTarget>>): void;
    depthBuffer(): boolean;
    equals(o: Object | null): boolean;
    // private getHandle(targets: Map<Identifier, ResourceHandle<RenderTarget>>): ResourceHandle<RenderTarget>;
    hashCode(): number;
    samplerName(): string;
    targetId(): Identifier;
    texture(targets: Map<Identifier, ResourceHandle<RenderTarget>>): GpuTextureView;
    toString(): string;
}