import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Node } from '../../../../../../../org/apache/logging/log4j/core/config/Node.d.ts'
export class Route extends Object {
    static createRoute(paramappenderRef: string, paramkey: string, paramnode: Node): Route;
    private constructor(node: Node, appenderRef: string, key: string)
    readonly appenderRef: string;
    readonly key: string;
    readonly node: Node;
    getAppenderRef(): string;
    getKey(): string;
    getNode(): Node;
    toString(): string;
}