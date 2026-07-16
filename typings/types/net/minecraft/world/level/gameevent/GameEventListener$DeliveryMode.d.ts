import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class GameEventListener$DeliveryMode extends Enum<GameEventListener$DeliveryMode> {
    static BY_DISTANCE: GameEventListener$DeliveryMode;
    static UNSPECIFIED: GameEventListener$DeliveryMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): GameEventListener$DeliveryMode;
    static values(): GameEventListener$DeliveryMode[];
    private constructor()
    name(): "UNSPECIFIED" | "BY_DISTANCE";
}