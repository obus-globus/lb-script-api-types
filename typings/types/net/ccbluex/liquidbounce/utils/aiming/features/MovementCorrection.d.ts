import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
/**
 * Corrects movement when aiming away from client-side view direction.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/MovementCorrection.kt#L26 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/MovementCorrection.kt:26}
 */
export class MovementCorrection extends Enum<MovementCorrection> implements Tagged {
    static CHANGE_LOOK: MovementCorrection;
    static Companion: Tagged$Companion;
    static OFF: MovementCorrection;
    static SILENT: MovementCorrection;
    static STRICT: MovementCorrection;
    static getEntries(): MovementCorrection[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): MovementCorrection;
    static values(): MovementCorrection[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "OFF" | "STRICT" | "SILENT" | "CHANGE_LOOK";
}