import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { SingleQuadParticle } from '../../../../net/minecraft/client/particle/SingleQuadParticle.d.ts'
import type { SingleQuadParticle$Layer } from '../../../../net/minecraft/client/particle/SingleQuadParticle$Layer.d.ts'
import type { SpriteSet } from '../../../../net/minecraft/client/particle/SpriteSet.d.ts'
export abstract class SimpleAnimatedParticle extends SingleQuadParticle {
    constructor(level: ClientLevel, x: number, y: number, z: number, sprites: SpriteSet, gravity: number)
    // private fadeB: number;
    // private fadeG: number;
    // private fadeR: number;
    // private hasFade: boolean;
    // private sprites: SpriteSet;
    getLayer(): SingleQuadParticle$Layer;
    getLightCoords(a: number): number;
    setColor(rgb: number): void;
    setFadeColor(rgb: number): void;
    tick(): void;
}