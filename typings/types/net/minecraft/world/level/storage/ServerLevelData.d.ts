import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CrashReportCategory } from '../../../../../net/minecraft/CrashReportCategory.d.ts'
import type { GameType } from '../../../../../net/minecraft/world/level/GameType.d.ts'
import type { LevelHeightAccessor } from '../../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
import type { WritableLevelData } from '../../../../../net/minecraft/world/level/storage/WritableLevelData.d.ts'
export interface ServerLevelData extends Object, WritableLevelData{
    fillCrashReportCategory(category: CrashReportCategory, levelHeightAccessor: LevelHeightAccessor): void;
    getGameType(): GameType;
    getLevelName(): string;
    isAllowCommands(): boolean;
    isInitialized(): boolean;
    setGameTime(time: number): void;
    setGameType(gameType: GameType): void;
    setInitialized(initialized: boolean): void;
}