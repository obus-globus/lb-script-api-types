import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { ToIntFunction } from '../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CachedOutput } from '../../../../net/minecraft/data/CachedOutput.d.ts'
import type { DataProvider } from '../../../../net/minecraft/data/DataProvider.d.ts'
import type { PackOutput } from '../../../../net/minecraft/data/PackOutput.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class NbtToSnbt extends Object implements DataProvider {
    static FIXED_ORDER_FIELDS: (param0: string) => number;
    static KEY_COMPARATOR: (param0: string, param1: string) => number;
    static LOGGER: Logger;
    static convertStructure(paramcache: CachedOutput, parampath: Path, paramname: string, paramoutput: Path): Path;
    static writeSnbt(paramcache: CachedOutput, paramdestination: Path, paramtext: string): void;
    constructor(output: PackOutput, inputFolders: Path[])
    // private inputFolders: Path[];
    // private output: PackOutput;
    getName(): string;
    run(cache: CachedOutput): CompletableFuture<Object>;
}