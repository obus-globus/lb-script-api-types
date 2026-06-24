import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Route } from '../../../../../../../org/apache/logging/log4j/core/appender/routing/Route.d.ts'
import type { Routes } from '../../../../../../../org/apache/logging/log4j/core/appender/routing/Routes.d.ts'
import type { Configuration } from '../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { AbstractScript } from '../../../../../../../org/apache/logging/log4j/core/script/AbstractScript.d.ts'
import type { Builder } from '../../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class Routes$Builder extends Object implements Builder<Routes> {
    constructor()
    readonly configuration: Configuration;
    readonly pattern: string;
    readonly patternScript: AbstractScript;
    readonly routes: Route[];
    build(): Routes;
    getConfiguration(): Configuration;
    getErrorPrefix(): string;
    getPattern(): string;
    getPatternScript(): AbstractScript;
    getRoutes(): Route[];
    isValid(): boolean;
    setConfiguration(configuration: Configuration): Routes$Builder;
    setPattern(pattern: string): Routes$Builder;
    setPatternScript(patternScript: AbstractScript): Routes$Builder;
    setRoutes(routes: Route[]): Routes$Builder;
    withConfiguration(configuration: Configuration): Routes$Builder;
    withPattern(pattern: string): Routes$Builder;
    withPatternScript(patternScript: AbstractScript): Routes$Builder;
    withRoutes(routes: Route[]): Routes$Builder;
}