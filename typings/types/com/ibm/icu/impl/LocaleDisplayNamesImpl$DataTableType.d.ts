import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class LocaleDisplayNamesImpl$DataTableType extends Enum<LocaleDisplayNamesImpl$DataTableType> {
    static LANG: LocaleDisplayNamesImpl$DataTableType;
    static REGION: LocaleDisplayNamesImpl$DataTableType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LocaleDisplayNamesImpl$DataTableType;
    static values(): LocaleDisplayNamesImpl$DataTableType[];
    private constructor()
    name(): "LANG" | "REGION";
}