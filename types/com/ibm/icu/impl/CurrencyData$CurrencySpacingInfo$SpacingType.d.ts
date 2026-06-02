import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class CurrencyData$CurrencySpacingInfo$SpacingType extends Enum<CurrencyData$CurrencySpacingInfo$SpacingType> {
    static AFTER: CurrencyData$CurrencySpacingInfo$SpacingType;
    static BEFORE: CurrencyData$CurrencySpacingInfo$SpacingType;
    static COUNT: CurrencyData$CurrencySpacingInfo$SpacingType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CurrencyData$CurrencySpacingInfo$SpacingType;
    static values(): (Object | null)[];
    private constructor()
    name(): "BEFORE" | "AFTER" | "COUNT";
}