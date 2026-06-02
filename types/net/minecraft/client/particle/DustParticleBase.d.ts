import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { SingleQuadParticle } from '../../../../net/minecraft/client/particle/SingleQuadParticle.d.ts'
import type { SingleQuadParticle$Layer } from '../../../../net/minecraft/client/particle/SingleQuadParticle$Layer.d.ts'
import type { SpriteSet } from '../../../../net/minecraft/client/particle/SpriteSet.d.ts'
import type { ScalableParticleOptionsBase } from '../../../../net/minecraft/core/particles/ScalableParticleOptionsBase.d.ts'
export class DustParticleBase<T extends ScalableParticleOptionsBase> extends SingleQuadParticle {
    constructor(level: ClientLevel, x: number, y: number, z: number, xAux: number, yAux: number, zAux: number, options: T, sprites: SpriteSet)
    // private sprites: SpriteSet;
    getLayer(): SingleQuadParticle$Layer;
    getQuadSize(a: number): number;
    randomizeColor(color: number, baseFactor: number): number;
    tick(): void;
}