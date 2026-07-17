import type { Path } from '../../../../../../../java/nio/file/Path.d.ts'
import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { CompletableFuture } from '../../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { ToIntFunction } from '../../../../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FabricPackOutput } from '../../../../../../../net/fabricmc/fabric/api/datagen/v1/FabricPackOutput.d.ts'
import type { ResourceCondition } from '../../../../../../../net/fabricmc/fabric/api/resource/conditions/v1/ResourceCondition.d.ts'
import type { AdvancementHolder } from '../../../../../../../net/minecraft/advancements/AdvancementHolder.d.ts'
import type { HolderLookup$Provider } from '../../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { CachedOutput } from '../../../../../../../net/minecraft/data/CachedOutput.d.ts'
import type { DataProvider } from '../../../../../../../net/minecraft/data/DataProvider.d.ts'
import type { PackOutput$PathProvider } from '../../../../../../../net/minecraft/data/PackOutput$PathProvider.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Logger } from '../../../../../../../org/slf4j/Logger.d.ts'
export abstract class FabricAdvancementProvider extends Object implements DataProvider {
    static FIXED_ORDER_FIELDS: (param0: string) => number;
    static KEY_COMPARATOR: (param0: string, param1: string) => number;
    static LOGGER: Logger;
    static createPlaceholder(paramarg0: Identifier): AdvancementHolder;
    constructor(arg0: FabricPackOutput, arg1: CompletableFuture<HolderLookup$Provider>)
    // private output: FabricPackOutput;
    // private pathProvider: PackOutput$PathProvider;
    // private registryLookup: CompletableFuture<HolderLookup$Provider>;
    generateAdvancement(arg0: HolderLookup$Provider, arg1: (param0: AdvancementHolder) => void): void;
    getName(): string;
    // private getOutputPath(arg0: AdvancementHolder): Path;
    run(arg0: CachedOutput): CompletableFuture<Object>;
    withConditions(arg0: (param0: AdvancementHolder) => void, ...arg1: ResourceCondition[]): (param0: AdvancementHolder) => void;
}