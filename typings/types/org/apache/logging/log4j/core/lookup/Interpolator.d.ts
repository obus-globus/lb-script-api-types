import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { WeakReference } from '../../../../../../java/lang/ref/WeakReference.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { LoggerContext } from '../../../../../../org/apache/logging/log4j/core/LoggerContext.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { LoggerContextAware } from '../../../../../../org/apache/logging/log4j/core/config/LoggerContextAware.d.ts'
import type { AbstractConfigurationAwareLookup } from '../../../../../../org/apache/logging/log4j/core/lookup/AbstractConfigurationAwareLookup.d.ts'
import type { LookupResult } from '../../../../../../org/apache/logging/log4j/core/lookup/LookupResult.d.ts'
import type { StrLookup } from '../../../../../../org/apache/logging/log4j/core/lookup/StrLookup.d.ts'
export class Interpolator extends AbstractConfigurationAwareLookup implements LoggerContextAware {
    static CATEGORY: string;
    static PREFIX_SEPARATOR: string;
    constructor()
    constructor(properties: JavaMap<string, string>)
    constructor(defaultLookup: StrLookup)
    constructor(defaultLookup: StrLookup, pluginPackages: string[])
    readonly defaultLookup: StrLookup;
    loggerContext: WeakReference<LoggerContext>;
    readonly strLookupMap: JavaMap<string, StrLookup>;
    evaluate(key: string): LookupResult;
    evaluate(event: LogEvent, var_: string): LookupResult;
    getDefaultLookup(): StrLookup;
    getStrLookupMap(): JavaMap<string, StrLookup>;
    // private handleError(lookupKey: string, t: Throwable): void;
    lookup(key: string): string;
    lookup(event: LogEvent, var_: string): string;
    setConfiguration(configuration: Configuration): void;
    setLoggerContext(loggerContext: LoggerContext): void;
    toString(): string;
}