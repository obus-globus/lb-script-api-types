import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class Alignment$ScreenAxisX extends Enum<Alignment$ScreenAxisX> implements Tagged {
    static CENTER: Alignment$ScreenAxisX;
    static CENTER_TRANSLATED: Alignment$ScreenAxisX;
    static Companion: Tagged$Companion;
    static LEFT: Alignment$ScreenAxisX;
    static RIGHT: Alignment$ScreenAxisX;
    static getEntries(): Alignment$ScreenAxisX[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): Alignment$ScreenAxisX;
    static values(): Alignment$ScreenAxisX[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "LEFT" | "CENTER" | "CENTER_TRANSLATED" | "RIGHT";
}