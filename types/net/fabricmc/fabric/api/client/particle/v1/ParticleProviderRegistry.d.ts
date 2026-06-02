import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ParticleProviderRegistry$PendingParticleProvider } from '../../../../../../../net/fabricmc/fabric/api/client/particle/v1/ParticleProviderRegistry$PendingParticleProvider.d.ts'
import type { ParticleProvider } from '../../../../../../../net/minecraft/client/particle/ParticleProvider.d.ts'
import type { ParticleType } from '../../../../../../../net/minecraft/core/particles/ParticleType.d.ts'
export interface ParticleProviderRegistry extends Object{
    register(arg0: ParticleType<T>, arg1: (param0: T) => net.minecraft.client.particle.ParticleProvider<unknown>): void;
    register(arg0: ParticleType<T>, arg1: ParticleProvider<T>): void;
}