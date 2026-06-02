import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Layout } from '../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { AbstractLayout } from '../../../../../../org/apache/logging/log4j/core/layout/AbstractLayout.d.ts'
import type { Message } from '../../../../../../org/apache/logging/log4j/message/Message.d.ts'
export class MessageLayout extends AbstractLayout<Message> {
    static ELEMENT_TYPE: string;
    static createLayout(): Layout<Object>;
    constructor()
    constructor(configuration: Configuration, header: number[], footer: number[])
    getContentType(): string;
    toByteArray(event: LogEvent): number[];
    toSerializable(event: LogEvent): Message;
}