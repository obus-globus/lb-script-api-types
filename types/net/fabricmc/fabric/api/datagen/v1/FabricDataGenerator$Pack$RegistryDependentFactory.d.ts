import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FabricPackOutput } from '../../../../../../net/fabricmc/fabric/api/datagen/v1/FabricPackOutput.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { DataProvider } from '../../../../../../net/minecraft/data/DataProvider.d.ts'
export interface FabricDataGenerator$Pack$RegistryDependentFactory<T extends DataProvider> extends Object{
    create(arg0: FabricPackOutput, arg1: CompletableFuture<HolderLookup$Provider>): T;
}