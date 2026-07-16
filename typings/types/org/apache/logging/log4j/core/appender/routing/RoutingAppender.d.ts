import type { Future } from '../../../../../../../java/util/concurrent/Future.d.ts'
import type { TimeUnit } from '../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Appender } from '../../../../../../../org/apache/logging/log4j/core/Appender.d.ts'
import type { Filter } from '../../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { LogEvent } from '../../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractAppender } from '../../../../../../../org/apache/logging/log4j/core/appender/AbstractAppender.d.ts'
import type { RewritePolicy } from '../../../../../../../org/apache/logging/log4j/core/appender/rewrite/RewritePolicy.d.ts'
import type { PurgePolicy } from '../../../../../../../org/apache/logging/log4j/core/appender/routing/PurgePolicy.d.ts'
import type { Route } from '../../../../../../../org/apache/logging/log4j/core/appender/routing/Route.d.ts'
import type { Routes } from '../../../../../../../org/apache/logging/log4j/core/appender/routing/Routes.d.ts'
import type { RoutingAppender$CreatedRouteAppenderControl } from '../../../../../../../org/apache/logging/log4j/core/appender/routing/RoutingAppender$CreatedRouteAppenderControl.d.ts'
import type { RoutingAppender$RouteAppenderControl } from '../../../../../../../org/apache/logging/log4j/core/appender/routing/RoutingAppender$RouteAppenderControl.d.ts'
import type { AppenderControl } from '../../../../../../../org/apache/logging/log4j/core/config/AppenderControl.d.ts'
import type { Configuration } from '../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { Property } from '../../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
import type { AbstractScript } from '../../../../../../../org/apache/logging/log4j/core/script/AbstractScript.d.ts'
export class RoutingAppender extends AbstractAppender {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static ELEMENT_TYPE: string;
    static EMPTY_ARRAY: Appender[];
    static STATIC_VARIABLES_KEY: string;
    static createAppender(paramname: string, paramignore: string, paramroutes: Routes, paramconfig: Configuration, paramrewritePolicy: RewritePolicy, parampurgePolicy: PurgePolicy, paramfilter: Filter): RoutingAppender;
    static newBuilder(): Object | null;
    static parseInt(params: string, paramdefaultValue: number): number;
    constructor(arg0: string, arg1: Filter, arg2: boolean, arg3: Routes, arg4: RewritePolicy, arg5: Configuration, arg6: PurgePolicy, arg7: AbstractScript, arg8: Property[], arg9: any)
    readonly configuration: Configuration;
    // private createdAppenders: { [key: string]: RoutingAppender$CreatedRouteAppenderControl };
    // private createdAppendersUnmodifiableView: { [key: string]: AppenderControl };
    readonly defaultRoute: Route;
    readonly defaultRouteScript: AbstractScript;
    readonly purgePolicy: PurgePolicy;
    // private referencedAppenders: { [key: string]: RoutingAppender$RouteAppenderControl };
    readonly rewritePolicy: RewritePolicy;
    readonly routes: Routes;
    readonly scriptStaticVariables: Map<Object, Object>;
    append(event: LogEvent): void;
    // private createAppender(route: Route, event: LogEvent): Appender;
    deleteAppender(key: string): void;
    // private getAppender(key: string): RoutingAppender$RouteAppenderControl;
    getAppenders(): { [key: string]: AppenderControl };
    getConfiguration(): Configuration;
    // private getControl(key: string, event: LogEvent): RoutingAppender$RouteAppenderControl;
    getDefaultRoute(): Route;
    getDefaultRouteScript(): AbstractScript;
    getPurgePolicy(): PurgePolicy;
    getRewritePolicy(): RewritePolicy;
    getRoutes(): Routes;
    getScriptStaticVariables(): Map<Object, Object>;
    start(): void;
    stop(): void;
    stop(future: Future<Object>): boolean;
    stop(timeout: number, timeUnit: TimeUnit): boolean;
    stop(timeout: number, timeUnit: TimeUnit, changeLifeCycleState: boolean): boolean;
    // private updatePurgePolicy(key: string, event: LogEvent): void;
}