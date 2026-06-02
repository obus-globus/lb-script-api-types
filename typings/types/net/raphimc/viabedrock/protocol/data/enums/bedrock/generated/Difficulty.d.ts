import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class Difficulty extends Enum<Difficulty> {
    static Easy: Difficulty;
    static Hard: Difficulty;
    static Normal: Difficulty;
    static Peaceful: Difficulty;
    static Unknown: Difficulty;
    static getByName(paramarg0: string): Difficulty;
    static getByName(paramarg0: string, paramarg1: Difficulty): Difficulty;
    static getByValue(paramarg0: number): Difficulty;
    static getByValue(paramarg0: number, paramarg1: Difficulty): Difficulty;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Difficulty;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: Difficulty)
    readonly value: number;
    getValue(): number;
    name(): "Peaceful" | "Easy" | "Normal" | "Hard" | "Unknown";
}