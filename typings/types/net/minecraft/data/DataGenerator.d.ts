import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { DataGenerator$PackGenerator } from '../../../net/minecraft/data/DataGenerator$PackGenerator.d.ts'
import type { DataProvider } from '../../../net/minecraft/data/DataProvider.d.ts'
import type { PackOutput } from '../../../net/minecraft/data/PackOutput.d.ts'
export abstract class DataGenerator extends Object {
    constructor(output: Path)
    // private allProviderIds: string[];
    // private providersToRun: JavaMap<string, DataProvider>;
    vanillaPackOutput: PackOutput;
    getBuiltinDatapack(toRun: boolean, packId: string): DataGenerator$PackGenerator;
    getVanillaPack(toRun: boolean): DataGenerator$PackGenerator;
    run(): void;
}