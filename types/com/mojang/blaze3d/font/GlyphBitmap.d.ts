import type { GpuTexture } from '../../../../com/mojang/blaze3d/textures/GpuTexture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface GlyphBitmap extends Object{
    getBearingLeft(): number;
    getBearingTop(): number;
    getBottom(): number;
    getLeft(): number;
    getOversample(): number;
    getPixelHeight(): number;
    getPixelWidth(): number;
    getRight(): number;
    getTop(): number;
    isColored(): boolean;
    upload(x: number, y: number, texture: GpuTexture): void;
}