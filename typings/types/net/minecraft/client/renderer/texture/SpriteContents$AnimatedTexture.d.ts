import type { GpuBufferSlice } from '../../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SpriteContentsAnimatedTextureAccessor } from '../../../../../net/irisshaders/iris/mixin/texture/SpriteContentsAnimatedTextureAccessor.d.ts'
import type { SpriteContents$AnimationState } from '../../../../../net/minecraft/client/renderer/texture/SpriteContents$AnimationState.d.ts'
import type { SpriteContents$FrameInfo } from '../../../../../net/minecraft/client/renderer/texture/SpriteContents$FrameInfo.d.ts'
export class SpriteContents$AnimatedTexture extends Object implements SpriteContentsAnimatedTextureAccessor {
    private constructor(null_: SpriteContents$AnimatedTexture, frameRowSize: number, interpolateFrames: boolean)
    // private frameRowSize: number;
    readonly frames: SpriteContents$FrameInfo[];
    interpolateFrames: boolean;
    readonly uniqueFrames: (Object | null)[];
    createAnimationState(uboSlice: GpuBufferSlice, spriteUboSize: number): SpriteContents$AnimationState;
    // private getFrameX(index: number): number;
    // private getFrameY(index: number): number;
    getUniqueFrames(): (Object | null)[];
}