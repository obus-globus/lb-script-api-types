import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
/**
 * Corrects movement when aiming away from client-side view direction.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/MovementCorrection.kt#L23 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/MovementCorrection.kt:23}
 */
export class MovementCorrection extends Enum<MovementCorrection> implements Tagged {
    /**
     * Corrects movement by changing the actual look direction of the player.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/MovementCorrection.kt#L47 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/MovementCorrection.kt:47}
     */
    static CHANGE_LOOK: MovementCorrection;
    static Companion: Tagged$Companion;
    /**
     * No movement correction is applied. This feels the best, as it does not
     * change the movement of the player and also not affects Sprinting.
     * However, this can be detected by anti-cheats.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/MovementCorrection.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/MovementCorrection.kt:28}
     */
    static OFF: MovementCorrection;
    /**
     * Correct movement by changing the yaw when updating the movement,
     * but also tweaks the keyboard input to not aggressively change the
     * players walk direction.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/MovementCorrection.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/MovementCorrection.kt:40}
     */
    static SILENT: MovementCorrection;
    /**
     * Corrects movement by changing the yaw when updating the movement.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/MovementCorrection.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/MovementCorrection.kt:35}
     */
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