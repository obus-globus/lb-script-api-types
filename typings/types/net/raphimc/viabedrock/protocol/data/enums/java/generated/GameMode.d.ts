import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class GameMode extends Enum<GameMode> {
    static ADVENTURE: GameMode;
    static CREATIVE: GameMode;
    static SPECTATOR: GameMode;
    static SURVIVAL: GameMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): GameMode;
    static values(): GameMode[];
    private constructor()
    name(): "SURVIVAL" | "CREATIVE" | "ADVENTURE" | "SPECTATOR";
}