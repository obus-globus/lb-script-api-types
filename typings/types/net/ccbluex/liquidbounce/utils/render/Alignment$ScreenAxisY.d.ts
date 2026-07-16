import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class Alignment$ScreenAxisY extends Enum<Alignment$ScreenAxisY> implements Tagged {
    static BOTTOM: Alignment$ScreenAxisY;
    static CENTER: Alignment$ScreenAxisY;
    static CENTER_TRANSLATED: Alignment$ScreenAxisY;
    static Companion: Tagged$Companion;
    static TOP: Alignment$ScreenAxisY;
    static getEntries(): Alignment$ScreenAxisY[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): Alignment$ScreenAxisY;
    static values(): Alignment$ScreenAxisY[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "TOP" | "CENTER" | "CENTER_TRANSLATED" | "BOTTOM";
}