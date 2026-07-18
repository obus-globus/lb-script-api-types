import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { CreateDataPropertyNode } from '../../../../../com/oracle/truffle/js/nodes/access/CreateDataPropertyNode.d.ts'
import type { HasPropertyCacheNode } from '../../../../../com/oracle/truffle/js/nodes/access/HasPropertyCacheNode.d.ts'
import type { IsObjectNode } from '../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { PropertySetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class IteratorPrototypeBuiltins$SetterThatIgnoresPrototypePropertiesNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext, parampropertyKey: Object): IteratorPrototypeBuiltins$SetterThatIgnoresPrototypePropertiesNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext, propertyKey: Object)
    // private context: JSContext;
    // private propertyKey: Object;
    executeWithHomeAndValue(thisObj: Object, home: Object, value: Object): void;
    setValue(thisObj: Object, home: Object, value: Object, isObjectNode: IsObjectNode, hasOwnConstructorPropertyNode: HasPropertyCacheNode, createConstructorPropertyNode: CreateDataPropertyNode, setConstructorNode: PropertySetNode, errorProfile: InlinedBranchProfile, hasOwnPropertyProfile: InlinedConditionProfile): void;
}