import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleStringBuilder$AppendCodePointNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendCodePointNode.d.ts'
import type { TruffleStringBuilder$AppendStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendStringNode.d.ts'
import type { TruffleStringBuilder$ToStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$ToStringNode.d.ts'
import type { GlobalBuiltins$JSGlobalPrintNode } from '../../../../../com/oracle/truffle/js/builtins/GlobalBuiltins$JSGlobalPrintNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { StringBuilderProfile } from '../../../../../com/oracle/truffle/js/runtime/util/StringBuilderProfile.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class GlobalBuiltinsFactory$JSGlobalPrintNodeGen extends GlobalBuiltins$JSGlobalPrintNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramuseErr: boolean, paramnoNewline: boolean, paramarguments: JavaScriptNode[]): GlobalBuiltins$JSGlobalPrintNode;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, builtin: JSBuiltin, useErr: boolean, noNewline: boolean, arguments: JavaScriptNode[])
    // private appendCodePointNode_: TruffleStringBuilder$AppendCodePointNode;
    // private appendStringNode_: TruffleStringBuilder$AppendStringNode;
    // private arguments0_: JavaScriptNode;
    // private builderProfile_: StringBuilderProfile;
    // private state_0_: number;
    // private toStringNode_: TruffleStringBuilder$ToStringNode;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(arguments0Value: Object): Object;
    executeObjectArray(arguments0Value: Object[]): Object;
    getArguments(): JavaScriptNode[];
}