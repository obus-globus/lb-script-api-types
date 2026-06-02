import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractLookup } from '../../../../../../org/apache/logging/log4j/core/lookup/AbstractLookup.d.ts'
export class StructuredDataLookup extends AbstractLookup {
    static CATEGORY: string;
    static ID_KEY: string;
    static TYPE_KEY: string;
    constructor()
    lookup(event: LogEvent, key: string): string;
}