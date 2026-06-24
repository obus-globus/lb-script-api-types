import type { GpuTextureView } from '../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RenderPassDescriptor$Attachment<T extends unknown> extends Record {
    constructor(textureView: GpuTextureView, clearValue: T)
    // private clearValue: T;
    // private textureView: GpuTextureView;
    clearValue(): T;
    equals(o: Object | null): boolean;
    hashCode(): number;
    textureView(): GpuTextureView;
    toString(): string;
}