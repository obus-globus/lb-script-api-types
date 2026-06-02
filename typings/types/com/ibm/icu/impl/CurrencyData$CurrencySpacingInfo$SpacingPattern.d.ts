import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class CurrencyData$CurrencySpacingInfo$SpacingPattern extends Enum<CurrencyData$CurrencySpacingInfo$SpacingPattern> {
    static COUNT: CurrencyData$CurrencySpacingInfo$SpacingPattern;
    static CURRENCY_MATCH: CurrencyData$CurrencySpacingInfo$SpacingPattern;
    static INSERT_BETWEEN: CurrencyData$CurrencySpacingInfo$SpacingPattern;
    static SURROUNDING_MATCH: CurrencyData$CurrencySpacingInfo$SpacingPattern;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CurrencyData$CurrencySpacingInfo$SpacingPattern;
    static values(): (Object | null)[];
    private constructor()
    private constructor(arg2: number)
    name(): "CURRENCY_MATCH" | "SURROUNDING_MATCH" | "INSERT_BETWEEN" | "COUNT";
}