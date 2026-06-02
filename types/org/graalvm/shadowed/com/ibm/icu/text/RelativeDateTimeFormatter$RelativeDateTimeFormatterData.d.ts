import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RelativeDateTimeFormatter$AbsoluteUnit } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RelativeDateTimeFormatter$AbsoluteUnit.d.ts'
import type { RelativeDateTimeFormatter$Direction } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RelativeDateTimeFormatter$Direction.d.ts'
import type { RelativeDateTimeFormatter$RelativeUnit } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RelativeDateTimeFormatter$RelativeUnit.d.ts'
import type { RelativeDateTimeFormatter$Style } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RelativeDateTimeFormatter$Style.d.ts'
export class RelativeDateTimeFormatter$RelativeDateTimeFormatterData extends Object {
    constructor(qualitativeUnitMap: { [key in RelativeDateTimeFormatter$Style]: { [key in RelativeDateTimeFormatter$AbsoluteUnit]: { [key in RelativeDateTimeFormatter$Direction]: string } } }, relUnitPatternMap: { [key in RelativeDateTimeFormatter$Style]: { [key in RelativeDateTimeFormatter$RelativeUnit]: string[][] } }, dateTimePattern: string)
    dateTimePattern: string;
    qualitativeUnitMap: { [key in RelativeDateTimeFormatter$Style]: { [key in RelativeDateTimeFormatter$AbsoluteUnit]: { [key in RelativeDateTimeFormatter$Direction]: string } } };
    // private relUnitPatternMap: { [key in RelativeDateTimeFormatter$Style]: { [key in RelativeDateTimeFormatter$RelativeUnit]: string[][] } };
}