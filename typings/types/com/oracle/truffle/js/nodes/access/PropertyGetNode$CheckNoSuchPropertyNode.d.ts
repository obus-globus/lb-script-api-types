import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSHasPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSHasPropertyNode.d.ts'
import type { PropertyCacheNode$ReceiverCheckNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$ReceiverCheckNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { PropertyGetNode$LinkedPropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode$LinkedPropertyGetNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PropertyGetNode$CheckNoSuchPropertyNode extends PropertyGetNode$LinkedPropertyGetNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(key: Object, receiverCheck: PropertyCacheNode$ReceiverCheckNode, context: JSContext)
    // private callNoSuchNode: JSFunctionCallNode;
    // private context: JSContext;
    // private getNoSuchMethodNode: PropertyGetNode;
    // private getNoSuchPropertyNode: PropertyGetNode;
    // private hasPropertyNode: JSHasPropertyNode;
    // private callNoSuchHandler(thisObj: JSDynamicObject, function_: JSDynamicObject, root: PropertyGetNode, noSuchProperty: boolean): Object;
    getCallNoSuch(): JSFunctionCallNode;
    // private getFallback(defaultValue: Object, root: PropertyGetNode): Object;
    getHasProperty(): JSHasPropertyNode;
    getNoSuchMethod(): PropertyGetNode;
    getNoSuchProperty(): PropertyGetNode;
    getValue(thisObj: Object, receiver: Object, defaultValue: Object, root: PropertyGetNode, guard: boolean): Object;
}