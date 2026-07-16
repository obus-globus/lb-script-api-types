import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Directionality extends Enum<Directionality> {
    static AUTO: Directionality;
    static INHERIT: Directionality;
    static LTR: Directionality;
    static RTL: Directionality;
    static UNKNOWN: Directionality;
    static of(paramarg0: Locale): Directionality;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Directionality;
    static values(): Directionality[];
    private constructor()
    name(): "UNKNOWN" | "LTR" | "RTL" | "AUTO" | "INHERIT";
}