import type { Object } from '../../../java/lang/Object.d.ts'
import type { Difficulty } from '../../../net/minecraft/world/Difficulty.d.ts'
export class DifficultyInstance extends Object {
    constructor(base: Difficulty, totalGameTime: number, localGameTime: number, moonBrightness: number)
    // private base: Difficulty;
    readonly effectiveDifficulty: number;
    // private calculateDifficulty(base: Difficulty, totalGameTime: number, localGameTime: number, moonBrightness: number): number;
    getDifficulty(): Difficulty;
    getEffectiveDifficulty(): number;
    getSpecialMultiplier(): number;
    isHard(): boolean;
    isHarderThan(requiredDifficulty: number): boolean;
}