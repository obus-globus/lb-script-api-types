import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FabricSpriteSet } from '../../../../../../../net/fabricmc/fabric/api/client/particle/v1/FabricSpriteSet.d.ts'
import type { ParticleProviderRegistry$PendingParticleProvider } from '../../../../../../../net/fabricmc/fabric/api/client/particle/v1/ParticleProviderRegistry$PendingParticleProvider.d.ts'
import type { ParticleProvider } from '../../../../../../../net/minecraft/client/particle/ParticleProvider.d.ts'
import type { ParticleOptions } from '../../../../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { ParticleType } from '../../../../../../../net/minecraft/core/particles/ParticleType.d.ts'
export interface ParticleProviderRegistry extends Object {
    register<T extends ParticleOptions>(arg0: ParticleType<T>, arg1: (param0: FabricSpriteSet) => ParticleProvider<T>): void;
    register<T extends ParticleOptions>(arg0: ParticleType<T>, arg1: ParticleProvider<T>): void;
}