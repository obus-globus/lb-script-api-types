import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractLookup } from '../../../../../../org/apache/logging/log4j/core/lookup/AbstractLookup.d.ts'
export class JndiLookup extends AbstractLookup {
    static CATEGORY: string;
    constructor()
    // private convertJndiName(jndiName: string): string;
    lookup(ignored: LogEvent, key: string): string;
}