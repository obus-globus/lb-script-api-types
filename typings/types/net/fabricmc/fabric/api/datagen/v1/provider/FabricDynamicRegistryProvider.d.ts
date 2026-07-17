import type { JsonElement } from '../../../../../../../com/google/gson/JsonElement.d.ts'
import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { CompletableFuture } from '../../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { ToIntFunction } from '../../../../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FabricPackOutput } from '../../../../../../../net/fabricmc/fabric/api/datagen/v1/FabricPackOutput.d.ts'
import type { FabricDynamicRegistryProvider$Entries } from '../../../../../../../net/fabricmc/fabric/api/datagen/v1/provider/FabricDynamicRegistryProvider$Entries.d.ts'
import type { FabricDynamicRegistryProvider$RegistryEntries } from '../../../../../../../net/fabricmc/fabric/api/datagen/v1/provider/FabricDynamicRegistryProvider$RegistryEntries.d.ts'
import type { HolderLookup$Provider } from '../../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { CachedOutput } from '../../../../../../../net/minecraft/data/CachedOutput.d.ts'
import type { DataProvider } from '../../../../../../../net/minecraft/data/DataProvider.d.ts'
import type { RegistryOps } from '../../../../../../../net/minecraft/resources/RegistryOps.d.ts'
import type { Logger } from '../../../../../../../org/slf4j/Logger.d.ts'
export abstract class FabricDynamicRegistryProvider extends Object implements DataProvider {
    static FIXED_ORDER_FIELDS: (param0: string) => number;
    static KEY_COMPARATOR: (param0: string, param1: string) => number;
    static LOGGER: Logger;
    constructor(arg0: FabricPackOutput, arg1: CompletableFuture<HolderLookup$Provider>)
    // private output: FabricPackOutput;
    // private registriesFuture: CompletableFuture<HolderLookup$Provider>;
    configure(arg0: HolderLookup$Provider, arg1: FabricDynamicRegistryProvider$Entries): void;
    getName(): string;
    run(arg0: CachedOutput): CompletableFuture<Object>;
    // private writeHolders<T extends unknown>(arg0: CachedOutput, arg1: RegistryOps<JsonElement>, arg2: FabricDynamicRegistryProvider$RegistryEntries<T>): CompletableFuture<Object>;
}