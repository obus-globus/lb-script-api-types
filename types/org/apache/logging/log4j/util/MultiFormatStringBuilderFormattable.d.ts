import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MultiformatMessage } from '../../../../../org/apache/logging/log4j/message/MultiformatMessage.d.ts'
import type { StringBuilderFormattable } from '../../../../../org/apache/logging/log4j/util/StringBuilderFormattable.d.ts'
export interface MultiFormatStringBuilderFormattable extends Object, MultiformatMessage, StringBuilderFormattable{
    formatTo(formats: string[], buffer: StringBuilder): void;
}