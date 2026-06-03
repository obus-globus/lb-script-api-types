import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { LookupResult } from '../../../../../../org/apache/logging/log4j/core/lookup/LookupResult.d.ts'
import type { StrLookup } from '../../../../../../org/apache/logging/log4j/core/lookup/StrLookup.d.ts'
export abstract class AbstractLookup extends Object implements StrLookup {
    static CATEGORY: string;
    constructor()
    evaluate(key: string): LookupResult;
    evaluate(event: LogEvent, key: string): LookupResult;
    evaluate(key: string): LookupResult;
    evaluate(event: LogEvent, key: string): LookupResult;
    lookup(key: string): string;
}