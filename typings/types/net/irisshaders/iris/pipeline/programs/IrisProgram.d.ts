import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { GlRenderPass$TextureViewAndSampler } from '../../../../../com/mojang/blaze3d/opengl/GlRenderPass$TextureViewAndSampler.d.ts'
import type { GpuTextureView } from '../../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export interface IrisProgram extends Object{
    iris$clearState(): void;
    iris$getBlockIndex(arg0: number, arg1: CharSequence): number;
    iris$isSetUp(): boolean;
    iris$setupState(arg0: JavaMap<string, GlRenderPass$TextureViewAndSampler>, arg1: GpuTextureView): void;
}