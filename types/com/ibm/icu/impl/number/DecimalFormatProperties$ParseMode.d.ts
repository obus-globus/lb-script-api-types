import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class DecimalFormatProperties$ParseMode extends Enum<DecimalFormatProperties$ParseMode> {
    static JAVA_COMPATIBILITY: DecimalFormatProperties$ParseMode;
    static LENIENT: DecimalFormatProperties$ParseMode;
    static STRICT: DecimalFormatProperties$ParseMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DecimalFormatProperties$ParseMode;
    static values(): (Object | null)[];
    private constructor()
    name(): "LENIENT" | "STRICT" | "JAVA_COMPATIBILITY";
}