import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { JsonElement } from '../../../../../../../com/google/gson/JsonElement.d.ts'
import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { DynamicOps } from '../../../../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { CompletableFuture } from '../../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { BiConsumer } from '../../../../../../../java/util/function/BiConsumer.d.ts'
import type { ToIntFunction } from '../../../../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FabricPackOutput } from '../../../../../../../net/fabricmc/fabric/api/datagen/v1/FabricPackOutput.d.ts'
import type { HolderLookup$Provider } from '../../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { CachedOutput } from '../../../../../../../net/minecraft/data/CachedOutput.d.ts'
import type { DataProvider } from '../../../../../../../net/minecraft/data/DataProvider.d.ts'
import type { PackOutput$PathProvider } from '../../../../../../../net/minecraft/data/PackOutput$PathProvider.d.ts'
import type { PackOutput$Target } from '../../../../../../../net/minecraft/data/PackOutput$Target.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Logger } from '../../../../../../../org/slf4j/Logger.d.ts'
export abstract class FabricCodecDataProvider<T extends unknown> extends Object implements DataProvider {
    static FIXED_ORDER_FIELDS: (param0: string) => number;
    static KEY_COMPARATOR: (param0: string, param1: string) => number;
    static LOGGER: Logger;
    constructor(arg0: FabricPackOutput, arg1: CompletableFuture<HolderLookup$Provider>, arg2: PackOutput$Target, arg3: string, arg4: Codec<T>)
    constructor(arg0: FabricPackOutput, arg1: CompletableFuture<HolderLookup$Provider>, arg2: ResourceKey<(Object | null)[]>, arg3: Codec<T>)
    // private codec: Codec<T>;
    // private pathProvider: PackOutput$PathProvider;
    // private registriesFuture: CompletableFuture<HolderLookup$Provider>;
    configure(arg0: (param0: Identifier, param1: T) => void, arg1: HolderLookup$Provider): void;
    // private convert(arg0: Identifier, arg1: T, arg2: DynamicOps<JsonElement>): JsonElement;
    getName(): string;
    run(arg0: CachedOutput): CompletableFuture<Object>;
    // private write(arg0: CachedOutput, arg1: JavaMap<Identifier, JsonElement>): CompletableFuture<Object>;
}