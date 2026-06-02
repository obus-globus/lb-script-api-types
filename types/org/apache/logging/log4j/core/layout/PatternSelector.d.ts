import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { PatternFormatter } from '../../../../../../org/apache/logging/log4j/core/pattern/PatternFormatter.d.ts'
export interface PatternSelector extends Object{
    getFormatters(event: LogEvent): PatternFormatter[];
}