import type { Camera } from '../../../../net/minecraft/client/Camera.d.ts'
import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ParticleEngine } from '../../../../net/minecraft/client/particle/ParticleEngine.d.ts'
import type { SimpleAnimatedParticle } from '../../../../net/minecraft/client/particle/SimpleAnimatedParticle.d.ts'
import type { SpriteSet } from '../../../../net/minecraft/client/particle/SpriteSet.d.ts'
import type { QuadParticleRenderState } from '../../../../net/minecraft/client/renderer/state/level/QuadParticleRenderState.d.ts'
export class FireworkParticles$SparkParticle extends SimpleAnimatedParticle {
    private constructor(level: ClientLevel, x: number, y: number, z: number, xa: number, ya: number, za: number, engine: ParticleEngine, sprites: SpriteSet)
    // private engine: ParticleEngine;
    // private fadeB: number;
    // private fadeG: number;
    // private fadeR: number;
    // private hasFade: boolean;
    readonly trail: boolean;
    readonly twinkle: boolean;
    extract(particleTypeRenderState: QuadParticleRenderState, camera: Camera, partialTickTime: number): void;
    setTrail(trail: boolean): void;
    setTwinkle(twinkle: boolean): void;
    tick(): void;
}