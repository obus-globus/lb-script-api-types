import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractLookup } from '../../../../../../org/apache/logging/log4j/core/lookup/AbstractLookup.d.ts'
export class LowerLookup extends AbstractLookup {
    static CATEGORY: string;
    constructor()
    lookup(ignored: LogEvent, key: string): string;
}