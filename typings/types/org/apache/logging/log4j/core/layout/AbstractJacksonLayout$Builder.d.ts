import type { AbstractStringLayout$Builder } from '../../../../../../org/apache/logging/log4j/core/layout/AbstractStringLayout$Builder.d.ts'
import type { KeyValuePair } from '../../../../../../org/apache/logging/log4j/core/util/KeyValuePair.d.ts'
export abstract class AbstractJacksonLayout$Builder<B extends AbstractJacksonLayout$Builder<B>> extends AbstractStringLayout$Builder<B> {
    constructor()
    readonly additionalFields: KeyValuePair[];
    readonly compact: boolean;
    readonly complete: boolean;
    readonly endOfLine: string;
    readonly eventEol: boolean;
    readonly includeNullDelimiter: boolean;
    readonly includeStacktrace: boolean;
    readonly includeTimeMillis: boolean;
    readonly locationInfo: boolean;
    readonly properties: boolean;
    readonly stacktraceAsString: boolean;
    getAdditionalFields(): KeyValuePair[];
    getEndOfLine(): string;
    getEventEol(): boolean;
    isCompact(): boolean;
    isComplete(): boolean;
    isIncludeNullDelimiter(): boolean;
    isIncludeStacktrace(): boolean;
    isIncludeTimeMillis(): boolean;
    isLocationInfo(): boolean;
    isProperties(): boolean;
    isStacktraceAsString(): boolean;
    setAdditionalFields(additionalFields: KeyValuePair[]): B;
    setCompact(compact: boolean): B;
    setComplete(complete: boolean): B;
    setEndOfLine(endOfLine: string): B;
    setEventEol(eventEol: boolean): B;
    setIncludeNullDelimiter(includeNullDelimiter: boolean): B;
    setIncludeStacktrace(includeStacktrace: boolean): B;
    setIncludeTimeMillis(includeTimeMillis: boolean): B;
    setLocationInfo(locationInfo: boolean): B;
    setProperties(properties: boolean): B;
    setStacktraceAsString(stacktraceAsString: boolean): B;
    toStringOrNull(header: number[]): string;
}