import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface QuadParticleRenderState$ParticleConsumer extends Object{
    consume(x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, wRot: number, scale: number, u0: number, u1: number, v0: number, v1: number, color: number, lightCoords: number): void;
}