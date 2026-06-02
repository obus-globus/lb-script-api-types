import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$ByteIndexOfCodePointNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ByteIndexOfCodePointNode.d.ts'
import type { TruffleString$ByteLengthOfCodePointNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ByteLengthOfCodePointNode.d.ts'
import type { TruffleString$CodePointAtByteIndexNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CodePointAtByteIndexNode.d.ts'
import type { TruffleString$ReadCharUTF16Node } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ReadCharUTF16Node.d.ts'
import type { TruffleStringBuilder$AppendCodePointNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendCodePointNode.d.ts'
import type { TruffleStringBuilder$AppendJavaStringUTF16Node } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendJavaStringUTF16Node.d.ts'
import type { TruffleStringBuilder$ToStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$ToStringNode.d.ts'
import type { RegExpFunctionBuiltins$JSRegExpEscapeNode } from '../../../../../com/oracle/truffle/js/builtins/RegExpFunctionBuiltins$JSRegExpEscapeNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { StringBuilderProfile } from '../../../../../com/oracle/truffle/js/runtime/util/StringBuilderProfile.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RegExpFunctionBuiltinsFactory$JSRegExpEscapeNodeGen extends RegExpFunctionBuiltins$JSRegExpEscapeNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramarguments: (Object | null)[]): RegExpFunctionBuiltins$JSRegExpEscapeNode;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, builtin: JSBuiltin, arguments: JavaScriptNode[])
    // private arguments0_: JavaScriptNode;
    // private escapeString_appendCodePointNode_: TruffleStringBuilder$AppendCodePointNode;
    // private escapeString_appendJavaStringNode_: TruffleStringBuilder$AppendJavaStringUTF16Node;
    // private escapeString_builderProfile_: StringBuilderProfile;
    // private escapeString_codePointAtNode_: TruffleString$CodePointAtByteIndexNode;
    // private escapeString_indexOfCodePointNode_: TruffleString$ByteIndexOfCodePointNode;
    // private escapeString_lengthOfCodePointNode_: TruffleString$ByteLengthOfCodePointNode;
    // private escapeString_readCharNode_: TruffleString$ReadCharUTF16Node;
    // private escapeString_toStringNode_: TruffleStringBuilder$ToStringNode;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(arguments0Value: Object): TruffleString;
    // private fallbackGuard_(state_0: number, arguments0Value: Object): boolean;
    getArguments(): JavaScriptNode[];
}