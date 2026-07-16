import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class GameEventListener$DeliveryMode extends Enum<GameEventListener$DeliveryMode> {
    static BY_DISTANCE: GameEventListener$DeliveryMode;
    static UNSPECIFIED: GameEventListener$DeliveryMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): GameEventListener$DeliveryMode;
    static values(): GameEventListener$DeliveryMode[];
    private constructor()
    name(): "UNSPECIFIED" | "BY_DISTANCE";
}