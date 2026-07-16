import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Pattern } from '../../../../../../java/util/regex/Pattern.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { AbstractStringLayout } from '../../../../../../org/apache/logging/log4j/core/layout/AbstractStringLayout.d.ts'
import type { LoggerFields } from '../../../../../../org/apache/logging/log4j/core/layout/LoggerFields.d.ts'
import type { Rfc5424Layout$FieldFormatter } from '../../../../../../org/apache/logging/log4j/core/layout/Rfc5424Layout$FieldFormatter.d.ts'
import type { Rfc5424Layout$Rfc5424LayoutBuilder } from '../../../../../../org/apache/logging/log4j/core/layout/Rfc5424Layout$Rfc5424LayoutBuilder.d.ts'
import type { Rfc5424Layout$StructuredDataElement } from '../../../../../../org/apache/logging/log4j/core/layout/Rfc5424Layout$StructuredDataElement.d.ts'
import type { ListChecker } from '../../../../../../org/apache/logging/log4j/core/layout/internal/ListChecker.d.ts'
import type { Facility } from '../../../../../../org/apache/logging/log4j/core/net/Facility.d.ts'
import type { PatternFormatter } from '../../../../../../org/apache/logging/log4j/core/pattern/PatternFormatter.d.ts'
import type { Message } from '../../../../../../org/apache/logging/log4j/message/Message.d.ts'
import type { StructuredDataId } from '../../../../../../org/apache/logging/log4j/message/StructuredDataId.d.ts'
import type { StructuredDataMessage } from '../../../../../../org/apache/logging/log4j/message/StructuredDataMessage.d.ts'
export class Rfc5424Layout extends AbstractStringLayout {
    static DEFAULT_ENTERPRISE_NUMBER: number;
    static DEFAULT_ID: string;
    static DEFAULT_MDCID: string;
    static ELEMENT_TYPE: string;
    static ENTERPRISE_ID_PATTERN: Pattern;
    static NEWLINE_PATTERN: Pattern;
    static PARAM_VALUE_ESCAPE_PATTERN: Pattern;
    static createLayout(paramfacility: Facility, paramid: string, paramenterpriseNumber: number, paramincludeMDC: boolean, parammdcId: string, parammdcPrefix: string, parameventPrefix: string, paramnewLine: boolean, paramescapeNL: string, paramappName: string, parammsgId: string, paramexcludes: string, paramincludes: string, paramrequired: string, paramexceptionPattern: string, paramuseTlsMessageFormat: boolean, paramloggerFields: LoggerFields[], paramconfig: Configuration): Rfc5424Layout;
    static newBuilder(): Rfc5424Layout$Rfc5424LayoutBuilder;
    constructor(arg0: Configuration, arg1: Facility, arg2: string, arg3: string, arg4: boolean, arg5: boolean, arg6: string, arg7: string, arg8: string, arg9: string, arg10: string, arg11: string, arg12: string, arg13: string, arg14: string, arg15: Charset, arg16: string, arg17: boolean, arg18: LoggerFields[], arg19: any)
    // private appName: string;
    // private configName: string;
    readonly defaultId: string;
    readonly enterpriseNumber: string;
    // private escapeNewLine: string;
    // private eventPrefix: string;
    // private exceptionFormatters: PatternFormatter[];
    readonly facility: Facility;
    // private fieldFormatters: { [key: string]: Rfc5424Layout$FieldFormatter };
    readonly includeMdc: boolean;
    // private includeNewLine: boolean;
    // private lastTimestamp: number;
    // private listChecker: ListChecker;
    // private localHostName: string;
    // private mdcExcludes: string[];
    readonly mdcId: string;
    // private mdcIncludes: string[];
    // private mdcPrefix: string;
    // private mdcRequired: string[];
    // private mdcSdId: StructuredDataId;
    // private messageId: string;
    // private procId: string;
    // private timestamppStr: string;
    // private useTlsMessageFormat: boolean;
    // private addStructuredData(sdElements: { [key: string]: Rfc5424Layout$StructuredDataElement }, data: StructuredDataMessage): void;
    // private appendAppName(buffer: StringBuilder): void;
    // private appendHostName(buffer: StringBuilder): void;
    // private appendMap(prefix: string, map: { [key: string]: string }, sb: StringBuilder, checker: ListChecker): void;
    // private appendMessage(buffer: StringBuilder, event: LogEvent): void;
    // private appendMessageId(buffer: StringBuilder, message: Message): void;
    // private appendPriority(buffer: StringBuilder, logLevel: Level): void;
    // private appendProcessId(buffer: StringBuilder): void;
    // private appendSpace(buffer: StringBuilder): void;
    // private appendStructuredElements(buffer: StringBuilder, event: LogEvent): void;
    // private appendTimestamp(buffer: StringBuilder, milliseconds: number): void;
    // private checkRequired(map: { [key: string]: string }): void;
    // private computeTimeStampString(now: number): string;
    // private createFieldFormatters(loggerFields: LoggerFields[], config: Configuration): { [key: string]: Rfc5424Layout$FieldFormatter };
    // private escapeNewlines(text: string, replacement: string): string;
    // private escapeParamValue(value: string): string;
    // private formatStructuredElement(id: string, data: Rfc5424Layout$StructuredDataElement, sb: StringBuilder, checker: ListChecker): void;
    getContentFormat(): { [key: string]: string };
    getDefaultId(): string;
    getEnterpriseNumber(): string;
    getEscapeNewLine(): string;
    getFacility(): Facility;
    // private getId(id: StructuredDataId): string;
    getLocalHostName(): string;
    getMdcExcludes(): string[];
    getMdcId(): string;
    getMdcIncludes(): string[];
    getMdcRequired(): string[];
    getProcId(): string;
    isIncludeMdc(): boolean;
    isIncludeNewLine(): boolean;
    isUseTlsMessageFormat(): boolean;
    // private pad(val: number, max: number, buf: StringBuilder): void;
    // private sanitizeParamName(key: string): string;
    // private sanitizeParamNameSlowPath(key: string): string;
    toSerializable(event: LogEvent): string;
    toString(): string;
}