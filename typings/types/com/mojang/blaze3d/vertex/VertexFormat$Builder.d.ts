import type { GpuFormat } from '../../../../com/mojang/blaze3d/GpuFormat.d.ts'
import type { VertexFormat } from '../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { VertexFormatElement } from '../../../../com/mojang/blaze3d/vertex/VertexFormatElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class VertexFormat$Builder extends Object {
    private constructor(stepRate: number)
    // private elements: VertexFormatElement[];
    // private offset: number;
    // private stepRate: number;
    addAttribute(name: string, elementFormat: GpuFormat): VertexFormat$Builder;
    addAttribute(name: string, elementFormat: GpuFormat, columnCount: number): VertexFormat$Builder;
    addAttribute(name: string, stride: number, elementFormat: GpuFormat): VertexFormat$Builder;
    addAttribute(name: string, offset: number, stride: number, elementFormat: GpuFormat, columnCount: number): VertexFormat$Builder;
    build(): VertexFormat;
    // private createAttribute(name: string, offset: number, elementFormat: GpuFormat): void;
    // private validateUniqueName(name: string): void;
}