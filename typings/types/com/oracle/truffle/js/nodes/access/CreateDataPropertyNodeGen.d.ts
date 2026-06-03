import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { CreateDataPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/CreateDataPropertyNode.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CreateDataPropertyNodeGen extends CreateDataPropertyNode {
    static create(paramcontext: JSContext, paramkey: Object): CreateDataPropertyNode;
    static create(paramcontext: JSContext, paramkey: Object, paramenumerable: boolean): CreateDataPropertyNode;
    static createNonEnumerable(paramcontext: JSContext, paramkey: Object): CreateDataPropertyNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext, key: Object, enumerable: boolean)
    // private cached_propertyCache_: PropertySetNode;
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: Object): void;
    executeVoid(arg0Value: Object, arg1Value: Object): void;
    executeVoid(object: Object, propertyKey: Object, value: Object): void;
}