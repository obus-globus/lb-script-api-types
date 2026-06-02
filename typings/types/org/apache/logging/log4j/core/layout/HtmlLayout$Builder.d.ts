import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { HtmlLayout } from '../../../../../../org/apache/logging/log4j/core/layout/HtmlLayout.d.ts'
import type { HtmlLayout$FontSize } from '../../../../../../org/apache/logging/log4j/core/layout/HtmlLayout$FontSize.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class HtmlLayout$Builder extends Object implements Builder<HtmlLayout> {
    private constructor()
    // private charset: Charset;
    // private contentType: string;
    // private datePattern: string;
    // private fontName: string;
    // private fontSize: HtmlLayout$FontSize;
    // private locationInfo: boolean;
    // private timezone: string;
    // private title: string;
    build(): HtmlLayout;
    getErrorPrefix(): string;
    isValid(): boolean;
    setDatePattern(datePattern: string): HtmlLayout$Builder;
    setTimezone(timezone: string): HtmlLayout$Builder;
    withCharset(charset: Charset): HtmlLayout$Builder;
    withContentType(contentType: string): HtmlLayout$Builder;
    withFontName(fontName: string): HtmlLayout$Builder;
    withFontSize(fontSize: HtmlLayout$FontSize): HtmlLayout$Builder;
    withLocationInfo(locationInfo: boolean): HtmlLayout$Builder;
    withTitle(title: string): HtmlLayout$Builder;
}