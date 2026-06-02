import type { AbstractTruffleException } from '../../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { FunctionPrototypeBuiltins$CopyFunctionNameAndLengthNode } from '../../../../../com/oracle/truffle/js/builtins/FunctionPrototypeBuiltins$CopyFunctionNameAndLengthNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { IsObjectNode } from '../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { IsCallableNode } from '../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ShadowRealmPrototypeBuiltins$GetWrappedValueNode extends JavaScriptBaseNode {
    static create(): ShadowRealmPrototypeBuiltins$GetWrappedValueNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(context: JSContext, callerRealm: JSRealm, value: Object): Object;
    objectCallable(context: JSContext, callerRealm: JSRealm, value: Object, isCallable: IsCallableNode, copyNameAndLengthNode: FunctionPrototypeBuiltins$CopyFunctionNameAndLengthNode): Object;
    objectNotCallable(context: JSContext, callerRealm: JSRealm, value: Object, isObject: IsObjectNode, isCallable: IsCallableNode): Object;
    // private toTypeError(exception: AbstractTruffleException, callerRealm: JSRealm): AbstractTruffleException;
}