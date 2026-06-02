import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { InputBind$BindAction$Companion } from '../../../../../net/ccbluex/liquidbounce/utils/input/InputBind$BindAction$Companion.d.ts'
/**
 * Action mode used to interpret bind input events.
 *
 * @param tag display name used in config/ui
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt#L200 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt:200}
 */
export class InputBind$BindAction extends Enum<InputBind$BindAction> implements Tagged {
    static Companion: Tagged$Companion;
    static Companion: InputBind$BindAction$Companion;
    /**
     * Stay enabled while key is held and disable on release.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt#L211 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt:211}
     */
    static HOLD: InputBind$BindAction;
    /**
     * Start as enabled on press, then classify as:
     * - hold if a repeat event is received before release
     * - toggle if release is received first
     * - toggle on unexpected fallback paths
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt#L216 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt:216}
     */
    static SMART: InputBind$BindAction;
    /**
     * Flip state when pressed.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt#L206 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt:206}
     */
    static TOGGLE: InputBind$BindAction;
    static getEntries(): InputBind$BindAction[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): InputBind$BindAction;
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): InputBind$BindAction;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "TOGGLE" | "HOLD" | "SMART";
}