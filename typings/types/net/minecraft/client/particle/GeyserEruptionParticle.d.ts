import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { NoRenderParticle } from '../../../../net/minecraft/client/particle/NoRenderParticle.d.ts'
import type { GeyserBaseParticleOptions } from '../../../../net/minecraft/core/particles/GeyserBaseParticleOptions.d.ts'
import type { GeyserParticleOptions } from '../../../../net/minecraft/core/particles/GeyserParticleOptions.d.ts'
export class GeyserEruptionParticle extends NoRenderParticle {
    static BASE_PARTICLE_AMOUNT: number;
    static BASE_PARTICLE_FREQUENCY: number;
    static POOF_PARTICLE_AMOUNT: number;
    static POOF_PARTICLE_FREQUENCY: number;
    constructor(level: ClientLevel, x: number, y: number, z: number, xAux: number, yAux: number, zAux: number, options: GeyserParticleOptions)
    // private baseParticle: GeyserBaseParticleOptions;
    // private plumeParticle: GeyserParticleOptions;
    // private poofParticle: GeyserBaseParticleOptions;
    // private waterBlocks: number;
    // private xa: number;
    // private ya: number;
    // private za: number;
    tick(): void;
}