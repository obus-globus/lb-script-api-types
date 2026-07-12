import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { LookupResult } from '../../../../../../org/apache/logging/log4j/core/lookup/LookupResult.d.ts'
import type { StrLookup } from '../../../../../../org/apache/logging/log4j/core/lookup/StrLookup.d.ts'
export class MapLookup extends Object implements StrLookup {
    static CATEGORY: string;
    static setMainArguments(...paramargs: (Object | null)[]): void;
    constructor()
    constructor(map: { [key: string]: string })
    // private map: { [key: string]: string };
    evaluate(key: string): LookupResult;
    evaluate(event: LogEvent, key: string): LookupResult;
    getMap(): { [key: string]: string };
    lookup(key: string): string;
    lookup(event: LogEvent, key: string): string;
}