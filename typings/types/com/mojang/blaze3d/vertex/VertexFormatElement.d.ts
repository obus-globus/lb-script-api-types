import type { GpuFormat } from '../../../../com/mojang/blaze3d/GpuFormat.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class VertexFormatElement extends Record {
    constructor(name: string, offset: number, format: GpuFormat)
    // private format: GpuFormat;
    // private name: string;
    // private offset: number;
    equals(o: Object | null): boolean;
    format(): GpuFormat;
    hashCode(): number;
    name(): string;
    offset(): number;
    toString(): string;
}