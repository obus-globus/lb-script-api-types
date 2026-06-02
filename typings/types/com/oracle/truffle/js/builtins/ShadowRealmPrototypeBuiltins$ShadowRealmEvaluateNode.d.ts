import type { AbstractTruffleException } from '../../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { IndirectCallNode } from '../../../../../com/oracle/truffle/api/nodes/IndirectCallNode.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { ShadowRealmPrototypeBuiltins$GetWrappedValueNode } from '../../../../../com/oracle/truffle/js/builtins/ShadowRealmPrototypeBuiltins$GetWrappedValueNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ScriptNode } from '../../../../../com/oracle/truffle/js/nodes/ScriptNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSException } from '../../../../../com/oracle/truffle/js/runtime/JSException.d.ts'
import type { JSShadowRealmObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSShadowRealmObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ShadowRealmPrototypeBuiltins$ShadowRealmEvaluateNode extends JSBuiltinNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin)
    evaluate(thisObj: JSShadowRealmObject, sourceText: TruffleString, callNode: IndirectCallNode, getWrappedValue: ShadowRealmPrototypeBuiltins$GetWrappedValueNode): Object;
    invalidReceiver(thisObj: Object, sourceText: Object): Object;
    invalidSourceText(thisObj: JSShadowRealmObject, sourceText: Object): Object;
    // private parseScript(sourceCode: string): ScriptNode;
    // private wrapErrorFromShadowRealm(ex: AbstractTruffleException): JSException;
}