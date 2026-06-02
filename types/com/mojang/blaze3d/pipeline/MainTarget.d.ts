import type { MainTarget$Dimension } from '../../../../com/mojang/blaze3d/pipeline/MainTarget$Dimension.d.ts'
import type { RenderTarget } from '../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { GpuTexture } from '../../../../com/mojang/blaze3d/textures/GpuTexture.d.ts'
export class MainTarget extends RenderTarget {
    static DEFAULT_HEIGHT: number;
    static DEFAULT_WIDTH: number;
    constructor(desiredWidth: number, desiredHeight: number)
    // private allocateAttachments(width: number, height: number): MainTarget$Dimension;
    // private allocateColorAttachment(dimension: MainTarget$Dimension): GpuTexture;
    // private allocateDepthAttachment(dimension: MainTarget$Dimension): GpuTexture;
    // private createFrameBuffer(desiredWidth: number, desiredHeight: number): void;
}