import type { JsonElement } from '../../../../com/google/gson/JsonElement.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { DynamicOps } from '../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { ToIntFunction } from '../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { CachedOutput } from '../../../../net/minecraft/data/CachedOutput.d.ts'
import type { DataProvider } from '../../../../net/minecraft/data/DataProvider.d.ts'
import type { PackOutput } from '../../../../net/minecraft/data/PackOutput.d.ts'
import type { PackOutput$PathProvider } from '../../../../net/minecraft/data/PackOutput$PathProvider.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { RegistryDataLoader$RegistryData } from '../../../../net/minecraft/resources/RegistryDataLoader$RegistryData.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class RegistriesDatapackGenerator extends Object implements DataProvider {
    static FIXED_ORDER_FIELDS: (param0: string) => number;
    static KEY_COMPARATOR: (param0: string, param1: string) => number;
    static LOGGER: Logger;
    static saveAll<T extends unknown, E extends unknown>(paramcache: CachedOutput, paramcodec: Codec<E>, parampathGetter: (param0: T) => Path, paramcontents: Map<T, E>): CompletableFuture<Object>;
    static saveAll<T extends unknown, E extends unknown>(paramcache: CachedOutput, paramserializer: (param0: E) => JsonElement, parampathGetter: (param0: T) => Path, paramcontents: Map<T, E>): CompletableFuture<Object>;
    static saveAll<T extends unknown>(paramcache: CachedOutput, paramcodec: Codec<T>, parampathProvider: PackOutput$PathProvider, paramentries: Map<Identifier, T>): CompletableFuture<Object>;
    static saveStable<T extends unknown>(paramcache: CachedOutput, paramcodec: Codec<T>, paramvalue: T, parampath: Path): CompletableFuture<Object>;
    static saveStable<T extends unknown>(paramcache: CachedOutput, paramregistries: HolderLookup$Provider, paramcodec: Codec<T>, paramvalue: T, parampath: Path): CompletableFuture<Object>;
    static saveStable(paramcache: CachedOutput, paramroot: JsonElement, parampath: Path): CompletableFuture<Object>;
    constructor(output: PackOutput, registries: CompletableFuture<HolderLookup$Provider>)
    // private output: PackOutput;
    // private registries: CompletableFuture<HolderLookup$Provider>;
    // private dumpRegistryCap<T extends unknown>(cache: CachedOutput, registries: HolderLookup$Provider, writeOps: DynamicOps<JsonElement>, v: RegistryDataLoader$RegistryData<T>): Optional<CompletableFuture<Object>>;
    getName(): string;
    run(cache: CachedOutput): CompletableFuture<Object>;
}