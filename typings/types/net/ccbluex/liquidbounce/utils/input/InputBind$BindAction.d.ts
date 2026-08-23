import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { InputBind$BindAction$Companion } from '../../../../../net/ccbluex/liquidbounce/utils/input/InputBind$BindAction$Companion.d.ts'
/**
 * Action mode used to interpret bind input events.
 *
 * @param tag display name used in config/ui
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2727616ee96ec8c4ceda97bebdd601f050a6856e/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt#L203 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt:203}
 */
export class InputBind$BindAction extends Enum<InputBind$BindAction> implements Tagged {
    static Companion: InputBind$BindAction$Companion;
    static HOLD: InputBind$BindAction;
    static SMART: InputBind$BindAction;
    static TOGGLE: InputBind$BindAction;
    static getEntries(): InputBind$BindAction[];
    static of(string: string | null): InputBind$BindAction | null;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): InputBind$BindAction;
    static values(): InputBind$BindAction[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "TOGGLE" | "HOLD" | "SMART";
}