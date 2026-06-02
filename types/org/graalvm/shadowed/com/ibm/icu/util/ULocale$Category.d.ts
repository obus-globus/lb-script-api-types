import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class ULocale$Category extends Enum<ULocale$Category> {
    static DISPLAY: ULocale$Category;
    static FORMAT: ULocale$Category;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ULocale$Category;
    static values(): (Object | null)[];
    private constructor()
    name(): "DISPLAY" | "FORMAT";
}