import type { BindGroupLayout$Builder } from '../../../../com/mojang/blaze3d/pipeline/BindGroupLayout$Builder.d.ts'
import type { BindGroupLayout$UniformDescription } from '../../../../com/mojang/blaze3d/pipeline/BindGroupLayout$UniformDescription.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BindGroupLayout extends Object {
    static builder(): BindGroupLayout$Builder;
    static ensureCompatible(parambindGroupLayouts: BindGroupLayout[]): void;
    static flattenSamplers(parambindGroupLayouts: BindGroupLayout[]): string[];
    static flattenUniforms(parambindGroupLayouts: BindGroupLayout[]): BindGroupLayout$UniformDescription[];
    private constructor(samplers: string[], uniforms: BindGroupLayout$UniformDescription[])
    readonly samplers: string[];
    readonly uniforms: BindGroupLayout$UniformDescription[];
    getSamplers(): string[];
    getUniforms(): BindGroupLayout$UniformDescription[];
}