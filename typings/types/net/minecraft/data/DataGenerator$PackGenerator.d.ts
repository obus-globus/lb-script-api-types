import type { Object } from '../../../java/lang/Object.d.ts'
import type { DataGenerator } from '../../../net/minecraft/data/DataGenerator.d.ts'
import type { DataProvider } from '../../../net/minecraft/data/DataProvider.d.ts'
import type { DataProvider$Factory } from '../../../net/minecraft/data/DataProvider$Factory.d.ts'
import type { PackOutput } from '../../../net/minecraft/data/PackOutput.d.ts'
export class DataGenerator$PackGenerator extends Object {
    constructor(null_: DataGenerator, toRun: boolean, providerPrefix: string, output: PackOutput)
    // private output: PackOutput;
    // private providerPrefix: string;
    // private toRun: boolean;
    addProvider<T extends DataProvider>(factory: (param0: PackOutput) => T): T;
}