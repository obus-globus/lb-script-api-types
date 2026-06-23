import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Instant } from '../../../../../java/time/Instant.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CompoundTag } from '../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { DirectoryLock } from '../../../../../net/minecraft/util/DirectoryLock.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { LevelResource } from '../../../../../net/minecraft/world/level/storage/LevelResource.d.ts'
import type { LevelStorageSource } from '../../../../../net/minecraft/world/level/storage/LevelStorageSource.d.ts'
import type { LevelStorageSource$LevelDirectory } from '../../../../../net/minecraft/world/level/storage/LevelStorageSource$LevelDirectory.d.ts'
import type { LevelSummary } from '../../../../../net/minecraft/world/level/storage/LevelSummary.d.ts'
import type { PlayerDataStorage } from '../../../../../net/minecraft/world/level/storage/PlayerDataStorage.d.ts'
import type { WorldData } from '../../../../../net/minecraft/world/level/storage/WorldData.d.ts'
import type { IORunnable } from '../../../../../org/apache/commons/io/function/IORunnable.d.ts'
export class LevelStorageSource$LevelStorageAccess extends Object implements AutoCloseable {
    private constructor(null_: LevelStorageSource$LevelStorageAccess, levelId: string, path: Path[])
    readonly levelDirectory: LevelStorageSource$LevelDirectory;
    readonly levelId: string;
    // private lock: DirectoryLock;
    // private resources: Map<LevelResource, Path[]>;
    checkForLowDiskSpace(): boolean;
    // private checkLock(): void;
    close(): void;
    collectIssues(useFallback: boolean): void;
    // private createLock(): void;
    createPlayerStorage(): PlayerDataStorage;
    deleteLevel(): void;
    estimateDiskSpace(): number;
    fixAndGetSummary(): LevelSummary;
    fixAndGetSummaryFromTag(dataTag: Dynamic<Object>): LevelSummary;
    // private getDataFile(useFallback: boolean): Path[];
    getDimensionPath(name: ResourceKey<Level>): Path[];
    getFileModificationTime(fallback: boolean): Instant;
    getIconFile(): Optional<Path[]>;
    getLevelDirectory(): LevelStorageSource$LevelDirectory;
    getLevelId(): string;
    getLevelPath(resource: LevelResource): Path[];
    getUnfixedDataTag(useFallback: boolean): Dynamic<Object>;
    getUnfixedDataTagWithFallback(): Dynamic<Object>;
    hasWorldData(): boolean;
    makeWorldBackup(): number;
    // private modifyLevelDataWithoutDatafix(updater: (param0: CompoundTag) => void): void;
    parent(): LevelStorageSource;
    releaseTemporarilyAndRun(runnable: () => void): void;
    renameAndDropPlayer(newName: string): void;
    renameLevel(newName: string): void;
    restoreLevelDataFromOld(): boolean;
    safeClose(): void;
    saveDataTag(levelData: WorldData): void;
    saveDataTag(levelData: WorldData, singleplayerUUID: UUID): void;
    saveLevelData(tag: Dynamic<Object>): void;
    // private saveLevelData(root: CompoundTag): void;
}