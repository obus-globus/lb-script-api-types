import type { ApplicationCallPipeline } from '../../../../io/ktor/server/application/ApplicationCallPipeline.d.ts'
import type { ApplicationEnvironment } from '../../../../io/ktor/server/application/ApplicationEnvironment.d.ts'
import type { Plugin } from '../../../../io/ktor/server/application/Plugin.d.ts'
import type { RouteSelector } from '../../../../io/ktor/server/routing/RouteSelector.d.ts'
import type { RoutingContext } from '../../../../io/ktor/server/routing/RoutingContext.d.ts'
import type { Attributes } from '../../../../io/ktor/util/Attributes.d.ts'
import type { TreeLike } from '../../../../io/ktor/util/collections/TreeLike.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Sequence } from '../../../../kotlin/sequences/Sequence.d.ts'
export interface Route extends TreeLike<Route>, Object {
    readonly attributes: Attributes;
    readonly children: Route[];
    readonly environment: ApplicationEnvironment;
    readonly selector: RouteSelector | null;
    createChild(selector: RouteSelector): Route;
    descendants(): Sequence<Route>;
    handle(body: (param0: RoutingContext) => void): void;
    install<F extends unknown, B extends unknown>(plugin: Plugin<ApplicationCallPipeline, B, F>, configure: (param0: B) => void): F;
    isLeaf(): boolean;
    isRoot(): boolean;
    lineage(): Sequence<Route>;
    plugin<F extends unknown>(plugin: Plugin<any, Object, F>): F;
}