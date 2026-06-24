import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { FabricDataGenerator } from '../../../../../../net/fabricmc/fabric/api/datagen/v1/FabricDataGenerator.d.ts'
import type { FabricDataGenerator$Pack$Factory } from '../../../../../../net/fabricmc/fabric/api/datagen/v1/FabricDataGenerator$Pack$Factory.d.ts'
import type { FabricDataGenerator$Pack$RegistryDependentFactory } from '../../../../../../net/fabricmc/fabric/api/datagen/v1/FabricDataGenerator$Pack$RegistryDependentFactory.d.ts'
import type { FabricPackOutput } from '../../../../../../net/fabricmc/fabric/api/datagen/v1/FabricPackOutput.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { DataGenerator$PackGenerator } from '../../../../../../net/minecraft/data/DataGenerator$PackGenerator.d.ts'
import type { DataProvider } from '../../../../../../net/minecraft/data/DataProvider.d.ts'
import type { DataProvider$Factory } from '../../../../../../net/minecraft/data/DataProvider$Factory.d.ts'
import type { PackOutput } from '../../../../../../net/minecraft/data/PackOutput.d.ts'
export class FabricDataGenerator$Pack extends DataGenerator$PackGenerator {
    private constructor(null_: FabricDataGenerator, arg1: boolean, arg2: string, arg3: FabricPackOutput)
    addProvider<T extends DataProvider>(arg0: (param0: FabricPackOutput) => T): T;
    addProvider<T extends DataProvider>(arg0: (param0: FabricPackOutput, param1: CompletableFuture<HolderLookup$Provider>) => T): T;
    addProvider<T extends DataProvider>(factory: (param0: PackOutput) => T): T;
}