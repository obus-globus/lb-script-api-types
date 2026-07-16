import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class Currency$CurrencyUsage extends Enum<Currency$CurrencyUsage> {
    static CASH: Currency$CurrencyUsage;
    static STANDARD: Currency$CurrencyUsage;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Currency$CurrencyUsage;
    static values(): Currency$CurrencyUsage[];
    private constructor()
    name(): "STANDARD" | "CASH";
}