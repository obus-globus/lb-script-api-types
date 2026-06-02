import type { UResource$Key } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Sink } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Sink.d.ts'
import type { UResource$Table } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Table.d.ts'
import type { UResource$Value } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Value.d.ts'
export class LongNameHandler$InflectedPluralSink extends UResource$Sink {
    constructor(gender: string, caseVariant: string, outArray: string[])
    // private caseVariant: string;
    // private gender: string;
    // private outArray: string[];
    // private loadForCase(caseTable: UResource$Table, caseValue: string, value: UResource$Value): boolean;
    // private loadForGender(genderTable: UResource$Table, genderVal: string, value: UResource$Value): boolean;
    // private loadForPluralForm(genderTable: UResource$Table, value: UResource$Value): boolean;
    put(key: UResource$Key, value: UResource$Value, noFallback: boolean): void;
}