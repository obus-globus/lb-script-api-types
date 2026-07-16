import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RelativeDateTimeFormatter$AbsoluteUnit } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RelativeDateTimeFormatter$AbsoluteUnit.d.ts'
import type { RelativeDateTimeFormatter$Direction } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RelativeDateTimeFormatter$Direction.d.ts'
import type { RelativeDateTimeFormatter$RelativeUnit } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RelativeDateTimeFormatter$RelativeUnit.d.ts'
import type { RelativeDateTimeFormatter$Style } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RelativeDateTimeFormatter$Style.d.ts'
export class RelativeDateTimeFormatter$RelativeDateTimeFormatterData extends Object {
    constructor(qualitativeUnitMap: Map<RelativeDateTimeFormatter$Style, Map<RelativeDateTimeFormatter$AbsoluteUnit, Map<RelativeDateTimeFormatter$Direction, string>>>, relUnitPatternMap: Map<RelativeDateTimeFormatter$Style, Map<RelativeDateTimeFormatter$RelativeUnit, string[][]>>, dateTimePattern: string)
    dateTimePattern: string;
    qualitativeUnitMap: Map<RelativeDateTimeFormatter$Style, Map<RelativeDateTimeFormatter$AbsoluteUnit, Map<RelativeDateTimeFormatter$Direction, string>>>;
    // private relUnitPatternMap: Map<RelativeDateTimeFormatter$Style, Map<RelativeDateTimeFormatter$RelativeUnit, string[][]>>;
}