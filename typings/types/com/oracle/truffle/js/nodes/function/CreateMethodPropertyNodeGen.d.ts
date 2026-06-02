import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { CreateMethodPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/function/CreateMethodPropertyNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CreateMethodPropertyNodeGen extends CreateMethodPropertyNode {
    static create(paramcontext: JSContext, paramkey: Object): CreateMethodPropertyNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext, key: Object)
    // private cached_propertyCache_: PropertySetNode;
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: Object): void;
    executeVoid(arg0Value: Object, arg1Value: Object): void;
}