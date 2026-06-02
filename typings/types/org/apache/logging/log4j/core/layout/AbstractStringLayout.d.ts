import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { StringLayout } from '../../../../../../org/apache/logging/log4j/core/StringLayout.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { DefaultLogEventFactory } from '../../../../../../org/apache/logging/log4j/core/impl/DefaultLogEventFactory.d.ts'
import type { LocationAware } from '../../../../../../org/apache/logging/log4j/core/impl/LocationAware.d.ts'
import type { AbstractLayout } from '../../../../../../org/apache/logging/log4j/core/layout/AbstractLayout.d.ts'
import type { AbstractStringLayout$Serializer } from '../../../../../../org/apache/logging/log4j/core/layout/AbstractStringLayout$Serializer.d.ts'
import type { Encoder } from '../../../../../../org/apache/logging/log4j/core/layout/Encoder.d.ts'
export abstract class AbstractStringLayout extends AbstractLayout<string> implements StringLayout, LocationAware {
    static ELEMENT_TYPE: string;
    constructor(charset: Charset)
    constructor(aCharset: Charset, header: number[], footer: number[])
    constructor(config: Configuration, aCharset: Charset, headerSerializer: AbstractStringLayout$Serializer, footerSerializer: AbstractStringLayout$Serializer)
    readonly charset: Charset;
    readonly footerSerializer: AbstractStringLayout$Serializer;
    readonly headerSerializer: AbstractStringLayout$Serializer;
    // private textEncoder: Encoder<StringBuilder>;
    getBytes(s: string): number[];
    getCharset(): Charset;
    getContentType(): string;
    getFooter(): number[];
    getFooterSerializer(): AbstractStringLayout$Serializer;
    getHeader(): number[];
    getHeaderSerializer(): AbstractStringLayout$Serializer;
    // private getLogEventFactory(): DefaultLogEventFactory;
    getStringBuilderEncoder(): Encoder<StringBuilder>;
    requiresLocation(): boolean;
    serializeToBytes(serializer: AbstractStringLayout$Serializer, defaultValue: number[]): number[];
    serializeToString(serializer: AbstractStringLayout$Serializer): string;
    toByteArray(event: LogEvent): number[];
}