import type { GpuFormat } from '../../../../com/mojang/blaze3d/GpuFormat.d.ts'
import type { RenderTarget } from '../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
export class TextureTarget extends RenderTarget {
    constructor(label: string, width: number, height: number, useDepth: boolean, format: GpuFormat)
}