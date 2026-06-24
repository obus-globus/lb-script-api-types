import type { GpuTextureView } from '../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RenderPass$RenderArea extends Record {
    constructor(x: number, y: number, width: number, height: number)
    // private height: number;
    // private width: number;
    // private x: number;
    // private y: number;
    equals(o: Object | null): boolean;
    fillsTexture(texture: GpuTextureView): boolean;
    hashCode(): number;
    height(): number;
    toString(): string;
    width(): number;
    x(): number;
    y(): number;
}