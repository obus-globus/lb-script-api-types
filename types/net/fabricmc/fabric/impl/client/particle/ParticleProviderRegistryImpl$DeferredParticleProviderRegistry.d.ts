import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FabricSpriteSet } from '../../../../../../net/fabricmc/fabric/api/client/particle/v1/FabricSpriteSet.d.ts'
import type { ParticleProviderRegistry } from '../../../../../../net/fabricmc/fabric/api/client/particle/v1/ParticleProviderRegistry.d.ts'
import type { ParticleProviderRegistry$PendingParticleProvider } from '../../../../../../net/fabricmc/fabric/api/client/particle/v1/ParticleProviderRegistry$PendingParticleProvider.d.ts'
import type { ParticleProvider } from '../../../../../../net/minecraft/client/particle/ParticleProvider.d.ts'
import type { ParticleType } from '../../../../../../net/minecraft/core/particles/ParticleType.d.ts'
export class ParticleProviderRegistryImpl$DeferredParticleProviderRegistry extends Object implements ParticleProviderRegistry {
    static getInstance(): ParticleProviderRegistry;
    constructor()
    // private constructors: Map<ParticleType<Object>, (param0: FabricSpriteSet) => net.minecraft.client.particle.ParticleProvider<unknown>>;
    // private factories: Map<ParticleType<Object>, ParticleProvider<Object>>;
    applyTo(arg0: ParticleProviderRegistry): void;
    register(arg0: ParticleType<T>, arg1: (param0: T) => net.minecraft.client.particle.ParticleProvider<unknown>): void;
    register(arg0: ParticleType<T>, arg1: ParticleProvider<T>): void;
}