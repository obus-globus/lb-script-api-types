import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Property } from '../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
import type { LookupResult } from '../../../../../../org/apache/logging/log4j/core/lookup/LookupResult.d.ts'
import type { PropertiesLookup$ConfigurationPropertyResult } from '../../../../../../org/apache/logging/log4j/core/lookup/PropertiesLookup$ConfigurationPropertyResult.d.ts'
import type { StrLookup } from '../../../../../../org/apache/logging/log4j/core/lookup/StrLookup.d.ts'
export class PropertiesLookup extends Object implements StrLookup {
    static CATEGORY: string;
    constructor(configProperties: Property[], contextProperties: { [key: string]: string })
    constructor(properties: { [key: string]: string })
    // private configurationProperties: { [key: string]: PropertiesLookup$ConfigurationPropertyResult };
    // private contextProperties: { [key: string]: string };
    evaluate(key: string): LookupResult;
    evaluate(event: LogEvent, key: string): LookupResult;
    lookup(key: string): string;
    lookup(event: LogEvent, key: string): string;
    toString(): string;
}