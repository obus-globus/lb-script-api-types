import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class Locale$Category extends Enum<Locale$Category> {
    static DISPLAY: Locale$Category;
    static FORMAT: Locale$Category;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Locale$Category;
    static values(): Locale$Category[];
    private constructor(arg2: string, arg3: string, arg4: string, arg5: string, arg6: string)
    // private countryKey: string;
    // private extensionsKey: string;
    // private languageKey: string;
    // private scriptKey: string;
    // private variantKey: string;
    name(): "DISPLAY" | "FORMAT";
}