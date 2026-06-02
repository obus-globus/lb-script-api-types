import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { CachedGetPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/CachedGetPropertyNode.d.ts'
import type { ReadElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ReadElementNode$JSObjectReadElementNonArrayTypeCacheNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    // private getPropertyCachedNode: CachedGetPropertyNode;
    execute(targetObject: JSDynamicObject, index: Object, receiver: Object, defaultValue: Object, root: ReadElementNode): Object;
}