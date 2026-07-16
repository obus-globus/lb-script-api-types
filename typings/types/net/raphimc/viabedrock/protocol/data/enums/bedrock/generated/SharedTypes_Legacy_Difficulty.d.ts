import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class SharedTypes_Legacy_Difficulty extends Enum<SharedTypes_Legacy_Difficulty> {
    static Easy: SharedTypes_Legacy_Difficulty;
    static Hard: SharedTypes_Legacy_Difficulty;
    static Normal: SharedTypes_Legacy_Difficulty;
    static Peaceful: SharedTypes_Legacy_Difficulty;
    static Unknown: SharedTypes_Legacy_Difficulty;
    static getByName(paramarg0: string): SharedTypes_Legacy_Difficulty;
    static getByName(paramarg0: string, paramarg1: SharedTypes_Legacy_Difficulty): SharedTypes_Legacy_Difficulty;
    static getByValue(paramarg0: number): SharedTypes_Legacy_Difficulty;
    static getByValue(paramarg0: number, paramarg1: SharedTypes_Legacy_Difficulty): SharedTypes_Legacy_Difficulty;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): SharedTypes_Legacy_Difficulty;
    static values(): SharedTypes_Legacy_Difficulty[];
    private constructor(arg2: number)
    private constructor(arg2: SharedTypes_Legacy_Difficulty)
    readonly value: number;
    getValue(): number;
    name(): "Peaceful" | "Easy" | "Normal" | "Hard" | "Unknown";
}