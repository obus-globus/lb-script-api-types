import type { HtmlLayout$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractStringLayout } from '../../../../../../org/apache/logging/log4j/core/layout/AbstractStringLayout.d.ts'
import type { HtmlLayout$Builder } from '../../../../../../org/apache/logging/log4j/core/layout/HtmlLayout$Builder.d.ts'
import type { DatePatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/DatePatternConverter.d.ts'
export class HtmlLayout extends AbstractStringLayout {
    static DEFAULT_FONT_FAMILY: string;
    static ELEMENT_TYPE: string;
    static createDefaultLayout(): HtmlLayout;
    static createLayout(paramlocationInfo: boolean, paramtitle: string, paramcontentType: string, paramcharset: Charset, paramfontSize: string, paramfont: string): HtmlLayout;
    static newBuilder(): HtmlLayout$Builder;
    private constructor(locationInfo: boolean, title: string, contentType: string, charset: Charset, font: string, fontSize: string, headerSize: string, datePattern: string, timezone: string)
    constructor(arg0: boolean, arg1: string, arg2: string, arg3: Charset, arg4: string, arg5: string, arg6: string, arg7: string, arg8: string, arg9: HtmlLayout$1)
    readonly contentType: string;
    // private datePatternConverter: DatePatternConverter;
    // private font: string;
    // private fontSize: string;
    // private headerSize: string;
    // private jvmStartTime: number;
    readonly locationInfo: boolean;
    readonly title: string;
    // private addCharsetToContentType(contentType: string): string;
    // private append(sbuilder: StringBuilder, s: string): StringBuilder;
    // private appendLs(sbuilder: StringBuilder, s: string): StringBuilder;
    // private appendThrowableAsHtml(throwable: Throwable, sbuf: StringBuilder): void;
    getContentType(): string;
    getFooter(): number[];
    getHeader(): number[];
    getTitle(): string;
    isLocationInfo(): boolean;
    requiresLocation(): boolean;
    toSerializable(event: LogEvent): string;
}