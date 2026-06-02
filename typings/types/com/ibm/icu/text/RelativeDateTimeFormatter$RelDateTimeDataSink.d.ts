import type { UResource$Key } from '../../../../com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Sink } from '../../../../com/ibm/icu/impl/UResource$Sink.d.ts'
import type { UResource$Value } from '../../../../com/ibm/icu/impl/UResource$Value.d.ts'
import type { RelativeDateTimeFormatter$AbsoluteUnit } from '../../../../com/ibm/icu/text/RelativeDateTimeFormatter$AbsoluteUnit.d.ts'
import type { RelativeDateTimeFormatter$Direction } from '../../../../com/ibm/icu/text/RelativeDateTimeFormatter$Direction.d.ts'
import type { RelativeDateTimeFormatter$RelDateTimeDataSink$DateTimeUnit } from '../../../../com/ibm/icu/text/RelativeDateTimeFormatter$RelDateTimeDataSink$DateTimeUnit.d.ts'
import type { RelativeDateTimeFormatter$RelativeUnit } from '../../../../com/ibm/icu/text/RelativeDateTimeFormatter$RelativeUnit.d.ts'
import type { RelativeDateTimeFormatter$Style } from '../../../../com/ibm/icu/text/RelativeDateTimeFormatter$Style.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
export class RelativeDateTimeFormatter$RelDateTimeDataSink extends UResource$Sink {
    constructor()
    // private pastFutureIndex: number;
    // private qualitativeUnitMap: { [key in RelativeDateTimeFormatter$Style]: { [key in RelativeDateTimeFormatter$AbsoluteUnit]: { [key in RelativeDateTimeFormatter$Direction]: string } } };
    // private sb: StringBuilder;
    // private style: RelativeDateTimeFormatter$Style;
    // private styleRelUnitPatterns: { [key in RelativeDateTimeFormatter$Style]: { [key in RelativeDateTimeFormatter$RelativeUnit]: string[][] } };
    // private unit: RelativeDateTimeFormatter$RelDateTimeDataSink$DateTimeUnit;
    consumeTableRelative(arg0: UResource$Key, arg1: UResource$Value): void;
    consumeTableRelativeTime(arg0: UResource$Key, arg1: UResource$Value): void;
    consumeTimeDetail(arg0: UResource$Key, arg1: UResource$Value): void;
    consumeTimeUnit(arg0: UResource$Key, arg1: UResource$Value): void;
    // private handleAlias(arg0: UResource$Key, arg1: UResource$Value, arg2: boolean): void;
    // private handlePlainDirection(arg0: UResource$Key, arg1: UResource$Value): void;
    put(arg0: UResource$Key, arg1: UResource$Value, arg2: boolean): void;
    // private styleFromAlias(arg0: UResource$Value): RelativeDateTimeFormatter$Style;
    // private styleFromKey(arg0: UResource$Key): RelativeDateTimeFormatter$Style;
}