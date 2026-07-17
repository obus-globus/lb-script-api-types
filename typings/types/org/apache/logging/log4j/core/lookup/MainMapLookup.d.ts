import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { MapLookup } from '../../../../../../org/apache/logging/log4j/core/lookup/MapLookup.d.ts'
export class MainMapLookup extends MapLookup {
    static CATEGORY: string;
    static setMainArguments(...paramargs: string[]): void;
    constructor()
    constructor(map: JavaMap<string, string>)
    lookup(key: string): string;
    lookup(ignored: LogEvent, key: string): string;
}