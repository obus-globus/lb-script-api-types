import type { Object } from '../../java/lang/Object.d.ts'
import type { Duration } from '../../kotlin/time/Duration.d.ts'
import type { DurationUnit } from '../../kotlin/time/DurationUnit.d.ts'
export class Duration$Companion extends Object {
    // private INFINITE: Duration;
// (invalid TS: name contains '-')     /*not mapped: */ getINFINITE-UwyO8pc(): Duration;
    // private INVALID: Duration;
// (invalid TS: name contains '-')     /*not mapped: */ getINVALID-UwyO8pc$kotlin_stdlib(): Duration;
    INVALID_RAW_VALUE: number;
    // private NEG_INFINITE: Duration;
// (invalid TS: name contains '-')     /*not mapped: */ getNEG_INFINITE-UwyO8pc$kotlin_stdlib(): Duration;
    // private ZERO: Duration;
// (invalid TS: name contains '-')     /*not mapped: */ getZERO-UwyO8pc(): Duration;
    convert(value: number, sourceUnit: DurationUnit, targetUnit: DurationUnit): number;
    fromRawValue(rawValue: number): Duration;
    parse(value: string): Duration;
    parseIsoString(value: string): Duration;
    parseIsoStringOrNull(value: string): Duration | null;
    parseOrNull(value: string): Duration | null;
}