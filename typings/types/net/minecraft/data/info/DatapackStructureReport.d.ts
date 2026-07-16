import type { JsonElement } from '../../../../com/google/gson/JsonElement.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { ToIntFunction } from '../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { CachedOutput } from '../../../../net/minecraft/data/CachedOutput.d.ts'
import type { DataProvider } from '../../../../net/minecraft/data/DataProvider.d.ts'
import type { PackOutput } from '../../../../net/minecraft/data/PackOutput.d.ts'
import type { PackOutput$PathProvider } from '../../../../net/minecraft/data/PackOutput$PathProvider.d.ts'
import type { DatapackStructureReport$Entry } from '../../../../net/minecraft/data/info/DatapackStructureReport$Entry.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class DatapackStructureReport extends Object implements DataProvider {
    static FIXED_ORDER_FIELDS: (param0: string) => number;
    static KEY_COMPARATOR: (param0: string, param1: string) => number;
    static LOGGER: Logger;
    static saveAll(paramcache: CachedOutput, paramcodec: Codec<Object>, parampathGetter: (param0: Object | null) => Path, paramcontents: Map<Object | null, Object | null>): CompletableFuture<Object>;
    static saveAll(paramcache: CachedOutput, paramserializer: (param0: Object | null) => JsonElement, parampathGetter: (param0: Object | null) => Path, paramcontents: Map<Object | null, Object | null>): CompletableFuture<Object>;
    static saveAll(paramcache: CachedOutput, paramcodec: Codec<Object>, parampathProvider: PackOutput$PathProvider, paramentries: Map<Identifier, Object | null>): CompletableFuture<Object>;
    static saveStable(paramcache: CachedOutput, paramcodec: Codec<Object>, paramvalue: Object | null, parampath: Path): CompletableFuture<Object>;
    static saveStable(paramcache: CachedOutput, paramregistries: HolderLookup$Provider, paramcodec: Codec<Object>, paramvalue: Object | null, parampath: Path): CompletableFuture<Object>;
    static saveStable(paramcache: CachedOutput, paramroot: JsonElement, parampath: Path): CompletableFuture<Object>;
    constructor(output: PackOutput)
    // private output: PackOutput;
    getName(): string;
    // private listRegistries(): Map<ResourceKey<(Object | null)[]>, DatapackStructureReport$Entry>;
    // private putIfNotPresent(output: Map<ResourceKey<(Object | null)[]>, DatapackStructureReport$Entry>, key: ResourceKey<(Object | null)[]>, entry: DatapackStructureReport$Entry): void;
    run(cache: CachedOutput): CompletableFuture<Object>;
}