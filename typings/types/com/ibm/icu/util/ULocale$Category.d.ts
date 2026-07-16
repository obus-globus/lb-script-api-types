import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ULocale$Category extends Enum<ULocale$Category> {
    static DISPLAY: ULocale$Category;
    static FORMAT: ULocale$Category;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ULocale$Category;
    static values(): ULocale$Category[];
    private constructor()
    name(): "DISPLAY" | "FORMAT";
}