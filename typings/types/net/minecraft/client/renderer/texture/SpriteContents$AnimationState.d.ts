import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { GpuBufferSlice } from '../../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { RenderPass } from '../../../../../com/mojang/blaze3d/systems/RenderPass.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SpriteContentsTickerAccessor } from '../../../../../net/irisshaders/iris/mixin/texture/SpriteContentsTickerAccessor.d.ts'
import type { SpriteContents } from '../../../../../net/minecraft/client/renderer/texture/SpriteContents.d.ts'
import type { SpriteContents$AnimatedTexture } from '../../../../../net/minecraft/client/renderer/texture/SpriteContents$AnimatedTexture.d.ts'
export class SpriteContents$AnimationState extends Object implements AutoCloseable, SpriteContentsTickerAccessor {
    private constructor(null_: SpriteContents, animationInfo: SpriteContents$AnimatedTexture, frameTexturesByIndex: JavaMap<any, any>, spriteUbosByMip: GpuBufferSlice[])
    readonly animationInfo: SpriteContents$AnimatedTexture;
    readonly frame: number;
    // private frameTexturesByIndex: JavaMap<any, any>;
    // private hasUploadedAllOnce: boolean;
    // private isDirty: boolean;
    // private parent: SpriteContents;
    // private spriteUbosByMip: GpuBufferSlice[];
    readonly subFrame: number;
    // private wasActiveThisTick: boolean;
    close(): void;
    drawToAtlas(renderPass: RenderPass, ubo: GpuBufferSlice): void;
    getAnimationInfo(): SpriteContents$AnimatedTexture;
    getDrawUbo(level: number): GpuBufferSlice;
    getFrame(): number;
    getSubFrame(): number;
    needsToDraw(): boolean;
    setFrame(arg0: number): void;
    setSubFrame(arg0: number): void;
    tick(): void;
}