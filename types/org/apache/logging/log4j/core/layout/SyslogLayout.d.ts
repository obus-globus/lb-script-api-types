import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { SimpleDateFormat } from '../../../../../../java/text/SimpleDateFormat.d.ts'
import type { Pattern } from '../../../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractStringLayout } from '../../../../../../org/apache/logging/log4j/core/layout/AbstractStringLayout.d.ts'
import type { Facility } from '../../../../../../org/apache/logging/log4j/core/net/Facility.d.ts'
export class SyslogLayout extends AbstractStringLayout {
    static ELEMENT_TYPE: string;
    static NEWLINE_PATTERN: Pattern;
    static createLayout(paramfacility: Facility, paramincludeNewLine: boolean, paramescapeNL: string, paramcharset: Charset): SyslogLayout;
    static newBuilder(): Object | null;
    constructor(facility: Facility, includeNL: boolean, escapeNL: string, charset: Charset)
    // private dateFormat: SimpleDateFormat;
    // private escapeNewLine: string;
    readonly facility: Facility;
    // private includeNewLine: boolean;
    // private localHostname: string;
    // private addDate(timestamp: number, buf: StringBuilder): void;
    getContentFormat(): { [key: string]: string };
    getFacility(): Facility;
    toSerializable(event: LogEvent): string;
}