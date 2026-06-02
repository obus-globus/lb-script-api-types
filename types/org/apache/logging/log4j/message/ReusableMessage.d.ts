import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Message } from '../../../../../org/apache/logging/log4j/message/Message.d.ts'
import type { StringBuilderFormattable } from '../../../../../org/apache/logging/log4j/util/StringBuilderFormattable.d.ts'
export interface ReusableMessage extends Object, Message, StringBuilderFormattable{
    getFormat(): string;
    getParameterCount(): number;
    memento(): Message;
    swapParameters(emptyReplacement: Object[]): Object[];
}