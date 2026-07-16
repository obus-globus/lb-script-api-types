import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class GameRule_Type extends Enum<GameRule_Type> {
    static Bool: GameRule_Type;
    static Float: GameRule_Type;
    static Int: GameRule_Type;
    static Invalid: GameRule_Type;
    static getByName(paramarg0: string): GameRule_Type;
    static getByName(paramarg0: string, paramarg1: GameRule_Type): GameRule_Type;
    static getByValue(paramarg0: number): GameRule_Type;
    static getByValue(paramarg0: number, paramarg1: GameRule_Type): GameRule_Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): GameRule_Type;
    static values(): GameRule_Type[];
    private constructor(arg2: number)
    private constructor(arg2: GameRule_Type)
    readonly value: number;
    getValue(): number;
    name(): "Invalid" | "Bool" | "Int" | "Float";
}