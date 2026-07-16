import type { RelativeDateTimeFormatter$AbsoluteUnit } from '../../../../com/ibm/icu/text/RelativeDateTimeFormatter$AbsoluteUnit.d.ts'
import type { RelativeDateTimeFormatter$Direction } from '../../../../com/ibm/icu/text/RelativeDateTimeFormatter$Direction.d.ts'
import type { RelativeDateTimeFormatter$RelativeUnit } from '../../../../com/ibm/icu/text/RelativeDateTimeFormatter$RelativeUnit.d.ts'
import type { RelativeDateTimeFormatter$Style } from '../../../../com/ibm/icu/text/RelativeDateTimeFormatter$Style.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RelativeDateTimeFormatter$RelativeDateTimeFormatterData extends Object {
    constructor(arg0: Map<RelativeDateTimeFormatter$Style, Map<RelativeDateTimeFormatter$AbsoluteUnit, Map<RelativeDateTimeFormatter$Direction, string>>>, arg1: Map<RelativeDateTimeFormatter$Style, Map<RelativeDateTimeFormatter$RelativeUnit, string[][]>>, arg2: string)
    dateTimePattern: string;
    qualitativeUnitMap: Map<RelativeDateTimeFormatter$Style, Map<RelativeDateTimeFormatter$AbsoluteUnit, Map<RelativeDateTimeFormatter$Direction, string>>>;
    // private relUnitPatternMap: Map<RelativeDateTimeFormatter$Style, Map<RelativeDateTimeFormatter$RelativeUnit, string[][]>>;
}