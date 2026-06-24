import type { GpuFormat } from '../../../../com/mojang/blaze3d/GpuFormat.d.ts'
import type { UniformType } from '../../../../com/mojang/blaze3d/shaders/UniformType.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BindGroupLayout$UniformDescription extends Record {
    constructor(name: string, gpuFormat: GpuFormat)
    constructor(name: string, type: UniformType)
    constructor(name: string, type: UniformType, gpuFormat: GpuFormat)
    // private gpuFormat: GpuFormat;
    // private name: string;
    // private type: UniformType;
    equals(o: Object | null): boolean;
    gpuFormat(): GpuFormat;
    hashCode(): number;
    name(): string;
    toString(): string;
    type(): UniformType;
}