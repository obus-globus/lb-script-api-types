import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$FromCharArrayUTF16Node } from '../../../../../com/oracle/truffle/api/strings/TruffleString$FromCharArrayUTF16Node.d.ts'
import type { TruffleString$FromCodePointNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$FromCodePointNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSToUInt16Node } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToUInt16Node.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class StringFunctionBuiltins$JSFromCharCodeNode extends JSBuiltinNode {
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
    fromCharCode(args: Object[]): Object;
    fromCharCodeOneArg(args: Object[], toUint16: JSToUInt16Node, fromCodePointNode: TruffleString$FromCodePointNode): Object;
    fromCharCodeTwoOrMore(args: Object[], toUint16: JSToUInt16Node, fromCharArrayNode: TruffleString$FromCharArrayUTF16Node): Object;
}