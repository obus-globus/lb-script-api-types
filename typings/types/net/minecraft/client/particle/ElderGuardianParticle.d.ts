import type { GuardianParticleModel } from '../../../../net/minecraft/client/model/monster/guardian/GuardianParticleModel.d.ts'
import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { Particle } from '../../../../net/minecraft/client/particle/Particle.d.ts'
import type { ParticleRenderType } from '../../../../net/minecraft/client/particle/ParticleRenderType.d.ts'
import type { RenderType } from '../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
export class ElderGuardianParticle extends Particle {
    private constructor(level: ClientLevel, x: number, y: number, z: number)
    // private model: GuardianParticleModel;
    // private renderType: RenderType;
    getGroup(): ParticleRenderType;
}