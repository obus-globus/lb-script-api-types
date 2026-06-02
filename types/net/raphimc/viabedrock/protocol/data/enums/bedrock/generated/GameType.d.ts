import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class GameType extends Enum<GameType> {
    static Adventure: GameType;
    static Creative: GameType;
    static Default: GameType;
    static Spectator: GameType;
    static Survival: GameType;
    static Undefined: GameType;
    static WorldDefault: GameType;
    static getByName(paramarg0: string): GameType;
    static getByName(paramarg0: string, paramarg1: GameType): GameType;
    static getByValue(paramarg0: number): GameType;
    static getByValue(paramarg0: number, paramarg1: GameType): GameType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): GameType;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: GameType)
    readonly value: number;
    getValue(): number;
    name(): "Undefined" | "Survival" | "Creative" | "Adventure" | "Default" | "Spectator" | "WorldDefault";
}