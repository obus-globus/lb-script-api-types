import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { CreateDataPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/CreateDataPropertyNode.d.ts'
import type { HasPropertyCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/HasPropertyCacheNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { SetterThatIgnoresPrototypePropertiesNode } from '../../../../../../com/oracle/truffle/js/nodes/access/SetterThatIgnoresPrototypePropertiesNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SetterThatIgnoresPrototypePropertiesNodeGen extends SetterThatIgnoresPrototypePropertiesNode {
    static create(parampropertyKey: Object): SetterThatIgnoresPrototypePropertiesNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(propertyKey: Object)
    // private createPropertyNode_: CreateDataPropertyNode;
    // private hasOwnPropertyNode_: HasPropertyCacheNode;
    // private isObjectNode_: IsObjectNode;
    // private setPropertyNode_: PropertySetNode;
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: Object, arg2Value: Object): void;
    executeWithHomeAndValue(arg0Value: Object, arg1Value: Object, arg2Value: Object): void;
}