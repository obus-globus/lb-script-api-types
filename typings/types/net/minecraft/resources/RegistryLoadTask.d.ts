import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Lifecycle } from '../../../com/mojang/serialization/Lifecycle.d.ts'
import type { Exception } from '../../../java/lang/Exception.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../java/util/concurrent/Executor.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Holder } from '../../../net/minecraft/core/Holder.d.ts'
import type { ConcurrentHolderGetter } from '../../../net/minecraft/core/registries/ConcurrentHolderGetter.d.ts'
import type { RegistryDataLoader$RegistryData } from '../../../net/minecraft/resources/RegistryDataLoader$RegistryData.d.ts'
import type { RegistryLoadTask$PendingRegistration } from '../../../net/minecraft/resources/RegistryLoadTask$PendingRegistration.d.ts'
import type { RegistryOps$RegistryInfo } from '../../../net/minecraft/resources/RegistryOps$RegistryInfo.d.ts'
import type { RegistryOps$RegistryInfoLookup } from '../../../net/minecraft/resources/RegistryOps$RegistryInfoLookup.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../net/minecraft/tags/TagKey.d.ts'
export abstract class RegistryLoadTask<T extends unknown> extends Object {
    constructor(data: RegistryDataLoader$RegistryData<T>, lifecycle: Lifecycle, loadingErrors: JavaMap<ResourceKey<Object>, Exception>)
    // private concurrentRegistrationGetter: ConcurrentHolderGetter<T>;
    // private data: RegistryDataLoader$RegistryData<T>;
    // private elementsRegistered: boolean;
    // private loadingErrors: JavaMap<ResourceKey<Object>, Exception>;
    registry: T[];
    // private registryWriteLock: Object;
    createRegistryInfo(): RegistryOps$RegistryInfo<Object>;
    freezeRegistry(loadingErrors: JavaMap<ResourceKey<Object>, Exception>): boolean;
    load(context: RegistryOps$RegistryInfoLookup, executor: Executor): CompletableFuture<Object>;
    readOnlyRegistry(): T[];
    registerElements(elements: Stream<RegistryLoadTask$PendingRegistration<T>>): void;
    registerTags(pendingTags: JavaMap<TagKey<T>, Holder<T>[]>): void;
    registryKey(): ResourceKey<T[]>;
    validateRegistry(loadingErrors: JavaMap<ResourceKey<Object>, Exception>): Optional<T[]>;
}