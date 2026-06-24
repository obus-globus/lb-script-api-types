import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { SingleQuadParticle } from '../../../../net/minecraft/client/particle/SingleQuadParticle.d.ts'
import type { SingleQuadParticle$Layer } from '../../../../net/minecraft/client/particle/SingleQuadParticle$Layer.d.ts'
import type { SpriteSet } from '../../../../net/minecraft/client/particle/SpriteSet.d.ts'
import type { GeyserParticleOptions } from '../../../../net/minecraft/core/particles/GeyserParticleOptions.d.ts'
export class GeyserPlumeParticle extends SingleQuadParticle {
    private constructor(level: ClientLevel, x: number, y: number, z: number, xa: number, ya: number, za: number, options: GeyserParticleOptions, sprites: SpriteSet)
    // private done: boolean;
    // private horizontalSprayX: number;
    // private horizontalSprayZ: number;
    // private initialPropulsion: number;
    // private maxSize: number;
    // private maxY: number;
    // private minSize: number;
    // private sprites: SpriteSet;
    // private startY: number;
    getLayer(): SingleQuadParticle$Layer;
    tick(): void;
}