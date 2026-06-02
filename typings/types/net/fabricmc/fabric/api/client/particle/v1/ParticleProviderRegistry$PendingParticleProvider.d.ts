import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FabricSpriteSet } from '../../../../../../../net/fabricmc/fabric/api/client/particle/v1/FabricSpriteSet.d.ts'
import type { ParticleProvider } from '../../../../../../../net/minecraft/client/particle/ParticleProvider.d.ts'
import type { ParticleOptions } from '../../../../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
export interface ParticleProviderRegistry$PendingParticleProvider<T extends ParticleOptions> extends Object{
    create(arg0: FabricSpriteSet): ParticleProvider<T>;
}