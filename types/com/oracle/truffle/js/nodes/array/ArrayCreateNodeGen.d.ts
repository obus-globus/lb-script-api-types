import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ArrayCreateNode } from '../../../../../../com/oracle/truffle/js/nodes/array/ArrayCreateNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
export class ArrayCreateNodeGen extends ArrayCreateNode {
    static create(paramcontext: JSContext): ArrayCreateNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    // private state_0_: number;
    execute(arg0Value: number, arg1Value: JSRealm, arg2Value: JSDynamicObject): JSArrayObject;
    // private executeAndSpecialize(arg0Value: number, arg1Value: JSRealm, arg2Value: JSDynamicObject): JSArrayObject;
}