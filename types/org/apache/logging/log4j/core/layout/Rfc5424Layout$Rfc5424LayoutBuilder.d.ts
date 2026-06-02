import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { AbstractStringLayout$Builder } from '../../../../../../org/apache/logging/log4j/core/layout/AbstractStringLayout$Builder.d.ts'
import type { LoggerFields } from '../../../../../../org/apache/logging/log4j/core/layout/LoggerFields.d.ts'
import type { Rfc5424Layout } from '../../../../../../org/apache/logging/log4j/core/layout/Rfc5424Layout.d.ts'
import type { Facility } from '../../../../../../org/apache/logging/log4j/core/net/Facility.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class Rfc5424Layout$Rfc5424LayoutBuilder extends AbstractStringLayout$Builder<Rfc5424Layout$Rfc5424LayoutBuilder> implements Builder<Rfc5424Layout> {
    constructor()
    // private appName: string;
    // private ein: string;
    // private enterpriseNumber: number;
    // private escapeNL: string;
    // private eventPrefix: string;
    // private exceptionPattern: string;
    // private excludes: string;
    // private facility: Facility;
    // private id: string;
    // private includeMDC: boolean;
    // private includeNL: boolean;
    // private includes: string;
    // private loggerFields: LoggerFields[];
    // private mdcId: string;
    // private mdcPrefix: string;
    // private messageId: string;
    // private required: string;
    // private useTLSMessageFormat: boolean;
    build(): Rfc5424Layout;
    getErrorPrefix(): string;
    isValid(): boolean;
    setAppName(appName: string): Rfc5424Layout$Rfc5424LayoutBuilder;
    setCharset(charset: Charset): Rfc5424Layout$Rfc5424LayoutBuilder;
    setConfig(config: Configuration): Rfc5424Layout$Rfc5424LayoutBuilder;
    setEin(ein: string): Rfc5424Layout$Rfc5424LayoutBuilder;
    setEnterpriseNumber(enterpriseNumber: number): Rfc5424Layout$Rfc5424LayoutBuilder;
    setEscapeNL(escapeNL: string): Rfc5424Layout$Rfc5424LayoutBuilder;
    setEventPrefix(eventPrefix: string): Rfc5424Layout$Rfc5424LayoutBuilder;
    setExceptionPattern(exceptionPattern: string): Rfc5424Layout$Rfc5424LayoutBuilder;
    setExcludes(excludes: string): Rfc5424Layout$Rfc5424LayoutBuilder;
    setFacility(facility: Facility): Rfc5424Layout$Rfc5424LayoutBuilder;
    setId(id: string): Rfc5424Layout$Rfc5424LayoutBuilder;
    setIncludeMDC(includeMDC: boolean): Rfc5424Layout$Rfc5424LayoutBuilder;
    setIncludeNL(includeNL: boolean): Rfc5424Layout$Rfc5424LayoutBuilder;
    setIncludes(includes: string): Rfc5424Layout$Rfc5424LayoutBuilder;
    setLoggerFields(loggerFields: LoggerFields[]): Rfc5424Layout$Rfc5424LayoutBuilder;
    setMdcId(mdcId: string): Rfc5424Layout$Rfc5424LayoutBuilder;
    setMdcPrefix(mdcPrefix: string): Rfc5424Layout$Rfc5424LayoutBuilder;
    setMessageId(messageId: string): Rfc5424Layout$Rfc5424LayoutBuilder;
    setRequired(required: string): Rfc5424Layout$Rfc5424LayoutBuilder;
    setUseTLSMessageFormat(useTLSMessageFormat: boolean): Rfc5424Layout$Rfc5424LayoutBuilder;
}