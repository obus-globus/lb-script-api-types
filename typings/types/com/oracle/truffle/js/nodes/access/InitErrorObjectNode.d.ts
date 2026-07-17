import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject$PutNode } from '../../../../../../com/oracle/truffle/api/object/DynamicObject$PutNode.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { InitErrorObjectNode$DefineStackPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/InitErrorObjectNode$DefineStackPropertyNode.d.ts'
import type { InstallErrorCauseNode } from '../../../../../../com/oracle/truffle/js/nodes/access/InstallErrorCauseNode.d.ts'
import type { CreateMethodPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/function/CreateMethodPropertyNode.d.ts'
import type { GraalJSException } from '../../../../../../com/oracle/truffle/js/runtime/GraalJSException.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InitErrorObjectNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): InitErrorObjectNode;
    static getUncached(paramcontext: JSContext): InitErrorObjectNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    // private context: JSContext;
    // private defineStackProperty: InitErrorObjectNode$DefineStackPropertyNode;
    // private installErrorCauseNode: InstallErrorCauseNode;
    // private setColumnNumber: CreateMethodPropertyNode;
    // private setErrors: DynamicObject$PutNode;
    // private setException: DynamicObject$PutNode;
    // private setFormattedStack: DynamicObject$PutNode;
    // private setLineNumber: CreateMethodPropertyNode;
    // private setMessage: DynamicObject$PutNode;
    execute(errorObj: JSObject, exception: GraalJSException, messageOpt: TruffleString, errorsOpt: JSObject): JSObject;
    execute(errorObj: JSObject, exception: GraalJSException, messageOpt: TruffleString, errorsOpt: JSObject, options: Object): JSObject;
    execute(errorObj: JSObject, exception: GraalJSException, messageOpt: TruffleString, errorsOpt: JSObject, options: Object, defaultColumnNumber: boolean): JSObject;
    // private execute(errorObj: JSObject, exception: GraalJSException, messageOpt: TruffleString, errorsOpt: JSObject, options: Object, defaultColumnNumber: boolean, defineOwnStackProperty: boolean): JSObject;
    execute(errorObj: JSObject, exception: GraalJSException, messageOpt: TruffleString, defaultColumnNumber: boolean): JSObject;
    executeForCaptureStackTrace(errorObj: JSObject, exception: GraalJSException, messageOpt: TruffleString): JSObject;
    // private installErrorCause(errorObj: JSObject, options: Object): void;
    // private setErrorsNode(): DynamicObject$PutNode;
    // private setException(errorObj: JSObject, exception: GraalJSException): void;
}