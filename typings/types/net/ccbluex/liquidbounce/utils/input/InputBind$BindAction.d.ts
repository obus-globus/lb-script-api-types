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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/707b7339b27ee1da75cb769c96b0d9d292d0a8ad/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt#L205 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt:205}
 */
export class InputBind$BindAction extends Enum<InputBind$BindAction> implements Tagged {
    static Companion: Tagged$Companion;
    static Companion: InputBind$BindAction$Companion;
    static HOLD: InputBind$BindAction;
    static SMART: InputBind$BindAction;
    static TOGGLE: InputBind$BindAction;
    static getEntries(): InputBind$BindAction[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(string: string): InputBind$BindAction;
    static of(string: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): InputBind$BindAction;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "TOGGLE" | "HOLD" | "SMART";
}