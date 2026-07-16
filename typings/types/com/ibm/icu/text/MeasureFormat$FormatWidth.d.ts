import type { NumberFormatter$UnitWidth } from '../../../../com/ibm/icu/number/NumberFormatter$UnitWidth.d.ts'
import type { ListFormatter$Width } from '../../../../com/ibm/icu/text/ListFormatter$Width.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class MeasureFormat$FormatWidth extends Enum<MeasureFormat$FormatWidth> {
    static DEFAULT_CURRENCY: MeasureFormat$FormatWidth;
    static NARROW: MeasureFormat$FormatWidth;
    static NUMERIC: MeasureFormat$FormatWidth;
    static SHORT: MeasureFormat$FormatWidth;
    static WIDE: MeasureFormat$FormatWidth;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MeasureFormat$FormatWidth;
    static values(): MeasureFormat$FormatWidth[];
    private constructor(arg2: ListFormatter$Width, arg3: NumberFormatter$UnitWidth, arg4: NumberFormatter$UnitWidth)
    // private currencyWidth: NumberFormatter$UnitWidth;
    // private listWidth: ListFormatter$Width;
    // private unitWidth: NumberFormatter$UnitWidth;
    name(): "WIDE" | "SHORT" | "NARROW" | "NUMERIC" | "DEFAULT_CURRENCY";
}