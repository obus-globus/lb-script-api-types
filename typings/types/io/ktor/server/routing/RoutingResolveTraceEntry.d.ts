import type { RoutingNode } from '../../../../io/ktor/server/routing/RoutingNode.d.ts'
import type { RoutingResolveResult } from '../../../../io/ktor/server/routing/RoutingResolveResult.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RoutingResolveTraceEntry extends Object {
    constructor(route: RoutingNode, segmentIndex: number, result: RoutingResolveResult | null)
    // private children: RoutingResolveTraceEntry[] | null;
    result: RoutingResolveResult | null;
    readonly route: RoutingNode;
    readonly segmentIndex: number;
    append(item: RoutingResolveTraceEntry): void;
    buildText(builder: StringBuilder, indent: number): void;
    toString(): string;
}