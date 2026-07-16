import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ICUResourceBundle$OpenType extends Enum<ICUResourceBundle$OpenType> {
    static DIRECT: ICUResourceBundle$OpenType;
    static LOCALE_DEFAULT_ROOT: ICUResourceBundle$OpenType;
    static LOCALE_ONLY: ICUResourceBundle$OpenType;
    static LOCALE_ROOT: ICUResourceBundle$OpenType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ICUResourceBundle$OpenType;
    static values(): ICUResourceBundle$OpenType[];
    private constructor()
    name(): "LOCALE_DEFAULT_ROOT" | "LOCALE_ROOT" | "LOCALE_ONLY" | "DIRECT";
}