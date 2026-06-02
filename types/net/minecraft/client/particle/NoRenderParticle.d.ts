import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { Particle } from '../../../../net/minecraft/client/particle/Particle.d.ts'
import type { ParticleRenderType } from '../../../../net/minecraft/client/particle/ParticleRenderType.d.ts'
export class NoRenderParticle extends Particle {
    constructor(level: ClientLevel, x: number, y: number, z: number)
    constructor(level: ClientLevel, x: number, y: number, z: number, xa: number, ya: number, za: number)
    getGroup(): ParticleRenderType;
}