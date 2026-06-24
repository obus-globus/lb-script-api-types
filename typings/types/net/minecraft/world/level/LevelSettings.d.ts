import type { Dynamic } from '../../../../com/mojang/serialization/Dynamic.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Difficulty } from '../../../../net/minecraft/world/Difficulty.d.ts'
import type { GameType } from '../../../../net/minecraft/world/level/GameType.d.ts'
import type { LevelSettings$DifficultySettings } from '../../../../net/minecraft/world/level/LevelSettings$DifficultySettings.d.ts'
import type { WorldDataConfiguration } from '../../../../net/minecraft/world/level/WorldDataConfiguration.d.ts'
export class LevelSettings extends Record {
    static parse(paraminput: Dynamic<Object>, paramloadConfig: WorldDataConfiguration): LevelSettings;
    constructor(levelName: string, gameType: GameType, difficultySettings: LevelSettings$DifficultySettings, allowCommands: boolean, dataConfiguration: WorldDataConfiguration)
    // private allowCommands: boolean;
    // private dataConfiguration: WorldDataConfiguration;
    // private difficultySettings: LevelSettings$DifficultySettings;
    // private gameType: GameType;
    // private levelName: string;
    allowCommands(): boolean;
    copy(): LevelSettings;
    dataConfiguration(): WorldDataConfiguration;
    difficultySettings(): LevelSettings$DifficultySettings;
    equals(o: Object | null): boolean;
    gameType(): GameType;
    hashCode(): number;
    levelName(): string;
    toString(): string;
    withAllowCommands(allowCommands: boolean): LevelSettings;
    withDataConfiguration(dataConfiguration: WorldDataConfiguration): LevelSettings;
    withDifficulty(difficulty: Difficulty): LevelSettings;
    withDifficultyLock(locked: boolean): LevelSettings;
    withGameType(gameType: GameType): LevelSettings;
}