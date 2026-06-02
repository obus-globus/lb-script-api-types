import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { LookupResult } from '../../../../../../org/apache/logging/log4j/core/lookup/LookupResult.d.ts'
export interface StrLookup extends Object{
    evaluate(key: string): LookupResult;
    evaluate(event: LogEvent, key: string): LookupResult;
    lookup(key: string): string;
    lookup(event: LogEvent, key: string): string;
}