import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HasPropertyCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/HasPropertyCacheNode.d.ts'
import type { HasPropertyCacheNode$LinkedHasPropertyCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/HasPropertyCacheNode$LinkedHasPropertyCacheNode.d.ts'
import type { JSGetOwnPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSGetOwnPropertyNode.d.ts'
import type { JSProxyHasPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSProxyHasPropertyNode.d.ts'
import type { PropertyCacheNode$ReceiverCheckNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$ReceiverCheckNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class HasPropertyCacheNode$JSProxyDispatcherPropertyHasNode extends HasPropertyCacheNode$LinkedHasPropertyCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext, key: Object, receiverCheck: PropertyCacheNode$ReceiverCheckNode, hasOwnProperty: boolean)
    // private getOwnPropertyNode: JSGetOwnPropertyNode;
    // private hasOwnProperty: boolean;
    // private proxyGet: JSProxyHasPropertyNode;
    hasProperty(thisObj: Object, root: HasPropertyCacheNode): boolean;
}