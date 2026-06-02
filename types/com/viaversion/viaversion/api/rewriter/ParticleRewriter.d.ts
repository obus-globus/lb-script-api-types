import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Particle } from '../../../../../com/viaversion/viaversion/api/minecraft/Particle.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ParticleRewriter extends Object{
    rewriteParticle(arg0: UserConnection, arg1: Particle): void;
}