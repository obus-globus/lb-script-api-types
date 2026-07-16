import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class FormatStyle extends Enum<FormatStyle> {
    static FULL: FormatStyle;
    static LONG: FormatStyle;
    static MEDIUM: FormatStyle;
    static SHORT: FormatStyle;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): FormatStyle;
    static values(): FormatStyle[];
    private constructor()
    name(): "FULL" | "LONG" | "MEDIUM" | "SHORT";
}