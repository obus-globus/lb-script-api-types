import type { Object } from '../../../java/lang/Object.d.ts'
import type { DataProvider } from '../../../net/minecraft/data/DataProvider.d.ts'
import type { PackOutput } from '../../../net/minecraft/data/PackOutput.d.ts'
export interface DataProvider$Factory<T extends DataProvider> extends Object{
    create(output: PackOutput): T;
}