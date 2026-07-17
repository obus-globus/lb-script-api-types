import type { Comparator } from '../../../../../../../../java/util/Comparator.d.ts'
import type { CompletableFuture } from '../../../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { ToIntFunction } from '../../../../../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { SoundTypeBuilder } from '../../../../../../../../net/fabricmc/fabric/api/client/datagen/v1/builder/SoundTypeBuilder.d.ts'
import type { FabricSoundsProvider$SoundExporter } from '../../../../../../../../net/fabricmc/fabric/api/client/datagen/v1/provider/FabricSoundsProvider$SoundExporter.d.ts'
import type { HolderLookup$Provider } from '../../../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { CachedOutput } from '../../../../../../../../net/minecraft/data/CachedOutput.d.ts'
import type { DataProvider } from '../../../../../../../../net/minecraft/data/DataProvider.d.ts'
import type { PackOutput } from '../../../../../../../../net/minecraft/data/PackOutput.d.ts'
import type { Identifier } from '../../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Logger } from '../../../../../../../../org/slf4j/Logger.d.ts'
export abstract class FabricSoundsProvider extends Object implements DataProvider {
    static FIXED_ORDER_FIELDS: (param0: string) => number;
    static KEY_COMPARATOR: (param0: string, param1: string) => number;
    static LOGGER: Logger;
    constructor(arg0: PackOutput, arg1: CompletableFuture<HolderLookup$Provider>)
    // private output: PackOutput;
    // private registriesFuture: CompletableFuture<HolderLookup$Provider>;
    configure(arg0: HolderLookup$Provider, arg1: (param0: Identifier, param1: SoundTypeBuilder) => void): void;
    getName(): string;
    run(arg0: CachedOutput): CompletableFuture<Object>;
}