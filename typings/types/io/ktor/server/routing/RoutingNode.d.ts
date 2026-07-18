import type { ApplicationCallPipeline } from '../../../../io/ktor/server/application/ApplicationCallPipeline.d.ts'
import type { ApplicationCallPipeline$ApplicationPhase } from '../../../../io/ktor/server/application/ApplicationCallPipeline$ApplicationPhase.d.ts'
import type { ApplicationEnvironment } from '../../../../io/ktor/server/application/ApplicationEnvironment.d.ts'
import type { Plugin } from '../../../../io/ktor/server/application/Plugin.d.ts'
import type { Route } from '../../../../io/ktor/server/routing/Route.d.ts'
import type { RouteSelector } from '../../../../io/ktor/server/routing/RouteSelector.d.ts'
import type { RoutingContext } from '../../../../io/ktor/server/routing/RoutingContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RoutingNode extends ApplicationCallPipeline implements Route {
    static ApplicationPhase: ApplicationCallPipeline$ApplicationPhase;
    constructor(parent: RoutingNode | null, selector: RouteSelector, developmentMode: boolean, environment: ApplicationEnvironment)
    // private cachedPipeline: ApplicationCallPipeline | null;
    // private childList: RoutingNode[];
    readonly children: RoutingNode[];
    // private handlers: (param0: RoutingContext) => void[];
    /*not mapped: */ getHandlers$ktor_server_core(): (param0: RoutingContext) => void[];
    readonly parent: RoutingNode | null;
    readonly selector: RouteSelector;
    afterIntercepted(): void;
    buildPipeline(): ApplicationCallPipeline;
    createChild(selector: RouteSelector): RoutingNode;
    handle(body: (param0: RoutingContext) => void): void;
    hasHandler(): boolean;
    install<F extends unknown, B extends unknown>(plugin: Plugin<ApplicationCallPipeline, B, F>, configure: (param0: B) => void): F;
    // private invalidateCachesRecursively(): void;
    invoke(body: (param0: RoutingNode) => void): void;
    plugin<F extends unknown>(plugin: Plugin<any, Object, F>): F;
    toString(): string;
}