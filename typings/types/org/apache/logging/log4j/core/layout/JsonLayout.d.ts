import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { AbstractJacksonLayout } from '../../../../../../org/apache/logging/log4j/core/layout/AbstractJacksonLayout.d.ts'
import type { KeyValuePair } from '../../../../../../org/apache/logging/log4j/core/util/KeyValuePair.d.ts'
export class JsonLayout extends AbstractJacksonLayout {
    static ELEMENT_TYPE: string;
    constructor(config: Configuration, locationInfo: boolean, properties: boolean, encodeThreadContextAsList: boolean, complete: boolean, compact: boolean, eventEol: boolean, endOfLine: string, headerPattern: string, footerPattern: string, charset: Charset, includeStacktrace: boolean)
    constructor(arg0: Configuration, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean, arg7: string, arg8: string, arg9: string, arg10: Charset, arg11: boolean, arg12: boolean, arg13: boolean, arg14: boolean, arg15: KeyValuePair[], arg16: boolean, arg17: any)
}