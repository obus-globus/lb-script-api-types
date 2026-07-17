import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Rfc5424Layout } from '../../../../../../org/apache/logging/log4j/core/layout/Rfc5424Layout.d.ts'
import type { Rfc5424Layout$StructuredDataElement } from '../../../../../../org/apache/logging/log4j/core/layout/Rfc5424Layout$StructuredDataElement.d.ts'
import type { PatternFormatter } from '../../../../../../org/apache/logging/log4j/core/pattern/PatternFormatter.d.ts'
export class Rfc5424Layout$FieldFormatter extends Object {
    constructor(null_: Rfc5424Layout, fieldMap: JavaMap<string, PatternFormatter[]>, discardIfEmpty: boolean)
    // private delegateMap: JavaMap<string, PatternFormatter[]>;
    // private discardIfEmpty: boolean;
    format(event: LogEvent): Rfc5424Layout$StructuredDataElement;
}