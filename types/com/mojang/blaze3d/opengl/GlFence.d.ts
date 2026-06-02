import type { GpuFence } from '../../../../com/mojang/blaze3d/buffers/GpuFence.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GlFence extends Object implements GpuFence {
    constructor()
    // private handle: number;
    awaitCompletion(timeoutMs: number): boolean;
    close(): void;
}