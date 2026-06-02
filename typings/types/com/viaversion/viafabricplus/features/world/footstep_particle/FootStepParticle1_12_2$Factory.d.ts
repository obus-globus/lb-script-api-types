import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { Particle } from '../../../../../../net/minecraft/client/particle/Particle.d.ts'
import type { ParticleProvider } from '../../../../../../net/minecraft/client/particle/ParticleProvider.d.ts'
import type { SpriteSet } from '../../../../../../net/minecraft/client/particle/SpriteSet.d.ts'
import type { SimpleParticleType } from '../../../../../../net/minecraft/core/particles/SimpleParticleType.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
export class FootStepParticle1_12_2$Factory extends Object implements ParticleProvider<SimpleParticleType> {
    constructor(arg0: SpriteSet)
    // private spriteProvider: SpriteSet;
    createParticle(arg0: SimpleParticleType, arg1: ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: RandomSource): Particle;
}