import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { InputBind$Modifier$Companion } from '../../../../../net/ccbluex/liquidbounce/utils/input/InputBind$Modifier$Companion.d.ts'
export class InputBind$Modifier extends Enum<InputBind$Modifier> implements Tagged {
    static ALT: InputBind$Modifier;
    static CONTROL: InputBind$Modifier;
    static Companion: Tagged$Companion;
    static Companion: InputBind$Modifier$Companion;
    static SHIFT: InputBind$Modifier;
    static SUPER: InputBind$Modifier;
    static fromRawValue(paramarg0: number): InputBind$Modifier[];
    static getEntries(): InputBind$Modifier[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: number): InputBind$Modifier;
    static of(paramarg0: string): InputBind$Modifier;
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): InputBind$Modifier;
    static values(): (Object | null)[];
    private constructor(tag: string, bitMask: number, keyCodes: number[])
    readonly bitMask: number;
    /**
     * Check if any one modifier key is pressed.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt#L244 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt:244}
     */
    /*not mapped: */ isAnyPressed(): boolean;
    readonly keyCodes: number[];
    /**
     * Performs the platform (OS) specified render name of a modifier.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt#L249 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt:249}
     */
    readonly platformRenderName: string;
    readonly tag: string;
    /**
     * Check if self is active in {@link modifiers} value.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt#L239 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt:239}
     */
    isActive(modifiers: number): boolean;
    name(): "SHIFT" | "CONTROL" | "ALT" | "SUPER";
}