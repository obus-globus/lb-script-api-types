import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class LocaleDisplayNamesImpl$DataTableType extends Enum<LocaleDisplayNamesImpl$DataTableType> {
    static LANG: LocaleDisplayNamesImpl$DataTableType;
    static REGION: LocaleDisplayNamesImpl$DataTableType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): LocaleDisplayNamesImpl$DataTableType;
    static values(): (Object | null)[];
    private constructor()
    name(): "LANG" | "REGION";
}