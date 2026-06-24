import type { GpuSampler } from '../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { GpuTextureView } from '../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PostPass$InputTexture extends Record {
    private constructor(samplerName: string, view: GpuTextureView, sampler: GpuSampler)
    // private sampler: GpuSampler;
    // private samplerName: string;
    // private view: GpuTextureView;
    equals(o: Object | null): boolean;
    hashCode(): number;
    sampler(): GpuSampler;
    samplerName(): string;
    toString(): string;
    view(): GpuTextureView;
}