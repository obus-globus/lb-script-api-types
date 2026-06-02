import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ParticleProviderRegistry } from '../../../../../../net/fabricmc/fabric/api/client/particle/v1/ParticleProviderRegistry.d.ts'
import type { ParticleProviderRegistry$PendingParticleProvider } from '../../../../../../net/fabricmc/fabric/api/client/particle/v1/ParticleProviderRegistry$PendingParticleProvider.d.ts'
import type { ParticleProvider } from '../../../../../../net/minecraft/client/particle/ParticleProvider.d.ts'
import type { ParticleResources } from '../../../../../../net/minecraft/client/particle/ParticleResources.d.ts'
import type { ParticleType } from '../../../../../../net/minecraft/core/particles/ParticleType.d.ts'
export class ParticleProviderRegistryImpl$DirectParticleProviderRegistry extends Record implements ParticleProviderRegistry {
    static getInstance(): ParticleProviderRegistry;
    constructor(particleResources: ParticleResources)
    // private particleResources: ParticleResources;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    particleResources(): ParticleResources;
    register(arg0: ParticleType<T>, arg1: (param0: T) => net.minecraft.client.particle.ParticleProvider<unknown>): void;
    register(arg0: ParticleType<T>, arg1: ParticleProvider<T>): void;
    toString(): string;
}