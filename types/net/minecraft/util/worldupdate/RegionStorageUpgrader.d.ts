import type { DataFixer } from '../../../../com/mojang/datafixers/DataFixer.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CompoundTag } from '../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { DataFixTypes } from '../../../../net/minecraft/util/datafix/DataFixTypes.d.ts'
import type { FileToUpgrade } from '../../../../net/minecraft/util/worldupdate/FileToUpgrade.d.ts'
import type { RegionStorageUpgrader$TagModifier } from '../../../../net/minecraft/util/worldupdate/RegionStorageUpgrader$TagModifier.d.ts'
import type { UpgradeProgress } from '../../../../net/minecraft/util/worldupdate/UpgradeProgress.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { RegionFile } from '../../../../net/minecraft/world/level/chunk/storage/RegionFile.d.ts'
import type { RegionStorageInfo } from '../../../../net/minecraft/world/level/chunk/storage/RegionStorageInfo.d.ts'
import type { SimpleRegionStorage } from '../../../../net/minecraft/world/level/chunk/storage/SimpleRegionStorage.d.ts'
import type { LevelStorageSource$LevelStorageAccess } from '../../../../net/minecraft/world/level/storage/LevelStorageSource$LevelStorageAccess.d.ts'
export class RegionStorageUpgrader extends Object {
    constructor(dataFixer: DataFixer, dataFixType: DataFixTypes, type: string, folderName: string, defaultVersion: number, recreateRegionFiles: boolean, upgradeProgress: UpgradeProgress, startIndex: number, dataFixContextTag: CompoundTag, tagModifiers: Int2ObjectMap<(param0: ChunkPos, param1: CompoundTag) => kotlin.Boolean>)
    // private dataFixContextTag: CompoundTag;
    // private dataFixType: DataFixTypes;
    // private dataFixer: DataFixer;
    // private defaultVersion: number;
    // private dimensionKey: ResourceKey<Level>;
    // private files: FileToUpgrade[];
    // private folderName: string;
    // private previousWriteFuture: CompletableFuture<void>;
    // private recreateRegionFiles: boolean;
    // private startIndex: number;
    // private storage: SimpleRegionStorage;
    // private tagModifiers: Int2ObjectMap<(param0: ChunkPos, param1: CompoundTag) => kotlin.Boolean>;
    // private type: string;
    // private upgradeProgress: UpgradeProgress;
    createStorage(info: RegionStorageInfo, regionFolder: Path[]): SimpleRegionStorage;
    fileAmount(): number;
    // private getFilesToProcess(info: RegionStorageInfo, regionFolder: Path[]): FileToUpgrade[];
    init(dimensionKey: ResourceKey<Level>, levelStorage: LevelStorageSource$LevelStorageAccess): void;
    // private onFileFinished(regionFile: RegionFile): void;
    // private processOnePosition(storage: SimpleRegionStorage, pos: ChunkPos): boolean;
    tryProcessOnePosition(storage: SimpleRegionStorage, pos: ChunkPos): boolean;
    upgrade(): void;
    upgradeTag(storage: SimpleRegionStorage, chunkTag: CompoundTag, targetVersion: number): CompoundTag;
}