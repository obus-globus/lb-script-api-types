import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$SubstringByteIndexNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$SubstringByteIndexNode.d.ts'
import type { RegExpBuiltins$GetStaticRegExpResultNode } from '../../../../../com/oracle/truffle/js/builtins/RegExpBuiltins$GetStaticRegExpResultNode.d.ts'
import type { RegExpBuiltins$JSRegExpStaticResultPropertyNode } from '../../../../../com/oracle/truffle/js/builtins/RegExpBuiltins$JSRegExpStaticResultPropertyNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { TRegexUtil$InteropReadBooleanMemberNode } from '../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InteropReadBooleanMemberNode.d.ts'
import type { TRegexUtil$InteropReadIntMemberNode } from '../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InteropReadIntMemberNode.d.ts'
import type { TRegexUtil$InvokeGetGroupBoundariesMethodNode } from '../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InvokeGetGroupBoundariesMethodNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class RegExpBuiltins$JSRegExpStaticResultLastParenNode extends RegExpBuiltins$JSRegExpStaticResultPropertyNode {
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
    lastParen(frame: VirtualFrame, substringNode: TruffleString$SubstringByteIndexNode, readIsMatch: TRegexUtil$InteropReadBooleanMemberNode, readGroupCount: TRegexUtil$InteropReadIntMemberNode, getStart: TRegexUtil$InvokeGetGroupBoundariesMethodNode, getEnd: TRegexUtil$InvokeGetGroupBoundariesMethodNode, getResultNode: RegExpBuiltins$GetStaticRegExpResultNode): TruffleString;
}