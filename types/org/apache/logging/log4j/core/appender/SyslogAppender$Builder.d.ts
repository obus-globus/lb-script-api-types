import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { SocketAppender } from '../../../../../../org/apache/logging/log4j/core/appender/SocketAppender.d.ts'
import type { SocketAppender$AbstractBuilder } from '../../../../../../org/apache/logging/log4j/core/appender/SocketAppender$AbstractBuilder.d.ts'
import type { SyslogAppender } from '../../../../../../org/apache/logging/log4j/core/appender/SyslogAppender.d.ts'
import type { LoggerFields } from '../../../../../../org/apache/logging/log4j/core/layout/LoggerFields.d.ts'
import type { Facility } from '../../../../../../org/apache/logging/log4j/core/net/Facility.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class SyslogAppender$Builder<B extends SyslogAppender$Builder<B>> extends SocketAppender$AbstractBuilder<B> implements Builder<SocketAppender> {
    constructor()
    readonly appName: string;
    readonly charsetName: Charset;
    readonly enterpriseNumber: string;
    readonly escapeNL: string;
    readonly eventPrefix: string;
    readonly exceptionPattern: string;
    readonly excludes: string;
    readonly facility: Facility;
    readonly format: string;
    readonly id: string;
    readonly includeMdc: boolean;
    readonly includes: string;
    readonly loggerFields: LoggerFields[];
    readonly mdcId: string;
    readonly mdcPrefix: string;
    readonly msgId: string;
    readonly newLine: boolean;
    readonly required: string;
    build(): SyslogAppender;
    getAppName(): string;
    getCharsetName(): Charset;
    getEnterpriseNumber(): string;
    getErrorPrefix(): string;
    getEscapeNL(): string;
    getEventPrefix(): string;
    getExceptionPattern(): string;
    getExcludes(): string;
    getFacility(): Facility;
    getFormat(): string;
    getId(): string;
    getIncludes(): string;
    getLoggerFields(): LoggerFields[];
    getMdcId(): string;
    getMdcPrefix(): string;
    getMsgId(): string;
    getRequired(): string;
    isIncludeMdc(): boolean;
    isNewLine(): boolean;
    isValid(): boolean;
    setAppName(appName: string): B;
    setCharsetName(charset: Charset): B;
    setEnterpriseNumber(enterpriseNumber: number): B;
    setEnterpriseNumber(enterpriseNumber: string): B;
    setEscapeNL(escapeNL: string): B;
    setEventPrefix(eventPrefix: string): B;
    setExceptionPattern(exceptionPattern: string): B;
    setExcludes(excludes: string): B;
    setFacility(facility: Facility): B;
    setFormat(format: string): B;
    setId(id: string): B;
    setIncludeMdc(includeMdc: boolean): B;
    setIncludes(includes: string): B;
    setLoggerFields(loggerFields: LoggerFields[]): B;
    setMdcId(mdcId: string): B;
    setMdcPrefix(mdcPrefix: string): B;
    setMsgId(msgId: string): B;
    setNewLine(newLine: boolean): B;
    setRequired(required: string): B;
}