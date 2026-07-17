import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FabricResourceReloader } from '../../../../net/fabricmc/fabric/impl/resource/FabricResourceReloader.d.ts'
import type { ParticleProvider } from '../../../../net/minecraft/client/particle/ParticleProvider.d.ts'
import type { ParticleResources$MutableSpriteSet } from '../../../../net/minecraft/client/particle/ParticleResources$MutableSpriteSet.d.ts'
import type { ParticleResources$SpriteParticleRegistration } from '../../../../net/minecraft/client/particle/ParticleResources$SpriteParticleRegistration.d.ts'
import type { SpriteSet } from '../../../../net/minecraft/client/particle/SpriteSet.d.ts'
import type { ParticleOptions } from '../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { ParticleType } from '../../../../net/minecraft/core/particles/ParticleType.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { PreparableReloadListener } from '../../../../net/minecraft/server/packs/resources/PreparableReloadListener.d.ts'
import type { PreparableReloadListener$PreparationBarrier } from '../../../../net/minecraft/server/packs/resources/PreparableReloadListener$PreparationBarrier.d.ts'
import type { PreparableReloadListener$SharedState } from '../../../../net/minecraft/server/packs/resources/PreparableReloadListener$SharedState.d.ts'
import type { Resource } from '../../../../net/minecraft/server/packs/resources/Resource.d.ts'
export class ParticleResources extends Object implements FabricResourceReloader, PreparableReloadListener {
    constructor()
    // private fabric$id: Identifier;
    // private onReload: () => void;
    readonly providers: JavaMap<any, any>;
    spriteSets: JavaMap<Identifier, ParticleResources$MutableSpriteSet>;
    fabric$getId(): Identifier;
    getName(): string;
    getProviders(): JavaMap<any, any>;
    // private loadParticleDescription(id: Identifier, resource: Resource): Optional<Identifier[]>;
    onReload(onReload: () => void): void;
    prepareSharedState(currentReload: PreparableReloadListener$SharedState): void;
    // private register<T extends ParticleOptions>(type: ParticleType<T>, provider: ParticleProvider<T>): void;
    // private register<T extends ParticleOptions>(type: ParticleType<T>, provider: (param0: SpriteSet) => ParticleProvider<T>): void;
    // private registerProviders(): void;
    reload(currentReload: PreparableReloadListener$SharedState, taskExecutor: Executor, preparationBarrier: (param0: Object | null) => CompletableFuture<Object>, reloadExecutor: Executor): CompletableFuture<void>;
}