import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractLookup } from '../../../../../../org/apache/logging/log4j/core/lookup/AbstractLookup.d.ts'
export class ResourceBundleLookup extends AbstractLookup {
    static CATEGORY: string;
    constructor()
    lookup(key: string): string;
    lookup(ignored: LogEvent, key: string): string;
}