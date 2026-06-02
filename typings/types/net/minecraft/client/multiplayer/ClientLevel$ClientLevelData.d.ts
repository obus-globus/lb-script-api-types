import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CrashReportCategory } from '../../../../net/minecraft/CrashReportCategory.d.ts'
import type { Difficulty } from '../../../../net/minecraft/world/Difficulty.d.ts'
import type { LevelHeightAccessor } from '../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
import type { LevelData$RespawnData } from '../../../../net/minecraft/world/level/storage/LevelData$RespawnData.d.ts'
import type { WritableLevelData } from '../../../../net/minecraft/world/level/storage/WritableLevelData.d.ts'
export class ClientLevel$ClientLevelData extends Object implements WritableLevelData {
    constructor(difficulty: Difficulty, hardcore: boolean, isFlat: boolean)
    readonly difficulty: Difficulty;
    readonly difficultyLocked: boolean;
    readonly gameTime: number;
    readonly hardcore: boolean;
    // private isFlat: boolean;
    readonly respawnData: LevelData$RespawnData;
    fillCrashReportCategory(category: CrashReportCategory, levelHeightAccessor: LevelHeightAccessor): void;
    getDifficulty(): Difficulty;
    getGameTime(): number;
    getHorizonHeight(level: LevelHeightAccessor): number;
    getRespawnData(): LevelData$RespawnData;
    isDifficultyLocked(): boolean;
    isHardcore(): boolean;
    setDifficulty(difficulty: Difficulty): void;
    setDifficultyLocked(locked: boolean): void;
    setGameTime(time: number): void;
    setSpawn(respawnData: LevelData$RespawnData): void;
    voidDarknessOnsetRange(): number;
}