import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { StringBuilderFormattable } from '../../../../../../org/apache/logging/log4j/util/StringBuilderFormattable.d.ts'
export interface Instant extends Object, StringBuilderFormattable{
    formatTo(buffer: StringBuilder): void;
    getEpochMillisecond(): number;
    getEpochSecond(): number;
    getNanoOfMillisecond(): number;
    getNanoOfSecond(): number;
}