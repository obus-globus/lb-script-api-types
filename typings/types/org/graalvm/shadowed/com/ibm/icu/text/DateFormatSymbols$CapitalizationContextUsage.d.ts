import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class DateFormatSymbols$CapitalizationContextUsage extends Enum<DateFormatSymbols$CapitalizationContextUsage> {
    static DAY_FORMAT: DateFormatSymbols$CapitalizationContextUsage;
    static DAY_NARROW: DateFormatSymbols$CapitalizationContextUsage;
    static DAY_STANDALONE: DateFormatSymbols$CapitalizationContextUsage;
    static ERA_ABBREV: DateFormatSymbols$CapitalizationContextUsage;
    static ERA_NARROW: DateFormatSymbols$CapitalizationContextUsage;
    static ERA_WIDE: DateFormatSymbols$CapitalizationContextUsage;
    static METAZONE_LONG: DateFormatSymbols$CapitalizationContextUsage;
    static METAZONE_SHORT: DateFormatSymbols$CapitalizationContextUsage;
    static MONTH_FORMAT: DateFormatSymbols$CapitalizationContextUsage;
    static MONTH_NARROW: DateFormatSymbols$CapitalizationContextUsage;
    static MONTH_STANDALONE: DateFormatSymbols$CapitalizationContextUsage;
    static OTHER: DateFormatSymbols$CapitalizationContextUsage;
    static ZONE_LONG: DateFormatSymbols$CapitalizationContextUsage;
    static ZONE_SHORT: DateFormatSymbols$CapitalizationContextUsage;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): DateFormatSymbols$CapitalizationContextUsage;
    static values(): DateFormatSymbols$CapitalizationContextUsage[];
    private constructor()
    name(): "OTHER" | "MONTH_FORMAT" | "MONTH_STANDALONE" | "MONTH_NARROW" | "DAY_FORMAT" | "DAY_STANDALONE" | "DAY_NARROW" | "ERA_WIDE" | "ERA_ABBREV" | "ERA_NARROW" | "ZONE_LONG" | "ZONE_SHORT" | "METAZONE_LONG" | "METAZONE_SHORT";
}