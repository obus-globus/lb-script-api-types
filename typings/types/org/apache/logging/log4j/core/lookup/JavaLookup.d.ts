import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractLookup } from '../../../../../../org/apache/logging/log4j/core/lookup/AbstractLookup.d.ts'
import type { SystemPropertiesLookup } from '../../../../../../org/apache/logging/log4j/core/lookup/SystemPropertiesLookup.d.ts'
export class JavaLookup extends AbstractLookup {
    static CATEGORY: string;
    constructor()
    // private spLookup: SystemPropertiesLookup;
    getHardware(): string;
    getLocale(): string;
    getOperatingSystem(): string;
    getRuntime(): string;
    // private getSystemProperty(name: string): string;
    // private getSystemProperty(prefix: string, name: string): string;
    getVirtualMachine(): string;
    lookup(ignored: LogEvent, key: string): string;
}