import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$FromJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$FromJavaStringNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { InitErrorObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/InitErrorObjectNode.d.ts'
import type { JSException } from '../../../../../../com/oracle/truffle/js/runtime/JSException.d.ts'
import type { JSErrorObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSErrorObject.d.ts'
import type { StackOverflowError } from '../../../../../../java/lang/StackOverflowError.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export abstract class TryCatchNode$GetErrorObjectNode extends JavaScriptBaseNode {
    static create(): TryCatchNode$GetErrorObjectNode;
    static getUncached(): TryCatchNode$GetErrorObjectNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    // private createErrorFromJSException(exception: JSException, defaultColumnNumber: boolean, initErrorObjectNode: InitErrorObjectNode, fromJavaStringNode: TruffleString$FromJavaStringNode): JSErrorObject;
    doJSException(ex: JSException, defaultColumnNumber: boolean, initErrorObjectNode: InitErrorObjectNode, fromJavaStringNode: TruffleString$FromJavaStringNode): Object;
    doStackOverflowError(ex: StackOverflowError, defaultColumnNumber: boolean, initErrorObjectNode: InitErrorObjectNode, fromJavaStringNode: TruffleString$FromJavaStringNode): Object;
    execute(ex: Throwable): Object;
    execute(ex: Throwable, defaultColumnNumber: boolean): Object;
    // private getOrCreateErrorFromJSException(exception: JSException, defaultColumnNumber: boolean, initErrorObjectNode: InitErrorObjectNode, fromJavaStringNode: TruffleString$FromJavaStringNode): Object;
}