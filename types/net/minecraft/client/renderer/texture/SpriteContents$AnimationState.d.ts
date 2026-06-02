import type { GpuBufferSlice } from '../../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { RenderPass } from '../../../../../com/mojang/blaze3d/systems/RenderPass.d.ts'
import type { GpuTextureView } from '../../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SpriteContentsTickerAccessor } from '../../../../../net/irisshaders/iris/mixin/texture/SpriteContentsTickerAccessor.d.ts'
import type { SpriteContents } from '../../../../../net/minecraft/client/renderer/texture/SpriteContents.d.ts'
import type { SpriteContents$AnimatedTexture } from '../../../../../net/minecraft/client/renderer/texture/SpriteContents$AnimatedTexture.d.ts'
export class SpriteContents$AnimationState extends Object implements AutoCloseable, SpriteContentsTickerAccessor {
    private constructor(null_: SpriteContents$AnimationState, frameTexturesByIndex: Int2ObjectMap<GpuTextureView>, spriteUbosByMip: GpuBufferSlice[])
    readonly animationInfo: SpriteContents$AnimatedTexture;
    readonly frame: number;
    // private frameTexturesByIndex: Int2ObjectMap<GpuTextureView>;
    // private hasUploadedAllOnce: boolean;
    // private isDirty: boolean;
    // private parent: SpriteContents;
    // private spriteUbosByMip: GpuBufferSlice[];
    readonly subFrame: number;
    // private wasActiveThisTick: boolean;
    close(): void;
    drawToAtlas(renderPass: RenderPass, ubo: GpuBufferSlice): void;
    getDrawUbo(level: number): GpuBufferSlice;
    needsToDraw(): boolean;
    tick(): void;
}