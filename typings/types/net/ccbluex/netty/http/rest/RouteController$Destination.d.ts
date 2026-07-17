import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Node } from '../../../../../net/ccbluex/netty/http/rest/Node.d.ts'
export class RouteController$Destination extends Object {
    constructor(destination: Node, params: JavaMap<string, string>, remainingPath: string)
    readonly destination: Node;
    readonly params: JavaMap<string, string>;
    readonly remainingPath: string;
    component1(): Node;
    component2(): JavaMap<string, string>;
    component3(): string;
    copy(destination: Node, params: JavaMap<string, string>, remainingPath: string): RouteController$Destination;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}