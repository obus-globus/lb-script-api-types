import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { AbstractJacksonLayout } from '../../../../../../org/apache/logging/log4j/core/layout/AbstractJacksonLayout.d.ts'
export class XmlLayout extends AbstractJacksonLayout {
    static ELEMENT_TYPE: string;
    constructor(locationInfo: boolean, properties: boolean, complete: boolean, compact: boolean, charset: Charset, includeStacktrace: boolean)
}