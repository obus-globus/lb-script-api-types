import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Message } from '../../../../../org/apache/logging/log4j/message/Message.d.ts'
import type { StringBuilderFormattable } from '../../../../../org/apache/logging/log4j/util/StringBuilderFormattable.d.ts'
export interface ReusableMessage extends Object, Message, StringBuilderFormattable{
    formatTo(buffer: StringBuilder): void;
    getFormat(): string;
    getFormattedMessage(): string;
    getParameterCount(): number;
    getThrowable(): Throwable;
    memento(): Message;
    swapParameters(emptyReplacement: Object[]): Object[];
}