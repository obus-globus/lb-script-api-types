import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { InitErrorObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/InitErrorObjectNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSException } from '../../../../../../com/oracle/truffle/js/runtime/JSException.d.ts'
import type { JSErrorObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSErrorObject.d.ts'
import type { StackOverflowError } from '../../../../../../java/lang/StackOverflowError.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export abstract class TryCatchNode$GetErrorObjectNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): TryCatchNode$GetErrorObjectNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private context: JSContext;
    // private initErrorObjectNode: InitErrorObjectNode;
    // private createErrorFromJSException(exception: JSException): JSErrorObject;
    doJSException(ex: JSException): Object;
    doStackOverflowError(ex: StackOverflowError): Object;
    execute(ex: Throwable): Object;
    // private getOrCreateErrorFromJSException(exception: JSException): Object;
}