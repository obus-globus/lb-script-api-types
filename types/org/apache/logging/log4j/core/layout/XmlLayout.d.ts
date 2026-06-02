import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { AbstractJacksonLayout } from '../../../../../../org/apache/logging/log4j/core/layout/AbstractJacksonLayout.d.ts'
import type { KeyValuePair } from '../../../../../../org/apache/logging/log4j/core/util/KeyValuePair.d.ts'
export class XmlLayout extends AbstractJacksonLayout {
    static ELEMENT_TYPE: string;
    constructor(locationInfo: boolean, properties: boolean, complete: boolean, compact: boolean, charset: Charset, includeStacktrace: boolean)
    private constructor(config: Configuration, locationInfo: boolean, properties: boolean, complete: boolean, compact: boolean, endOfLine: string, charset: Charset, includeStacktrace: boolean, stacktraceAsString: boolean, includeNullDelimiter: boolean, includeTimeMillis: boolean, additionalFields: KeyValuePair[])
}