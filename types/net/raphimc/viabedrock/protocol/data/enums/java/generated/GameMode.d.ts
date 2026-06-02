import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class GameMode extends Enum<GameMode> {
    static ADVENTURE: GameMode;
    static CREATIVE: GameMode;
    static SPECTATOR: GameMode;
    static SURVIVAL: GameMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): GameMode;
    static values(): (Object | null)[];
    private constructor()
    name(): "SURVIVAL" | "CREATIVE" | "ADVENTURE" | "SPECTATOR";
}