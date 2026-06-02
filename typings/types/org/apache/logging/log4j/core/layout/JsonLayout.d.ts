import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { AbstractJacksonLayout } from '../../../../../../org/apache/logging/log4j/core/layout/AbstractJacksonLayout.d.ts'
import type { KeyValuePair } from '../../../../../../org/apache/logging/log4j/core/util/KeyValuePair.d.ts'
export class JsonLayout extends AbstractJacksonLayout {
    static ELEMENT_TYPE: string;
    constructor(config: Configuration, locationInfo: boolean, properties: boolean, encodeThreadContextAsList: boolean, complete: boolean, compact: boolean, eventEol: boolean, endOfLine: string, headerPattern: string, footerPattern: string, charset: Charset, includeStacktrace: boolean)
    private constructor(config: Configuration, locationInfo: boolean, properties: boolean, encodeThreadContextAsList: boolean, complete: boolean, compact: boolean, eventEol: boolean, endOfLine: string, headerPattern: string, footerPattern: string, charset: Charset, includeStacktrace: boolean, stacktraceAsString: boolean, includeNullDelimiter: boolean, includeTimeMillis: boolean, additionalFields: KeyValuePair[], objectMessageAsJsonObject: boolean)
}