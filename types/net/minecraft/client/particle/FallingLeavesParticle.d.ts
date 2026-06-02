import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { SingleQuadParticle } from '../../../../net/minecraft/client/particle/SingleQuadParticle.d.ts'
import type { SingleQuadParticle$Layer } from '../../../../net/minecraft/client/particle/SingleQuadParticle$Layer.d.ts'
import type { TextureAtlasSprite } from '../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
export class FallingLeavesParticle extends SingleQuadParticle {
    constructor(level: ClientLevel, x: number, y: number, z: number, sprite: TextureAtlasSprite, fallAcceleration: number, sideAcceleration: number, swirl: boolean, flowAway: boolean, scale: number, startVelocity: number)
    // private flowAway: boolean;
    // private rotSpeed: number;
    // private spinAcceleration: number;
    // private swirl: boolean;
    // private swirlPeriod: number;
    // private windBig: number;
    // private xaFlowScale: number;
    // private zaFlowScale: number;
    getLayer(): SingleQuadParticle$Layer;
    tick(): void;
}