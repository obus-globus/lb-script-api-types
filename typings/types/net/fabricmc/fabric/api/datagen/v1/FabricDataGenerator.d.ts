import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { FabricDataGenerator$Pack } from '../../../../../../net/fabricmc/fabric/api/datagen/v1/FabricDataGenerator$Pack.d.ts'
import type { FabricPackOutput } from '../../../../../../net/fabricmc/fabric/api/datagen/v1/FabricPackOutput.d.ts'
import type { ModContainer } from '../../../../../../net/fabricmc/loader/api/ModContainer.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { DataGenerator$PackGenerator } from '../../../../../../net/minecraft/data/DataGenerator$PackGenerator.d.ts'
import type { DataGenerator$Uncached } from '../../../../../../net/minecraft/data/DataGenerator$Uncached.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class FabricDataGenerator extends DataGenerator$Uncached {
    constructor(arg0: Path[], arg1: ModContainer, arg2: boolean, arg3: CompletableFuture<HolderLookup$Provider>)
    // private fabricOutput: FabricPackOutput;
    readonly modContainer: ModContainer;
    // private registriesFuture: CompletableFuture<HolderLookup$Provider>;
    // private strictValidation: boolean;
    createBuiltinResourcePack(arg0: Identifier): FabricDataGenerator$Pack;
    createPack(): FabricDataGenerator$Pack;
    getBuiltinDatapack(arg0: boolean, arg1: string): DataGenerator$PackGenerator;
    getModContainer(): ModContainer;
    getModId(): string;
    getRegistries(): CompletableFuture<HolderLookup$Provider>;
    getVanillaPack(arg0: boolean): DataGenerator$PackGenerator;
    isStrictValidationEnabled(): boolean;
    run(): void;
}