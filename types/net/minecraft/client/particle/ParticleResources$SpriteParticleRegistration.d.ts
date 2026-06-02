import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParticleProvider } from '../../../../net/minecraft/client/particle/ParticleProvider.d.ts'
import type { SpriteSet } from '../../../../net/minecraft/client/particle/SpriteSet.d.ts'
import type { ParticleOptions } from '../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
export interface ParticleResources$SpriteParticleRegistration<T extends ParticleOptions> extends Object{
    create(spriteSet: SpriteSet): ParticleProvider<T>;
}