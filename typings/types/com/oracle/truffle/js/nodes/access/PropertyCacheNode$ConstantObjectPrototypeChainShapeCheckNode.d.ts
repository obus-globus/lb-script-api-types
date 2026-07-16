import type { Assumption } from '../../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { NodeVisitor } from '../../../../../../com/oracle/truffle/api/nodes/NodeVisitor.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { TruffleWeakReference } from '../../../../../../com/oracle/truffle/api/utilities/TruffleWeakReference.d.ts'
import type { PropertyCacheNode$AbstractSingleRealmShapeCheckNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$AbstractSingleRealmShapeCheckNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PropertyCacheNode$ConstantObjectPrototypeChainShapeCheckNode extends PropertyCacheNode$AbstractSingleRealmShapeCheckNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(shape: Shape, assumptions: Assumption[], prototype: JSDynamicObject, context: JSContext)
    // private prototype: TruffleWeakReference<JSDynamicObject>;
    accept(nodeVisitor: NodeVisitor): void;
    accept(thisObj: Object): boolean;
    getDepth(): number;
    getStore(thisObj: Object): JSDynamicObject;
    isUnstable(): boolean;
}