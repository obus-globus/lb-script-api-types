import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { PropertyCacheNode$ReceiverCheckNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$ReceiverCheckNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PropertyCacheNode$InstanceofCheckNode extends PropertyCacheNode$ReceiverCheckNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(type: Class<Object>)
    // private type: Class<Object>;
    accept(thisObj: Object): boolean;
    getStore(thisObj: Object): JSDynamicObject;
}