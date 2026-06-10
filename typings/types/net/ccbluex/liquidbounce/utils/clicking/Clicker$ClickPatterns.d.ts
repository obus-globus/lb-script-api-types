import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
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
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Clicker$ClickPatterns;
    static values(): (Object | null)[];
    private constructor(tag: string, pattern: ClickPattern)
    readonly pattern: ClickPattern;
    readonly tag: string;
    name(): "STABILIZED" | "EFFICIENT" | "SPAMMING" | "DOUBLE_CLICK" | "DRAG" | "BUTTERFLY" | "NORMAL_DISTRIBUTION";
}