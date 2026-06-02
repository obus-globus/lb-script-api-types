import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class FormatStyle extends Enum<FormatStyle> {
    static FULL: FormatStyle;
    static LONG: FormatStyle;
    static MEDIUM: FormatStyle;
    static SHORT: FormatStyle;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): FormatStyle;
    static values(): (Object | null)[];
    private constructor()
    name(): "FULL" | "LONG" | "MEDIUM" | "SHORT";
}