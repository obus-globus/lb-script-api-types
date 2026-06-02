import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FabricPackOutput } from '../../../../../../net/fabricmc/fabric/api/datagen/v1/FabricPackOutput.d.ts'
import type { DataProvider } from '../../../../../../net/minecraft/data/DataProvider.d.ts'
export interface FabricDataGenerator$Pack$Factory<T extends DataProvider> extends Object{
    create(arg0: FabricPackOutput): T;
}