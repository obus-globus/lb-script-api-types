import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { ToIntFunction } from '../../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricPackOutput } from '../../../../../net/fabricmc/fabric/api/datagen/v1/FabricPackOutput.d.ts'
import type { CachedOutput } from '../../../../../net/minecraft/data/CachedOutput.d.ts'
import type { DataProvider } from '../../../../../net/minecraft/data/DataProvider.d.ts'
import type { PackOutput } from '../../../../../net/minecraft/data/PackOutput.d.ts'
import type { PackOutput$PathProvider } from '../../../../../net/minecraft/data/PackOutput$PathProvider.d.ts'
import type { Logger } from '../../../../../org/slf4j/Logger.d.ts'
export class ModelProvider extends Object implements DataProvider {
    static FIXED_ORDER_FIELDS: (param0: string) => number;
    static KEY_COMPARATOR: (param0: string, param1: string) => number;
    static LOGGER: Logger;
    constructor(output: PackOutput)
    // private blockStatePathProvider: PackOutput$PathProvider;
    // private fabricPackOutput: FabricPackOutput;
    // private itemInfoPathProvider: PackOutput$PathProvider;
    // private modelPathProvider: PackOutput$PathProvider;
    getName(): string;
    run(cache: CachedOutput): CompletableFuture<Object>;
}