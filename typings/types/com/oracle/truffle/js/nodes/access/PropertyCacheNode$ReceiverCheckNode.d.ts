import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { NodeVisitor } from '../../../../../../com/oracle/truffle/api/nodes/NodeVisitor.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class PropertyCacheNode$ReceiverCheckNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(shape: Shape)
    readonly shape: Shape;
    accept(nodeVisitor: NodeVisitor): void;
    accept(thisObj: Object): boolean;
    getShape(): Shape;
    getStore(thisObj: Object): JSDynamicObject;
    isUnstable(): boolean;
    isValid(): boolean;
}