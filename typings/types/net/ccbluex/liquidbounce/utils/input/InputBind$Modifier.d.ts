import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { InputBind$Modifier$Companion } from '../../../../../net/ccbluex/liquidbounce/utils/input/InputBind$Modifier$Companion.d.ts'
export class InputBind$Modifier extends Enum<InputBind$Modifier> implements Tagged {
    static ALT: InputBind$Modifier;
    static CONTROL: InputBind$Modifier;
    static Companion: InputBind$Modifier$Companion;
    static SHIFT: InputBind$Modifier;
    static SUPER: InputBind$Modifier;
    static fromRawValue(modifiers: number): InputBind$Modifier[];
    static getEntries(): InputBind$Modifier[];
    static of(keyCode: number): InputBind$Modifier | null;
    static of(string: string | null): InputBind$Modifier | null;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): InputBind$Modifier;
    static values(): InputBind$Modifier[];
    private constructor(tag: string, bitMask: number, ...keyCodes: number[])
    readonly bitMask: number;
    /**
     * Check if any one modifier key is pressed.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt#L245 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt:245}
     */
    /*not mapped: */ isAnyPressed(): boolean;
    readonly keyCodes: number[];
    /**
     * Performs the platform (OS) specified render name of a modifier.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt#L250 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt:250}
     */
    readonly platformRenderName: string;
    readonly tag: string;
    /**
     * Check if self is active in {@link modifiers} value.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt#L240 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputBind.kt:240}
     */
    isActive(modifiers: number): boolean;
    name(): "SHIFT" | "CONTROL" | "ALT" | "SUPER";
}