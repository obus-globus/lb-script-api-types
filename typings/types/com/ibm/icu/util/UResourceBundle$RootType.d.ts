import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class UResourceBundle$RootType extends Enum<UResourceBundle$RootType> {
    static ICU: UResourceBundle$RootType;
    static JAVA: UResourceBundle$RootType;
    static MISSING: UResourceBundle$RootType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): UResourceBundle$RootType;
    static values(): UResourceBundle$RootType[];
    private constructor()
    name(): "MISSING" | "ICU" | "JAVA";
}