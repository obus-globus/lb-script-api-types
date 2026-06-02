import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$SubstringByteIndexNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$SubstringByteIndexNode.d.ts'
import type { StringPrototypeBuiltins$JSStringSubstringNode } from '../../../../../com/oracle/truffle/js/builtins/StringPrototypeBuiltins$JSStringSubstringNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSToNumberNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToNumberNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class StringPrototypeBuiltinsFactory$JSStringSubstringNodeGen extends StringPrototypeBuiltins$JSStringSubstringNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramarguments: (Object | null)[]): StringPrototypeBuiltins$JSStringSubstringNode;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, builtin: JSBuiltin, arguments: JavaScriptNode[])
    // private arguments0_: JavaScriptNode;
    // private arguments1_: JavaScriptNode;
    // private arguments2_: JavaScriptNode;
    // private state_0_: number;
    // private substringGeneric_toNumber2Node_: JSToNumberNode;
    // private substringGeneric_toNumberNode_: JSToNumberNode;
    // private substringNode: TruffleString$SubstringByteIndexNode;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(arguments0Value: Object, arguments1Value: Object, arguments2Value: Object): TruffleString;
    // private execute_generic2(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_int1(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_int_int0(state_0__: number, frameValue: VirtualFrame): Object;
    getArguments(): JavaScriptNode[];
}