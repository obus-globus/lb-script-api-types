import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { FlowMessage } from '../../../../../org/apache/logging/log4j/message/FlowMessage.d.ts'
import type { Message } from '../../../../../org/apache/logging/log4j/message/Message.d.ts'
export interface ExitMessage extends Object, FlowMessage{
    getFormattedMessage(): string;
    getMessage(): Message;
    getText(): string;
    getThrowable(): Throwable;
}