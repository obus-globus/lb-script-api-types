import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class LocaleDisplayNames$DialectHandling extends Enum<LocaleDisplayNames$DialectHandling> {
    static DIALECT_NAMES: LocaleDisplayNames$DialectHandling;
    static STANDARD_NAMES: LocaleDisplayNames$DialectHandling;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): LocaleDisplayNames$DialectHandling;
    static values(): LocaleDisplayNames$DialectHandling[];
    private constructor()
    name(): "STANDARD_NAMES" | "DIALECT_NAMES";
}