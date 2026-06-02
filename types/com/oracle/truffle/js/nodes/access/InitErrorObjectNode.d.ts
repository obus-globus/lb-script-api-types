import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObjectLibrary } from '../../../../../../com/oracle/truffle/api/object/DynamicObjectLibrary.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { InitErrorObjectNode$DefineStackPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/InitErrorObjectNode$DefineStackPropertyNode.d.ts'
import type { InstallErrorCauseNode } from '../../../../../../com/oracle/truffle/js/nodes/access/InstallErrorCauseNode.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { CreateMethodPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/function/CreateMethodPropertyNode.d.ts'
import type { GraalJSException } from '../../../../../../com/oracle/truffle/js/runtime/GraalJSException.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InitErrorObjectNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): InitErrorObjectNode;
    static create(paramcontext: JSContext, paramdefaultColumnNumber: boolean): InitErrorObjectNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext, defaultColumnNumber: boolean)
    // private context: JSContext;
    // private defaultColumnNumber: boolean;
    // private defineStackProperty: InitErrorObjectNode$DefineStackPropertyNode;
    // private installErrorCauseNode: InstallErrorCauseNode;
    // private setColumnNumber: CreateMethodPropertyNode;
    // private setErrors: DynamicObjectLibrary;
    // private setException: PropertySetNode;
    // private setFormattedStack: PropertySetNode;
    // private setLineNumber: CreateMethodPropertyNode;
    // private setMessage: DynamicObjectLibrary;
    execute(errorObj: JSObject, exception: GraalJSException, messageOpt: TruffleString): JSObject;
    execute(errorObj: JSObject, exception: GraalJSException, messageOpt: TruffleString, errorsOpt: JSObject): JSObject;
    execute(errorObj: JSObject, exception: GraalJSException, messageOpt: TruffleString, errorsOpt: JSObject, options: Object): JSObject;
    // private installErrorCause(errorObj: JSObject, options: Object): void;
    // private setErrorsNode(): DynamicObjectLibrary;
    // private setException(errorObj: JSObject, exception: GraalJSException): void;
}