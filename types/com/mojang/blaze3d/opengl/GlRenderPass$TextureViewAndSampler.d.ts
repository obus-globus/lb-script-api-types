import type { GlSampler } from '../../../../com/mojang/blaze3d/opengl/GlSampler.d.ts'
import type { GlTextureView } from '../../../../com/mojang/blaze3d/opengl/GlTextureView.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GlRenderPass$TextureViewAndSampler extends Record {
    constructor(view: GlTextureView, sampler: GlSampler)
    // private sampler: GlSampler;
    // private view: GlTextureView;
    equals(o: Object | null): boolean;
    hashCode(): number;
    sampler(): GlSampler;
    toString(): string;
    view(): GlTextureView;
}