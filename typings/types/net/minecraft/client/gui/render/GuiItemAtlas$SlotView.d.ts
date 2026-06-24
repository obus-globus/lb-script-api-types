import type { GpuTextureView } from '../../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class GuiItemAtlas$SlotView extends Record {
    constructor(textureView: GpuTextureView, u0: number, v0: number, u1: number, v1: number)
    // private textureView: GpuTextureView;
    // private u0: number;
    // private u1: number;
    // private v0: number;
    // private v1: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    textureView(): GpuTextureView;
    toString(): string;
    u0(): number;
    u1(): number;
    v0(): number;
    v1(): number;
}