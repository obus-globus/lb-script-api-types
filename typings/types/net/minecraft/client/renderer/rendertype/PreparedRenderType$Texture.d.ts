import type { GpuSampler } from '../../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { GpuTextureView } from '../../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PreparedRenderType$Texture extends Record {
    constructor(name: string, textureView: GpuTextureView, sampler: GpuSampler)
    // private name: string;
    // private sampler: GpuSampler;
    // private textureView: GpuTextureView;
    equals(o: Object | null): boolean;
    hashCode(): number;
    name(): string;
    sampler(): GpuSampler;
    textureView(): GpuTextureView;
    toString(): string;
}