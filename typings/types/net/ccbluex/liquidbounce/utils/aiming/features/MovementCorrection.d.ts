import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
/**
 * Corrects movement when aiming away from client-side view direction.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/26472f4415000921e37ac654ef9e544e7d3750c9/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/MovementCorrection.kt#L26 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/MovementCorrection.kt:26}
 */
export class MovementCorrection extends Enum<MovementCorrection> implements Tagged {
    static CHANGE_LOOK: MovementCorrection;
    static Companion: Tagged$Companion;
    static OFF: MovementCorrection;
    static SILENT: MovementCorrection;
    static STRICT: MovementCorrection;
    static getEntries(): MovementCorrection[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MovementCorrection;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "OFF" | "STRICT" | "SILENT" | "CHANGE_LOOK";
}