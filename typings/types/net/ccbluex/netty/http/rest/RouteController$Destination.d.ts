import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Node } from '../../../../../net/ccbluex/netty/http/rest/Node.d.ts'
export class RouteController$Destination extends Object {
    constructor(destination: Node, params: { [key: string]: string }, remainingPath: string)
    readonly destination: Node;
    readonly params: { [key: string]: string };
    readonly remainingPath: string;
    component1(): Node;
    component2(): { [key: string]: string };
    component3(): string;
    copy(destination: Node, params: { [key: string]: string }, remainingPath: string): RouteController$Destination;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}