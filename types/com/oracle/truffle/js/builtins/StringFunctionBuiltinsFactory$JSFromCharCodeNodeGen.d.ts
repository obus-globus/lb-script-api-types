import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$FromCharArrayUTF16Node } from '../../../../../com/oracle/truffle/api/strings/TruffleString$FromCharArrayUTF16Node.d.ts'
import type { TruffleString$FromCodePointNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$FromCodePointNode.d.ts'
import type { StringFunctionBuiltins$JSFromCharCodeNode } from '../../../../../com/oracle/truffle/js/builtins/StringFunctionBuiltins$JSFromCharCodeNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSToUInt16Node } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToUInt16Node.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class StringFunctionBuiltinsFactory$JSFromCharCodeNodeGen extends StringFunctionBuiltins$JSFromCharCodeNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramarguments: (Object | null)[]): StringFunctionBuiltins$JSFromCharCodeNode;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, builtin: JSBuiltin, arguments: JavaScriptNode[])
    // private arguments0_: JavaScriptNode;
    // private fromCharCodeOneArg_fromCodePointNode_: TruffleString$FromCodePointNode;
    // private fromCharCodeTwoOrMore_fromCharArrayNode_: TruffleString$FromCharArrayUTF16Node;
    // private state_0_: number;
    // private toUint16: JSToUInt16Node;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(arguments0Value: Object): Object;
    getArguments(): JavaScriptNode[];
}