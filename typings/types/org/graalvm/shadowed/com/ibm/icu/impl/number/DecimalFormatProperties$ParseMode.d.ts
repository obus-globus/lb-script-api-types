import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class DecimalFormatProperties$ParseMode extends Enum<DecimalFormatProperties$ParseMode> {
    static JAVA_COMPATIBILITY: DecimalFormatProperties$ParseMode;
    static LENIENT: DecimalFormatProperties$ParseMode;
    static STRICT: DecimalFormatProperties$ParseMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): DecimalFormatProperties$ParseMode;
    static values(): DecimalFormatProperties$ParseMode[];
    private constructor()
    name(): "LENIENT" | "STRICT" | "JAVA_COMPATIBILITY";
}