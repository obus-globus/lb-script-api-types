import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { VertexConsumer } from '../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Matrix4fc } from '../../../../org/joml/Matrix4fc.d.ts'
import type { Vector4f } from '../../../../org/joml/Vector4f.d.ts'
export class HorizonRenderer extends Object {
    constructor()
    // private buffer: GpuBuffer;
    // private currentRenderDistance: number;
    // private indexCount: number;
    // private buildHorizon(arg0: number, arg1: VertexConsumer): void;
    destroy(): void;
    // private rebuildBuffer(): void;
    renderHorizon(arg0: Matrix4fc, arg1: Matrix4fc, arg2: Vector4f): void;
}