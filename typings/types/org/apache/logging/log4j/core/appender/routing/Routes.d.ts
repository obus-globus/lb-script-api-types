import type { Routes$1 } from '../../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Route } from '../../../../../../../org/apache/logging/log4j/core/appender/routing/Route.d.ts'
import type { Routes$Builder } from '../../../../../../../org/apache/logging/log4j/core/appender/routing/Routes$Builder.d.ts'
import type { Configuration } from '../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { AbstractScript } from '../../../../../../../org/apache/logging/log4j/core/script/AbstractScript.d.ts'
export class Routes extends Object {
    static createRoutes(parampattern: string, paramroutes: (Object | null)[]): Routes;
    static newBuilder(): Routes$Builder;
    private constructor(configuration: Configuration, patternScript: AbstractScript, pattern: string, routes: Route[])
    constructor(arg0: Configuration, arg1: AbstractScript, arg2: string, arg3: Route[], arg4: Routes$1)
    // private configuration: Configuration;
    // private pattern: string;
    readonly patternScript: AbstractScript;
    readonly routes: Route[];
    getPattern(event: LogEvent, scriptStaticVariables: Map<Object, Object>): string;
    getPatternScript(): AbstractScript;
    getRoute(key: string): Route;
    getRoutes(): Route[];
    toString(): string;
}