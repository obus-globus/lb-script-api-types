import type { Lifecycle } from '../../../../../com/mojang/serialization/Lifecycle.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CrashReportCategory } from '../../../../../net/minecraft/CrashReportCategory.d.ts'
import type { CompoundTag } from '../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Difficulty } from '../../../../../net/minecraft/world/Difficulty.d.ts'
import type { FeatureFlagSet } from '../../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { GameType } from '../../../../../net/minecraft/world/level/GameType.d.ts'
import type { LevelSettings } from '../../../../../net/minecraft/world/level/LevelSettings.d.ts'
import type { WorldDataConfiguration } from '../../../../../net/minecraft/world/level/WorldDataConfiguration.d.ts'
import type { ServerLevelData } from '../../../../../net/minecraft/world/level/storage/ServerLevelData.d.ts'
export interface WorldData extends Object{
    createTag(singlePlayerUUID: UUID): CompoundTag;
    enabledFeatures(): FeatureFlagSet;
    fillCrashReportCategory(category: CrashReportCategory): void;
    getDataConfiguration(): WorldDataConfiguration;
    getDifficulty(): Difficulty;
    getGameType(): GameType;
    getKnownServerBrands(): string[];
    getLevelName(): string;
    getLevelSettings(): LevelSettings;
    getRemovedFeatureFlags(): string[];
    getSinglePlayerUUID(): UUID;
    getStorageVersionName(version: number): string;
    getVersion(): number;
    isAllowCommands(): boolean;
    isDebugWorld(): boolean;
    isDifficultyLocked(): boolean;
    isFlatWorld(): boolean;
    isHardcore(): boolean;
    overworldData(): ServerLevelData;
    setDataConfiguration(dataConfiguration: WorldDataConfiguration): void;
    setDifficulty(difficulty: Difficulty): void;
    setDifficultyLocked(difficultyLocked: boolean): void;
    setGameType(gameType: GameType): void;
    setModdedInfo(serverBrand: string, isModded: boolean): void;
    wasModded(): boolean;
    worldGenSettingsLifecycle(): Lifecycle;
}