import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RelativeDateTimeFormatter$AbsoluteUnit } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RelativeDateTimeFormatter$AbsoluteUnit.d.ts'
import type { RelativeDateTimeFormatter$Direction } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RelativeDateTimeFormatter$Direction.d.ts'
import type { RelativeDateTimeFormatter$RelativeUnit } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RelativeDateTimeFormatter$RelativeUnit.d.ts'
import type { RelativeDateTimeFormatter$Style } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RelativeDateTimeFormatter$Style.d.ts'
export class RelativeDateTimeFormatter$RelativeDateTimeFormatterData extends Object {
    constructor(qualitativeUnitMap: JavaMap<RelativeDateTimeFormatter$Style, JavaMap<RelativeDateTimeFormatter$AbsoluteUnit, JavaMap<RelativeDateTimeFormatter$Direction, string>>>, relUnitPatternMap: JavaMap<RelativeDateTimeFormatter$Style, JavaMap<RelativeDateTimeFormatter$RelativeUnit, string[][]>>, dateTimePattern: string)
    dateTimePattern: string;
    qualitativeUnitMap: JavaMap<RelativeDateTimeFormatter$Style, JavaMap<RelativeDateTimeFormatter$AbsoluteUnit, JavaMap<RelativeDateTimeFormatter$Direction, string>>>;
    // private relUnitPatternMap: JavaMap<RelativeDateTimeFormatter$Style, JavaMap<RelativeDateTimeFormatter$RelativeUnit, string[][]>>;
}