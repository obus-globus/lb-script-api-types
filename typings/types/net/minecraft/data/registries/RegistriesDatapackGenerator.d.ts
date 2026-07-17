import type { JsonElement } from '../../../../com/google/gson/JsonElement.d.ts'
import type { DynamicOps } from '../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { ToIntFunction } from '../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { CachedOutput } from '../../../../net/minecraft/data/CachedOutput.d.ts'
import type { DataProvider } from '../../../../net/minecraft/data/DataProvider.d.ts'
import type { PackOutput } from '../../../../net/minecraft/data/PackOutput.d.ts'
import type { RegistryDataLoader$RegistryData } from '../../../../net/minecraft/resources/RegistryDataLoader$RegistryData.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class RegistriesDatapackGenerator extends Object implements DataProvider {
    static FIXED_ORDER_FIELDS: (param0: string) => number;
    static KEY_COMPARATOR: (param0: string, param1: string) => number;
    static LOGGER: Logger;
    constructor(output: PackOutput, registries: CompletableFuture<HolderLookup$Provider>)
    // private output: PackOutput;
    // private registries: CompletableFuture<HolderLookup$Provider>;
    // private dumpRegistryCap<T extends unknown>(cache: CachedOutput, registries: HolderLookup$Provider, writeOps: DynamicOps<JsonElement>, v: RegistryDataLoader$RegistryData<T>): Optional<CompletableFuture<Object>>;
    getName(): string;
    run(cache: CachedOutput): CompletableFuture<Object>;
}