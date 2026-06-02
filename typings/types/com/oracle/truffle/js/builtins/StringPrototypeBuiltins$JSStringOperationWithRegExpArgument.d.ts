import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { StringPrototypeBuiltins$JSStringOperation } from '../../../../../com/oracle/truffle/js/builtins/StringPrototypeBuiltins$JSStringOperation.d.ts'
import type { JSRegExpExecIntlNode } from '../../../../../com/oracle/truffle/js/builtins/helper/JSRegExpExecIntlNode.d.ts'
import type { JSRegExpExecIntlNode$JSRegExpExecIntlIgnoreLastIndexNode } from '../../../../../com/oracle/truffle/js/builtins/helper/JSRegExpExecIntlNode$JSRegExpExecIntlIgnoreLastIndexNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { GetMethodNode } from '../../../../../com/oracle/truffle/js/nodes/access/GetMethodNode.d.ts'
import type { PropertyGetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Symbol } from '../../../../../com/oracle/truffle/js/runtime/Symbol.d.ts'
import type { JSRegExpObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSRegExpObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class StringPrototypeBuiltins$JSStringOperationWithRegExpArgument extends StringPrototypeBuiltins$JSStringOperation {
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
    // private callNode: JSFunctionCallNode;
    // private getMethodNode: GetMethodNode;
    // private getSymbolNode: PropertyGetNode;
    // private regExpIgnoreLastIndexNode: JSRegExpExecIntlNode$JSRegExpExecIntlIgnoreLastIndexNode;
    // private regExpNode: JSRegExpExecIntlNode;
    call(function_: Object, target: Object, args: Object[]): Object;
    getMethod(target: Object, key: Object): Object;
    getRegExpIgnoreLastIndexNode(): JSRegExpExecIntlNode$JSRegExpExecIntlIgnoreLastIndexNode;
    getRegExpNode(): JSRegExpExecIntlNode;
    invoke(regExp: JSRegExpObject, symbol: Symbol, thisStr: TruffleString): Object;
    matchIgnoreLastIndex(regExp: JSRegExpObject, input: TruffleString, fromIndex: number): Object;
}