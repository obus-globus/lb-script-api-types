import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { StringBuilderFormattable } from '../../../../../../org/apache/logging/log4j/util/StringBuilderFormattable.d.ts'
export interface Instant extends Object, StringBuilderFormattable{
    getEpochMillisecond(): number;
    getEpochSecond(): number;
    getNanoOfMillisecond(): number;
    getNanoOfSecond(): number;
}