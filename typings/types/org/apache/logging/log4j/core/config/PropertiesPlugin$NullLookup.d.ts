import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { LookupResult } from '../../../../../../org/apache/logging/log4j/core/lookup/LookupResult.d.ts'
import type { StrLookup } from '../../../../../../org/apache/logging/log4j/core/lookup/StrLookup.d.ts'
export class PropertiesPlugin$NullLookup extends Enum<PropertiesPlugin$NullLookup> implements StrLookup {
    static CATEGORY: string;
    static INSTANCE: PropertiesPlugin$NullLookup;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PropertiesPlugin$NullLookup;
    static values(): PropertiesPlugin$NullLookup[];
    private constructor()
    evaluate(key: string): LookupResult;
    evaluate(event: LogEvent, key: string): LookupResult;
    lookup(key: string): string;
    lookup(event: LogEvent, key: string): string;
    name(): "INSTANCE";
}