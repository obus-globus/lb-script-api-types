import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject$PutNode } from '../../../../../../com/oracle/truffle/api/object/DynamicObject$PutNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { TryCatchNode$GetErrorObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/control/TryCatchNode$GetErrorObjectNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSErrorObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSErrorObject.d.ts'
import type { DisposeCapability$DisposableResource } from '../../../../../../com/oracle/truffle/js/runtime/util/DisposeCapability$DisposableResource.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export abstract class AbstractDisposeResourcesNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    // private callNode: JSFunctionCallNode;
    // private getErrorObjectNode: TryCatchNode$GetErrorObjectNode;
    // private setErrorNode: DynamicObject$PutNode;
    // private setSuppressedNode: DynamicObject$PutNode;
    callDisposeMethod(resource: DisposeCapability$DisposableResource): Object;
    captureDisposeError(throwable: Throwable): Object;
    combineDisposeErrors(newError: Object, currentError: Object): Object;
    createSuppressedErrorObject(error: Object, suppressed: Object): JSErrorObject;
    // private getSetErrorNode(): DynamicObject$PutNode;
    // private getSetSuppressedNode(): DynamicObject$PutNode;
    throwError(errorObject: Object): void;
    toErrorObject(throwable: Throwable): Object;
}