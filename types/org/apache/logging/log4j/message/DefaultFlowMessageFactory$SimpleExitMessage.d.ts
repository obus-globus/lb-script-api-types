import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DefaultFlowMessageFactory$AbstractFlowMessage } from '../../../../../org/apache/logging/log4j/message/DefaultFlowMessageFactory$AbstractFlowMessage.d.ts'
import type { EntryMessage } from '../../../../../org/apache/logging/log4j/message/EntryMessage.d.ts'
import type { ExitMessage } from '../../../../../org/apache/logging/log4j/message/ExitMessage.d.ts'
import type { Message } from '../../../../../org/apache/logging/log4j/message/Message.d.ts'
export class DefaultFlowMessageFactory$SimpleExitMessage extends DefaultFlowMessageFactory$AbstractFlowMessage implements ExitMessage {
    constructor(exitText: string, result: Object, message: EntryMessage)
    constructor(exitText: string, result: Object, message: Message)
    constructor(exitText: string, message: EntryMessage)
    constructor(exitText: string, message: Message)
    // private isVoid: boolean;
    // private result: Object;
    getFormattedMessage(): string;
}