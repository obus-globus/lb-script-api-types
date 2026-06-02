import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractLayout } from '../../../../../../org/apache/logging/log4j/core/layout/AbstractLayout.d.ts'
export class SerializedLayout extends AbstractLayout<LogEvent> {
    static ELEMENT_TYPE: string;
    static createLayout(): SerializedLayout;
    private constructor()
    getContentType(): string;
    getHeader(): number[];
    toByteArray(event: LogEvent): number[];
    toSerializable(event: LogEvent): LogEvent;
}