import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Directionality extends Enum<Directionality> {
    static AUTO: Directionality;
    static INHERIT: Directionality;
    static LTR: Directionality;
    static RTL: Directionality;
    static UNKNOWN: Directionality;
    static of(paramarg0: ULocale): Directionality;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Directionality;
    static values(): (Object | null)[];
    private constructor()
    name(): "UNKNOWN" | "LTR" | "RTL" | "AUTO" | "INHERIT";
}