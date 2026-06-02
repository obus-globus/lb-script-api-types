import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { FunctionPrototypeBuiltins$CopyFunctionNameAndLengthNode } from '../../../../../com/oracle/truffle/js/builtins/FunctionPrototypeBuiltins$CopyFunctionNameAndLengthNode.d.ts'
import type { ShadowRealmPrototypeBuiltins$GetWrappedValueNode } from '../../../../../com/oracle/truffle/js/builtins/ShadowRealmPrototypeBuiltins$GetWrappedValueNode.d.ts'
import type { IsObjectNode } from '../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { IsCallableNode } from '../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShadowRealmPrototypeBuiltinsFactory$GetWrappedValueNodeGen extends ShadowRealmPrototypeBuiltins$GetWrappedValueNode {
    static create(): ShadowRealmPrototypeBuiltins$GetWrappedValueNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private isCallable: IsCallableNode;
    // private isObject: IsObjectNode;
    // private objectCallable_copyNameAndLengthNode_: FunctionPrototypeBuiltins$CopyFunctionNameAndLengthNode;
    // private state_0_: number;
    execute(arg0Value: JSContext, arg1Value: JSRealm, arg2Value: Object): Object;
    // private executeAndSpecialize(arg0Value: JSContext, arg1Value: JSRealm, arg2Value: Object): Object;
}