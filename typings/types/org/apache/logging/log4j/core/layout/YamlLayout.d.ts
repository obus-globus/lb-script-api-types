import type { YamlLayout$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { AbstractJacksonLayout } from '../../../../../../org/apache/logging/log4j/core/layout/AbstractJacksonLayout.d.ts'
import type { KeyValuePair } from '../../../../../../org/apache/logging/log4j/core/util/KeyValuePair.d.ts'
export class YamlLayout extends AbstractJacksonLayout {
    static ELEMENT_TYPE: string;
    constructor(config: Configuration, locationInfo: boolean, properties: boolean, complete: boolean, compact: boolean, eventEol: boolean, headerPattern: string, footerPattern: string, charset: Charset, includeStacktrace: boolean)
    private constructor(config: Configuration, locationInfo: boolean, properties: boolean, complete: boolean, compact: boolean, eventEol: boolean, endOfLine: string, headerPattern: string, footerPattern: string, charset: Charset, includeStacktrace: boolean, stacktraceAsString: boolean, includeNullDelimiter: boolean, includeTimeMillis: boolean, additionalFields: KeyValuePair[])
    constructor(arg0: Configuration, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: string, arg7: string, arg8: string, arg9: Charset, arg10: boolean, arg11: boolean, arg12: boolean, arg13: boolean, arg14: KeyValuePair[], arg15: YamlLayout$1)
}