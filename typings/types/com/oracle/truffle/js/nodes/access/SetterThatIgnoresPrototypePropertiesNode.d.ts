import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { CreateDataPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/CreateDataPropertyNode.d.ts'
import type { HasPropertyCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/HasPropertyCacheNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class SetterThatIgnoresPrototypePropertiesNode extends JavaScriptBaseNode {
    static create(parampropertyKey: Object): SetterThatIgnoresPrototypePropertiesNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(propertyKey: Object)
    // private propertyKey: Object;
    executeWithHomeAndValue(thisObj: Object, home: Object, value: Object): void;
    setValue(thisObj: Object, home: Object, value: Object, isObjectNode: IsObjectNode, hasOwnPropertyNode: HasPropertyCacheNode, createPropertyNode: CreateDataPropertyNode, setPropertyNode: PropertySetNode, errorProfile: InlinedBranchProfile, hasOwnPropertyProfile: InlinedConditionProfile): void;
}