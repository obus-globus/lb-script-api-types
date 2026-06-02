import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EntryMessage } from '../../../../../org/apache/logging/log4j/message/EntryMessage.d.ts'
import type { ExitMessage } from '../../../../../org/apache/logging/log4j/message/ExitMessage.d.ts'
import type { FlowMessageFactory } from '../../../../../org/apache/logging/log4j/message/FlowMessageFactory.d.ts'
import type { Message } from '../../../../../org/apache/logging/log4j/message/Message.d.ts'
export class DefaultFlowMessageFactory extends Object implements Serializable, FlowMessageFactory {
    static INSTANCE: FlowMessageFactory;
    constructor()
    constructor(entryText: string, exitText: string)
    readonly entryText: string;
    readonly exitText: string;
    getEntryText(): string;
    getExitText(): string;
    // private makeImmutable(message: Message): Message;
    newEntryMessage(format: string, params: Object[]): EntryMessage;
    newEntryMessage(message: Message): EntryMessage;
    newExitMessage(result: Object, message: EntryMessage): ExitMessage;
    newExitMessage(result: Object, message: Message): ExitMessage;
    newExitMessage(format: string, result: Object): ExitMessage;
    newExitMessage(message: EntryMessage): ExitMessage;
    newExitMessage(message: Message): ExitMessage;
}