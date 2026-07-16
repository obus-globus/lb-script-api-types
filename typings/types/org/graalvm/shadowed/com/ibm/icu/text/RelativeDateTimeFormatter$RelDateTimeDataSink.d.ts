import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { UResource$Key } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Sink } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Sink.d.ts'
import type { UResource$Value } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Value.d.ts'
import type { RelativeDateTimeFormatter$AbsoluteUnit } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RelativeDateTimeFormatter$AbsoluteUnit.d.ts'
import type { RelativeDateTimeFormatter$Direction } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RelativeDateTimeFormatter$Direction.d.ts'
import type { RelativeDateTimeFormatter$RelDateTimeDataSink$DateTimeUnit } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RelativeDateTimeFormatter$RelDateTimeDataSink$DateTimeUnit.d.ts'
import type { RelativeDateTimeFormatter$RelativeUnit } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RelativeDateTimeFormatter$RelativeUnit.d.ts'
import type { RelativeDateTimeFormatter$Style } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RelativeDateTimeFormatter$Style.d.ts'
export class RelativeDateTimeFormatter$RelDateTimeDataSink extends UResource$Sink {
    constructor()
    // private pastFutureIndex: number;
    // private qualitativeUnitMap: Map<RelativeDateTimeFormatter$Style, Map<RelativeDateTimeFormatter$AbsoluteUnit, Map<RelativeDateTimeFormatter$Direction, string>>>;
    // private sb: StringBuilder;
    // private style: RelativeDateTimeFormatter$Style;
    // private styleRelUnitPatterns: Map<RelativeDateTimeFormatter$Style, Map<RelativeDateTimeFormatter$RelativeUnit, string[][]>>;
    // private unit: RelativeDateTimeFormatter$RelDateTimeDataSink$DateTimeUnit;
    consumeTableRelative(key: UResource$Key, value: UResource$Value): void;
    consumeTableRelativeTime(key: UResource$Key, value: UResource$Value): void;
    consumeTimeDetail(key: UResource$Key, value: UResource$Value): void;
    consumeTimeUnit(key: UResource$Key, value: UResource$Value): void;
    // private handleAlias(key: UResource$Key, value: UResource$Value, noFallback: boolean): void;
    // private handlePlainDirection(key: UResource$Key, value: UResource$Value): void;
    put(key: UResource$Key, value: UResource$Value, noFallback: boolean): void;
    // private styleFromAlias(value: UResource$Value): RelativeDateTimeFormatter$Style;
    // private styleFromKey(key: UResource$Key): RelativeDateTimeFormatter$Style;
}