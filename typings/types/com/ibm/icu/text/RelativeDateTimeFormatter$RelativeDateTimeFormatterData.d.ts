import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { RelativeDateTimeFormatter$AbsoluteUnit } from '../../../../com/ibm/icu/text/RelativeDateTimeFormatter$AbsoluteUnit.d.ts'
import type { RelativeDateTimeFormatter$Direction } from '../../../../com/ibm/icu/text/RelativeDateTimeFormatter$Direction.d.ts'
import type { RelativeDateTimeFormatter$RelativeUnit } from '../../../../com/ibm/icu/text/RelativeDateTimeFormatter$RelativeUnit.d.ts'
import type { RelativeDateTimeFormatter$Style } from '../../../../com/ibm/icu/text/RelativeDateTimeFormatter$Style.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RelativeDateTimeFormatter$RelativeDateTimeFormatterData extends Object {
    constructor(arg0: JavaMap<RelativeDateTimeFormatter$Style, JavaMap<RelativeDateTimeFormatter$AbsoluteUnit, JavaMap<RelativeDateTimeFormatter$Direction, string>>>, arg1: JavaMap<RelativeDateTimeFormatter$Style, JavaMap<RelativeDateTimeFormatter$RelativeUnit, string[][]>>, arg2: string)
    dateTimePattern: string;
    qualitativeUnitMap: JavaMap<RelativeDateTimeFormatter$Style, JavaMap<RelativeDateTimeFormatter$AbsoluteUnit, JavaMap<RelativeDateTimeFormatter$Direction, string>>>;
    // private relUnitPatternMap: JavaMap<RelativeDateTimeFormatter$Style, JavaMap<RelativeDateTimeFormatter$RelativeUnit, string[][]>>;
}