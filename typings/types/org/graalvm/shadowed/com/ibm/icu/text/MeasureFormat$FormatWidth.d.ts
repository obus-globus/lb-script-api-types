import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { NumberFormatter$UnitWidth } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/NumberFormatter$UnitWidth.d.ts'
import type { ListFormatter$Width } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/ListFormatter$Width.d.ts'
export class MeasureFormat$FormatWidth extends Enum<MeasureFormat$FormatWidth> {
    static DEFAULT_CURRENCY: MeasureFormat$FormatWidth;
    static NARROW: MeasureFormat$FormatWidth;
    static NUMERIC: MeasureFormat$FormatWidth;
    static SHORT: MeasureFormat$FormatWidth;
    static WIDE: MeasureFormat$FormatWidth;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): MeasureFormat$FormatWidth;
    static values(): MeasureFormat$FormatWidth[];
    private constructor(listWidth: ListFormatter$Width, unitWidth: NumberFormatter$UnitWidth, currencyWidth: NumberFormatter$UnitWidth)
    // private currencyWidth: NumberFormatter$UnitWidth;
    // private listWidth: ListFormatter$Width;
    // private unitWidth: NumberFormatter$UnitWidth;
    name(): "WIDE" | "SHORT" | "NARROW" | "NUMERIC" | "DEFAULT_CURRENCY";
}