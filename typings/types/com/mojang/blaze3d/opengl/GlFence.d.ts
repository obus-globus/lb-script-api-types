import type { GpuFence } from '../../../../com/mojang/blaze3d/buffers/GpuFence.d.ts'
import type { GlCommandEncoder } from '../../../../com/mojang/blaze3d/opengl/GlCommandEncoder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GlFence extends Object implements GpuFence {
    constructor(encoder: GlCommandEncoder)
    // private closedOrCompleted: boolean;
    // private encoder: GlCommandEncoder;
    // private submitIndex: number;
    awaitCompletion(timeoutNS: number): boolean;
    close(): void;
}