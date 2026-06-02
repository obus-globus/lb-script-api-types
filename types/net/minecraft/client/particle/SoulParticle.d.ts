import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { RisingParticle } from '../../../../net/minecraft/client/particle/RisingParticle.d.ts'
import type { SingleQuadParticle$Layer } from '../../../../net/minecraft/client/particle/SingleQuadParticle$Layer.d.ts'
import type { SpriteSet } from '../../../../net/minecraft/client/particle/SpriteSet.d.ts'
export class SoulParticle extends RisingParticle {
    private constructor(level: ClientLevel, x: number, y: number, z: number, xd: number, yd: number, zd: number, sprites: SpriteSet)
    // private isGlowing: boolean;
    // private sprites: SpriteSet;
    getLayer(): SingleQuadParticle$Layer;
    getLightCoords(a: number): number;
    tick(): void;
}