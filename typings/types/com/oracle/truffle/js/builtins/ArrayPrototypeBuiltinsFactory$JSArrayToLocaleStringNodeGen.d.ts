import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleStringBuilder$AppendCharUTF16Node } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendCharUTF16Node.d.ts'
import type { TruffleStringBuilder$AppendStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendStringNode.d.ts'
import type { TruffleStringBuilder$ToStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$ToStringNode.d.ts'
import type { ArrayPrototypeBuiltins$JSArrayToLocaleStringNode } from '../../../../../com/oracle/truffle/js/builtins/ArrayPrototypeBuiltins$JSArrayToLocaleStringNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSToStringNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ArrayPrototypeBuiltinsFactory$JSArrayToLocaleStringNodeGen extends ArrayPrototypeBuiltins$JSArrayToLocaleStringNode {
    static ARGUMENTS: string;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramisTypedArrayImplementation: boolean, paramarguments: JavaScriptNode[]): ArrayPrototypeBuiltins$JSArrayToLocaleStringNode;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, builtin: JSBuiltin, isTypedArrayImplementation: boolean, arguments: JavaScriptNode[])
    // private appendCharNode_: TruffleStringBuilder$AppendCharUTF16Node;
    // private appendStringNode_: TruffleStringBuilder$AppendStringNode;
    // private arguments0_: JavaScriptNode;
    // private builderToStringNode_: TruffleStringBuilder$ToStringNode;
    // private state_0_: number;
    // private toStringNode_: JSToStringNode;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(frameValue: VirtualFrame, arguments0Value: Object): TruffleString;
    getArguments(): JavaScriptNode[];
}