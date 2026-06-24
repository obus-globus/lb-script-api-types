import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Difficulty } from '../../../../net/minecraft/world/Difficulty.d.ts'
export class LevelSettings$DifficultySettings extends Record {
    static CODEC: Codec<LevelSettings$DifficultySettings>;
    static DEFAULT: LevelSettings$DifficultySettings;
    constructor(difficulty: Difficulty, hardcore: boolean, locked: boolean)
    // private difficulty: Difficulty;
    // private hardcore: boolean;
    // private locked: boolean;
    difficulty(): Difficulty;
    equals(o: Object | null): boolean;
    hardcore(): boolean;
    hashCode(): number;
    locked(): boolean;
    toString(): string;
}