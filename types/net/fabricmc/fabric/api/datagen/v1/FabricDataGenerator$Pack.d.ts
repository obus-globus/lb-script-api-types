import type { FabricDataGenerator$Pack$Factory } from '../../../../../../net/fabricmc/fabric/api/datagen/v1/FabricDataGenerator$Pack$Factory.d.ts'
import type { FabricDataGenerator$Pack$RegistryDependentFactory } from '../../../../../../net/fabricmc/fabric/api/datagen/v1/FabricDataGenerator$Pack$RegistryDependentFactory.d.ts'
import type { FabricPackOutput } from '../../../../../../net/fabricmc/fabric/api/datagen/v1/FabricPackOutput.d.ts'
import type { DataGenerator$PackGenerator } from '../../../../../../net/minecraft/data/DataGenerator$PackGenerator.d.ts'
import type { DataProvider } from '../../../../../../net/minecraft/data/DataProvider.d.ts'
export class FabricDataGenerator$Pack extends DataGenerator$PackGenerator {
    private constructor(null_: FabricDataGenerator$Pack, arg1: boolean, arg2: string, arg3: FabricPackOutput)
    addProvider<T extends DataProvider>(arg0: (param0: T) => unknown): T;
    addProvider<T extends DataProvider>(arg0: (param0: T, param1: FabricPackOutput) => unknown): T;
}