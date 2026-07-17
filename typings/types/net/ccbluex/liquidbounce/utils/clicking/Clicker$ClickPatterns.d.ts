import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ClickPattern } from '../../../../../net/ccbluex/liquidbounce/utils/clicking/pattern/ClickPattern.d.ts'
export class Clicker$ClickPatterns extends Enum<Clicker$ClickPatterns> implements Tagged {
    static BUTTERFLY: Clicker$ClickPatterns;
    static Companion: Tagged$Companion;
    static DOUBLE_CLICK: Clicker$ClickPatterns;
    static DRAG: Clicker$ClickPatterns;
    static EFFICIENT: Clicker$ClickPatterns;
    static NORMAL_DISTRIBUTION: Clicker$ClickPatterns;
    static SPAMMING: Clicker$ClickPatterns;
    static STABILIZED: Clicker$ClickPatterns;
    static getEntries(): Clicker$ClickPatterns[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): Clicker$ClickPatterns;
    static values(): Clicker$ClickPatterns[];
    private constructor(tag: string, pattern: ClickPattern)
    readonly pattern: ClickPattern;
    readonly tag: string;
    name(): "STABILIZED" | "EFFICIENT" | "SPAMMING" | "DOUBLE_CLICK" | "DRAG" | "BUTTERFLY" | "NORMAL_DISTRIBUTION";
}