import type { DefaultFlowMessageFactory$AbstractFlowMessage } from '../../../../../org/apache/logging/log4j/message/DefaultFlowMessageFactory$AbstractFlowMessage.d.ts'
import type { EntryMessage } from '../../../../../org/apache/logging/log4j/message/EntryMessage.d.ts'
import type { Message } from '../../../../../org/apache/logging/log4j/message/Message.d.ts'
export class DefaultFlowMessageFactory$SimpleEntryMessage extends DefaultFlowMessageFactory$AbstractFlowMessage implements EntryMessage {
    constructor(entryText: string, message: Message)
}