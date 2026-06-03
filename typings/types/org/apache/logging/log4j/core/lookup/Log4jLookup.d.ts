import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractConfigurationAwareLookup } from '../../../../../../org/apache/logging/log4j/core/lookup/AbstractConfigurationAwareLookup.d.ts'
export class Log4jLookup extends AbstractConfigurationAwareLookup {
    static CATEGORY: string;
    static KEY_CONFIG_LOCATION: string;
    static KEY_CONFIG_PARENT_LOCATION: string;
    constructor()
    lookup(key: string): string;
    lookup(ignored: LogEvent, key: string): string;
}