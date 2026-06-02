import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FullScreenQuadRenderer extends Object {
    static INSTANCE: FullScreenQuadRenderer;
    static init(): number;
    private constructor()
    readonly quad: GpuBuffer;
    bind(): void;
    getQuad(): GpuBuffer;
}