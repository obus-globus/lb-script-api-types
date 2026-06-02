import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { ReadElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ReadElementNode$GuardedReadElementTypeCacheNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    executeWithTargetAndIndexUnchecked(target: Object, index: Object, receiver: Object, defaultValue: Object, root: ReadElementNode): Object;
    executeWithTargetAndIndexUnchecked(target: Object, index: number, receiver: Object, defaultValue: Object, root: ReadElementNode): Object;
    guard(target: Object): boolean;
}