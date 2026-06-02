import type { DataFixer } from '../../../../com/mojang/datafixers/DataFixer.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RegistryAccess } from '../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { CompoundTag } from '../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { DataFixTypes } from '../../../../net/minecraft/util/datafix/DataFixTypes.d.ts'
import type { RegionStorageUpgrader$Builder } from '../../../../net/minecraft/util/worldupdate/RegionStorageUpgrader$Builder.d.ts'
import type { UpgradeProgress } from '../../../../net/minecraft/util/worldupdate/UpgradeProgress.d.ts'
import type { UpgradeStatusTranslator } from '../../../../net/minecraft/util/worldupdate/UpgradeStatusTranslator.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { LevelStem } from '../../../../net/minecraft/world/level/dimension/LevelStem.d.ts'
import type { LevelStorageSource$LevelStorageAccess } from '../../../../net/minecraft/world/level/storage/LevelStorageSource$LevelStorageAccess.d.ts'
import type { SavedDataStorage } from '../../../../net/minecraft/world/level/storage/SavedDataStorage.d.ts'
export class WorldUpgrader extends Object implements AutoCloseable {
    static getDataFixContextTag(paramdimensions: LevelStem[], paramdimension: ResourceKey<Level>): CompoundTag;
    static verifyChunkPos(parampos: ChunkPos, paramupgradedTag: CompoundTag): boolean;
    static verifyChunkPosAndEraseCache(parampos: ChunkPos, paramupgradedTag: CompoundTag): boolean;
    constructor(levelSource: LevelStorageSource$LevelStorageAccess, dataFixer: DataFixer, registryAccess: RegistryAccess, eraseCache: boolean, recreateRegionFiles: boolean)
    // private dataFixer: DataFixer;
    // private dimensions: LevelStem[];
    // private eraseCache: boolean;
    // private levelStorage: LevelStorageSource$LevelStorageAccess;
    // private levels: ResourceKey<Level>[];
    // private overworldSavedDataStorage: SavedDataStorage;
    // private recreateRegionFiles: boolean;
    // private statusTranslator: UpgradeStatusTranslator;
    // private thread: Thread;
    // private upgradeProgress: UpgradeProgress;
    cancel(): void;
    close(): void;
    dimensionProgress(dimension: ResourceKey<Level>): number;
    getConverted(): number;
    getSkipped(): number;
    getStatus(): Component;
    getTotalChunks(): number;
    getTotalProgress(): number;
    isFinished(): boolean;
    levels(): ResourceKey<Level>[];
    // private upgradeLevels(dataFixType: DataFixTypes, builder: RegionStorageUpgrader$Builder): void;
    // private upgradeLevels(dataFixType: DataFixTypes, builder: RegionStorageUpgrader$Builder, levelSpecificBuilder: (param0: RegionStorageUpgrader$Builder, param1: ResourceKey<Level>) => RegionStorageUpgrader$Builder): void;
    // private work(): void;
}