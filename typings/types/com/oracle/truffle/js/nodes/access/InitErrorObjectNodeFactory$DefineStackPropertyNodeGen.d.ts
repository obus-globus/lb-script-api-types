import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject$GetPropertyFlagsNode } from '../../../../../../com/oracle/truffle/api/object/DynamicObject$GetPropertyFlagsNode.d.ts'
import type { DynamicObject$PutConstantNode } from '../../../../../../com/oracle/truffle/api/object/DynamicObject$PutConstantNode.d.ts'
import type { InitErrorObjectNode$DefineStackPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/InitErrorObjectNode$DefineStackPropertyNode.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
export class InitErrorObjectNodeFactory$DefineStackPropertyNodeGen extends InitErrorObjectNode$DefineStackPropertyNode {
    static create(): InitErrorObjectNode$DefineStackPropertyNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private getStackPropertyFlags_: DynamicObject$GetPropertyFlagsNode;
    // private putStackProperty_: DynamicObject$PutConstantNode;
    // private state_0_: number;
    execute(arg0Value: JSObject): void;
    // private executeAndSpecialize(arg0Value: JSObject): void;
}