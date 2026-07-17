import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Lifecycle } from '../../../com/mojang/serialization/Lifecycle.d.ts'
import type { Exception } from '../../../java/lang/Exception.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { RegistryDataLoader$NetworkedRegistryData } from '../../../net/minecraft/resources/RegistryDataLoader$NetworkedRegistryData.d.ts'
import type { RegistryDataLoader$RegistryData } from '../../../net/minecraft/resources/RegistryDataLoader$RegistryData.d.ts'
import type { RegistryLoadTask } from '../../../net/minecraft/resources/RegistryLoadTask.d.ts'
import type { RegistryOps$RegistryInfoLookup } from '../../../net/minecraft/resources/RegistryOps$RegistryInfoLookup.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Resource } from '../../../net/minecraft/server/packs/resources/Resource.d.ts'
import type { ResourceProvider } from '../../../net/minecraft/server/packs/resources/ResourceProvider.d.ts'
export class NetworkRegistryLoadTask<T extends unknown> extends RegistryLoadTask<T> {
    constructor(data: RegistryDataLoader$RegistryData<T>, lifecycle: Lifecycle, loadingErrors: JavaMap<ResourceKey<Object>, Exception>, entries: JavaMap<ResourceKey<(Object | null)[]>, RegistryDataLoader$NetworkedRegistryData>, knownDataSource: (param0: Identifier) => Optional<Resource>)
    // private entries: JavaMap<ResourceKey<(Object | null)[]>, RegistryDataLoader$NetworkedRegistryData>;
    // private knownDataSource: (param0: Identifier) => Optional<Resource>;
    load(context: RegistryOps$RegistryInfoLookup, executor: Executor): CompletableFuture<Object>;
}