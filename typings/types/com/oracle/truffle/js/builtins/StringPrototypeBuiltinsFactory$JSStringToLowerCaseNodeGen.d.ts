import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$ByteIndexOfCodePointSetNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ByteIndexOfCodePointSetNode.d.ts'
import type { TruffleString$CodeRangeEqualsNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CodeRangeEqualsNode.d.ts'
import type { TruffleString$CopyToByteArrayNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CopyToByteArrayNode.d.ts'
import type { TruffleString$FromByteArrayNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$FromByteArrayNode.d.ts'
import type { TruffleString$FromJavaStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$FromJavaStringNode.d.ts'
import type { TruffleString$SwitchEncodingNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$SwitchEncodingNode.d.ts'
import type { TruffleString$ToJavaStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ToJavaStringNode.d.ts'
import type { StringPrototypeBuiltins$JSStringToLowerCaseNode } from '../../../../../com/oracle/truffle/js/builtins/StringPrototypeBuiltins$JSStringToLowerCaseNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class StringPrototypeBuiltinsFactory$JSStringToLowerCaseNodeGen extends StringPrototypeBuiltins$JSStringToLowerCaseNode {
    static ARGUMENTS: string;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramlocale: boolean, paramarguments: JavaScriptNode[]): StringPrototypeBuiltins$JSStringToLowerCaseNode;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, builtin: JSBuiltin, locale: boolean, arguments: JavaScriptNode[])
    // private arguments0_: JavaScriptNode;
    // private fromJavaString: TruffleString$FromJavaStringNode;
    // private state_0_: number;
    // private toJavaString: TruffleString$ToJavaStringNode;
    // private toLowerCaseString_codeRangeEquals_: TruffleString$CodeRangeEqualsNode;
    // private toLowerCaseString_copyToByteArrayNode_: TruffleString$CopyToByteArrayNode;
    // private toLowerCaseString_fromByteArrayNode_: TruffleString$FromByteArrayNode;
    // private toLowerCaseString_indexOfCodePointSet_: TruffleString$ByteIndexOfCodePointSetNode;
    // private toLowerCaseString_switchEncodingNode_: TruffleString$SwitchEncodingNode;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(arguments0Value: Object): Object;
    getArguments(): JavaScriptNode[];
}