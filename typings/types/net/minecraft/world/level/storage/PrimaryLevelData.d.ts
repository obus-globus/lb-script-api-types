import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { Lifecycle } from '../../../../../com/mojang/serialization/Lifecycle.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CrashReportCategory } from '../../../../../net/minecraft/CrashReportCategory.d.ts'
import type { CompoundTag } from '../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Difficulty } from '../../../../../net/minecraft/world/Difficulty.d.ts'
import type { FeatureFlagSet } from '../../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { GameType } from '../../../../../net/minecraft/world/level/GameType.d.ts'
import type { LevelHeightAccessor } from '../../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
import type { LevelSettings } from '../../../../../net/minecraft/world/level/LevelSettings.d.ts'
import type { WorldDataConfiguration } from '../../../../../net/minecraft/world/level/WorldDataConfiguration.d.ts'
import type { LevelData$RespawnData } from '../../../../../net/minecraft/world/level/storage/LevelData$RespawnData.d.ts'
import type { PrimaryLevelData$SpecialWorldProperty } from '../../../../../net/minecraft/world/level/storage/PrimaryLevelData$SpecialWorldProperty.d.ts'
import type { ServerLevelData } from '../../../../../net/minecraft/world/level/storage/ServerLevelData.d.ts'
import type { WorldData } from '../../../../../net/minecraft/world/level/storage/WorldData.d.ts'
export class PrimaryLevelData extends Object implements ServerLevelData, WorldData {
    static ANVIL_VERSION_ID: number;
    static LEVEL_NAME: string;
    static MCREGION_VERSION_ID: number;
    static parse(paraminput: Dynamic<Object>, paramsettings: LevelSettings, paramspecialWorldProperty: PrimaryLevelData$SpecialWorldProperty, paramworldGenSettingsLifecycle: Lifecycle): PrimaryLevelData;
    static writeLastPlayed(paramtag: Dynamic<Object>): Dynamic<Object>;
    static writeLastPlayed(paramtag: CompoundTag): void;
    static writeVersionTag(paramtag: Dynamic<Object>): Dynamic<Object>;
    static writeVersionTag(paramtag: CompoundTag): void;
    private constructor(singlePlayerUUID: UUID, wasModded: boolean, respawnData: LevelData$RespawnData, gameTime: number, version: number, initialized: boolean, knownServerBrands: string[], removedFeatureFlags: string[], settings: LevelSettings, specialWorldProperty: PrimaryLevelData$SpecialWorldProperty, worldGenSettingsLifecycle: Lifecycle)
    constructor(levelSettings: LevelSettings, specialWorldProperty: PrimaryLevelData$SpecialWorldProperty, lifecycle: Lifecycle)
    readonly gameTime: number;
    readonly initialized: boolean;
    readonly knownServerBrands: string[];
    readonly removedFeatureFlags: string[];
    readonly respawnData: LevelData$RespawnData;
    // private settings: LevelSettings;
    readonly singlePlayerUUID: UUID;
    // private specialWorldProperty: PrimaryLevelData$SpecialWorldProperty;
    readonly version: number;
    // private wasModded: boolean;
    // private worldGenSettingsLifecycle: Lifecycle;
    createTag(singlePlayerUUID: UUID): CompoundTag;
    enabledFeatures(): FeatureFlagSet;
    fillCrashReportCategory(category: CrashReportCategory): void;
    fillCrashReportCategory(category: CrashReportCategory, levelHeightAccessor: LevelHeightAccessor): void;
    getDataConfiguration(): WorldDataConfiguration;
    getDifficulty(): Difficulty;
    getGameTime(): number;
    getGameType(): GameType;
    getKnownServerBrands(): string[];
    getLevelName(): string;
    getLevelSettings(): LevelSettings;
    getRemovedFeatureFlags(): string[];
    getRespawnData(): LevelData$RespawnData;
    getSinglePlayerUUID(): UUID;
    getStorageVersionName(version: number): string;
    getVersion(): number;
    isAllowCommands(): boolean;
    isDebugWorld(): boolean;
    isDifficultyLocked(): boolean;
    isFlatWorld(): boolean;
    isHardcore(): boolean;
    isInitialized(): boolean;
    overworldData(): ServerLevelData;
    setAllowCommands(allowCommands: boolean): void;
    setDataConfiguration(dataConfiguration: WorldDataConfiguration): void;
    setDifficulty(difficulty: Difficulty): void;
    setDifficultyLocked(difficultyLocked: boolean): void;
    setGameTime(time: number): void;
    setGameType(gameType: GameType): void;
    setInitialized(initialized: boolean): void;
    setModdedInfo(serverBrand: string, isModded: boolean): void;
    setSpawn(respawnData: LevelData$RespawnData): void;
    // private setTagData(tag: CompoundTag, singlePlayerUUID: UUID): void;
    wasModded(): boolean;
    worldGenSettingsLifecycle(): Lifecycle;
}