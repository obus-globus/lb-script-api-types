import type { RouteSelector } from '../../../../io/ktor/server/routing/RouteSelector.d.ts'
import type { RoutingNode } from '../../../../io/ktor/server/routing/RoutingNode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RoutingResolveTraceKt extends Object {
    static isPathElement(self: RouteSelector): boolean;
    static render(self: RoutingNode): string;
}