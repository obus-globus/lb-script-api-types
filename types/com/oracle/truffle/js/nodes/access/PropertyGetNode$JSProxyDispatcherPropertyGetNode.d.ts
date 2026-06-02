import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSProxyPropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSProxyPropertyGetNode.d.ts'
import type { PropertyCacheNode$ReceiverCheckNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$ReceiverCheckNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { PropertyGetNode$LinkedPropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode$LinkedPropertyGetNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PropertyGetNode$JSProxyDispatcherPropertyGetNode extends PropertyGetNode$LinkedPropertyGetNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext, key: Object, receiverCheck: PropertyCacheNode$ReceiverCheckNode, isMethod: boolean)
    // private proxyGet: JSProxyPropertyGetNode;
    getValue(thisObj: Object, receiver: Object, defaultValue: Object, root: PropertyGetNode, guard: boolean): Object;
}