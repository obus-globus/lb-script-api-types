import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { HasPropertyCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/HasPropertyCacheNode.d.ts'
import type { HasPropertyCacheNode$LinkedHasPropertyCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/HasPropertyCacheNode$LinkedHasPropertyCacheNode.d.ts'
import type { PropertyCacheNode$ReceiverCheckNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$ReceiverCheckNode.d.ts'
import type { ReadImportBindingNode } from '../../../../../../com/oracle/truffle/js/nodes/module/ReadImportBindingNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class HasPropertyCacheNode$ModuleNamespaceHasOwnPropertyNode extends HasPropertyCacheNode$LinkedHasPropertyCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(receiverCheck: PropertyCacheNode$ReceiverCheckNode, property: Property)
    // private property: Property;
    // private readBindingNode: ReadImportBindingNode;
    hasProperty(thisObj: Object, root: HasPropertyCacheNode): boolean;
}