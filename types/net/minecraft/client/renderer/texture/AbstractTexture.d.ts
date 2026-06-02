import type { GpuSampler } from '../../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { GpuTexture } from '../../../../../com/mojang/blaze3d/textures/GpuTexture.d.ts'
import type { GpuTextureView } from '../../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractTextureExtended } from '../../../../../net/irisshaders/iris/mixinterface/AbstractTextureExtended.d.ts'
import type { CallbackInfo } from '../../../../../org/spongepowered/asm/mixin/injection/callback/CallbackInfo.d.ts'
export abstract class AbstractTexture extends Object implements AutoCloseable, AbstractTextureExtended {
    constructor()
    // private lastChecked: GpuTexture;
    sampler: GpuSampler;
    texture: GpuTexture;
    textureView: GpuTextureView;
    close(): void;
    getSampler(): GpuSampler;
    getTexture(): GpuTexture;
    getTextureView(): GpuTextureView;
    // private iris$setFilter(arg0: boolean, arg1: boolean, arg2: CallbackInfo): void;
    // private onSet(arg0: boolean, arg1: boolean): void;
}