import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class GameMode extends Enum<GameMode> {
    static ADVENTURE: GameMode;
    static CREATIVE: GameMode;
    static NOT_SET: GameMode;
    static SPECTATOR: GameMode;
    static SURVIVAL: GameMode;
    static getById(paramarg0: number): GameMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): GameMode;
    static values(): GameMode[];
    private constructor(arg2: string, arg3: number)
    // private id: number;
    // private text: string;
    id(): number;
    text(): string;
    name(): "NOT_SET" | "SURVIVAL" | "CREATIVE" | "ADVENTURE" | "SPECTATOR";
}