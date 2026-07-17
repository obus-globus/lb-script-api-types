import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject$GetPropertyFlagsNode } from '../../../../../../com/oracle/truffle/api/object/DynamicObject$GetPropertyFlagsNode.d.ts'
import type { DynamicObject$PutConstantNode } from '../../../../../../com/oracle/truffle/api/object/DynamicObject$PutConstantNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
export abstract class InitErrorObjectNode$DefineStackPropertyNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doCached(errorObj: JSObject, getStackPropertyFlags: DynamicObject$GetPropertyFlagsNode, putStackProperty: DynamicObject$PutConstantNode): void;
    execute(errorObj: JSObject): void;
}