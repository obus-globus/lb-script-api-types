import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CrashReportCategory } from '../../../../../net/minecraft/CrashReportCategory.d.ts'
import type { Difficulty } from '../../../../../net/minecraft/world/Difficulty.d.ts'
import type { GameType } from '../../../../../net/minecraft/world/level/GameType.d.ts'
import type { LevelHeightAccessor } from '../../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
import type { LevelData$RespawnData } from '../../../../../net/minecraft/world/level/storage/LevelData$RespawnData.d.ts'
import type { WritableLevelData } from '../../../../../net/minecraft/world/level/storage/WritableLevelData.d.ts'
export interface ServerLevelData extends Object, WritableLevelData{
    fillCrashReportCategory(category: CrashReportCategory, levelHeightAccessor: LevelHeightAccessor): void;
    getDifficulty(): Difficulty;
    getGameTime(): number;
    getGameType(): GameType;
    getLevelName(): string;
    getRespawnData(): LevelData$RespawnData;
    isAllowCommands(): boolean;
    isDifficultyLocked(): boolean;
    isHardcore(): boolean;
    isInitialized(): boolean;
    setAllowCommands(allowCommands: boolean): void;
    setGameTime(time: number): void;
    setGameType(gameType: GameType): void;
    setInitialized(initialized: boolean): void;
    setSpawn(respawnData: LevelData$RespawnData): void;
}