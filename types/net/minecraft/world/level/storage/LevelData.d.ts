import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CrashReportCategory } from '../../../../../net/minecraft/CrashReportCategory.d.ts'
import type { Difficulty } from '../../../../../net/minecraft/world/Difficulty.d.ts'
import type { LevelHeightAccessor } from '../../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
import type { LevelData$RespawnData } from '../../../../../net/minecraft/world/level/storage/LevelData$RespawnData.d.ts'
export interface LevelData extends Object{
    fillCrashReportCategory(category: CrashReportCategory, levelHeightAccessor: LevelHeightAccessor): void;
    getDifficulty(): Difficulty;
    getGameTime(): number;
    getRespawnData(): LevelData$RespawnData;
    isDifficultyLocked(): boolean;
    isHardcore(): boolean;
}