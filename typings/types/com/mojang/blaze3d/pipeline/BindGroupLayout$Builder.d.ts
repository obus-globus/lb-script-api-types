import type { GpuFormat } from '../../../../com/mojang/blaze3d/GpuFormat.d.ts'
import type { BindGroupLayout } from '../../../../com/mojang/blaze3d/pipeline/BindGroupLayout.d.ts'
import type { BindGroupLayout$UniformDescription } from '../../../../com/mojang/blaze3d/pipeline/BindGroupLayout$UniformDescription.d.ts'
import type { UniformType } from '../../../../com/mojang/blaze3d/shaders/UniformType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BindGroupLayout$Builder extends Object {
    private constructor()
    // private samplers: string[];
    // private uniforms: BindGroupLayout$UniformDescription[];
    build(): BindGroupLayout;
    withSampler(sampler: string): BindGroupLayout$Builder;
    withUniform(name: string, type: UniformType): BindGroupLayout$Builder;
    withUniform(name: string, type: UniformType, format: GpuFormat): BindGroupLayout$Builder;
}