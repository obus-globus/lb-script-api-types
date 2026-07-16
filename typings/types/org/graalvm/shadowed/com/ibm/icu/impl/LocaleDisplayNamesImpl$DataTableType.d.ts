import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class LocaleDisplayNamesImpl$DataTableType extends Enum<LocaleDisplayNamesImpl$DataTableType> {
    static LANG: LocaleDisplayNamesImpl$DataTableType;
    static REGION: LocaleDisplayNamesImpl$DataTableType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): LocaleDisplayNamesImpl$DataTableType;
    static values(): LocaleDisplayNamesImpl$DataTableType[];
    private constructor()
    name(): "LANG" | "REGION";
}