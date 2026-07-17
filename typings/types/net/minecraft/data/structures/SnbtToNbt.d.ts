import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { ToIntFunction } from '../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CachedOutput } from '../../../../net/minecraft/data/CachedOutput.d.ts'
import type { DataProvider } from '../../../../net/minecraft/data/DataProvider.d.ts'
import type { PackOutput } from '../../../../net/minecraft/data/PackOutput.d.ts'
import type { SnbtToNbt$Filter } from '../../../../net/minecraft/data/structures/SnbtToNbt$Filter.d.ts'
import type { SnbtToNbt$TaskResult } from '../../../../net/minecraft/data/structures/SnbtToNbt$TaskResult.d.ts'
import type { CompoundTag } from '../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class SnbtToNbt extends Object implements DataProvider {
    static FIXED_ORDER_FIELDS: (param0: string) => number;
    static KEY_COMPARATOR: (param0: string, param1: string) => number;
    static LOGGER: Logger;
    constructor(output: PackOutput, inputFolder: Path)
    constructor(output: PackOutput, inputFolders: Path[])
    // private filters: (param0: string, param1: CompoundTag) => CompoundTag[];
    // private inputFolders: Path[];
    // private output: PackOutput;
    addFilter(filter: (param0: string, param1: CompoundTag) => CompoundTag): SnbtToNbt;
    // private applyFilters(name: string, input: CompoundTag): CompoundTag;
    getName(): string;
    // private getName(root: Path, path: Path): string;
    // private readStructure(path: Path, name: string): SnbtToNbt$TaskResult;
    run(cache: CachedOutput): CompletableFuture<Object>;
    // private storeStructureIfChanged(cache: CachedOutput, task: SnbtToNbt$TaskResult, output: Path): void;
}