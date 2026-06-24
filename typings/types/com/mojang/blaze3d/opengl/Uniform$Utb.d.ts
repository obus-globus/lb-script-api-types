import type { GpuFormat } from '../../../../com/mojang/blaze3d/GpuFormat.d.ts'
import type { Uniform } from '../../../../com/mojang/blaze3d/opengl/Uniform.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Uniform$Utb extends Record implements Uniform {
    constructor(location: number, samplerIndex: number, format: GpuFormat)
    constructor(location: number, samplerIndex: number, format: GpuFormat, texture: number)
    // private format: GpuFormat;
    // private location: number;
    // private samplerIndex: number;
    // private texture: number;
    close(): void;
    equals(o: Object | null): boolean;
    format(): GpuFormat;
    hashCode(): number;
    location(): number;
    samplerIndex(): number;
    texture(): number;
    toString(): string;
}