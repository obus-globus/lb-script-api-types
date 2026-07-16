import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ArrayPrototypeBuiltins$FlattenIntoArrayNode } from '../../../../../com/oracle/truffle/js/builtins/ArrayPrototypeBuiltins$FlattenIntoArrayNode.d.ts'
import type { JSToObjectNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToObjectNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ArrayPrototypeBuiltinsFactory$FlattenIntoArrayNodeGen extends ArrayPrototypeBuiltins$FlattenIntoArrayNode {
    static create(paramcontext: JSContext, paramwithMapCallback: boolean): ArrayPrototypeBuiltins$FlattenIntoArrayNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext, withMapCallback: boolean)
    // private state_0_: number;
    // private toObjectNode_: JSToObjectNode;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: Object, arg2Value: number, arg3Value: number, arg4Value: number, arg5Value: Object, arg6Value: Object): number;
    executeLong(arg0Value: Object, arg1Value: Object, arg2Value: number, arg3Value: number, arg4Value: number, arg5Value: Object, arg6Value: Object): number;
}