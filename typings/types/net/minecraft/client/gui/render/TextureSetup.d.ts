import type { GpuSampler } from '../../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { GpuTextureView } from '../../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TextureSetup extends Record {
    static doubleTexture(paramtexture0: GpuTextureView, paramsampler0: GpuSampler, paramtexture1: GpuTextureView, paramsampler1: GpuSampler): TextureSetup;
    static noTexture(): TextureSetup;
    static singleTexture(paramtexture: GpuTextureView, paramsampler: GpuSampler): TextureSetup;
    static singleTextureWithLightmap(paramtexture: GpuTextureView, paramsampler: GpuSampler): TextureSetup;
    static updateSortKeySeed(): void;
    constructor(texure0: GpuTextureView, texure1: GpuTextureView, texure2: GpuTextureView, sampler0: GpuSampler, sampler1: GpuSampler, sampler2: GpuSampler)
    // private sampler0: GpuSampler;
    // private sampler1: GpuSampler;
    // private sampler2: GpuSampler;
    // private texure0: GpuTextureView;
    // private texure1: GpuTextureView;
    // private texure2: GpuTextureView;
    equals(o: Object | null): boolean;
    getSortKey(): number;
    hashCode(): number;
    sampler0(): GpuSampler;
    sampler1(): GpuSampler;
    sampler2(): GpuSampler;
    texure0(): GpuTextureView;
    texure1(): GpuTextureView;
    texure2(): GpuTextureView;
    toString(): string;
}