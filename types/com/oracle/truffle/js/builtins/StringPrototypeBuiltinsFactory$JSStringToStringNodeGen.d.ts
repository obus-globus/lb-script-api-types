import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$SwitchEncodingNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$SwitchEncodingNode.d.ts'
import type { StringPrototypeBuiltins$JSStringToStringNode } from '../../../../../com/oracle/truffle/js/builtins/StringPrototypeBuiltins$JSStringToStringNode.d.ts'
import type { StringPrototypeBuiltinsFactory$JSStringToStringNodeGen$ToStringForeignObject0Data } from '../../../../../com/oracle/truffle/js/builtins/StringPrototypeBuiltinsFactory$JSStringToStringNodeGen$ToStringForeignObject0Data.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class StringPrototypeBuiltinsFactory$JSStringToStringNodeGen extends StringPrototypeBuiltins$JSStringToStringNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramarguments: (Object | null)[]): StringPrototypeBuiltins$JSStringToStringNode;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, builtin: JSBuiltin, arguments: JavaScriptNode[])
    // private arguments0_: JavaScriptNode;
    // private state_0_: number;
    // private toStringForeignObject0_cache: StringPrototypeBuiltinsFactory$JSStringToStringNodeGen$ToStringForeignObject0Data;
    // private toStringForeignObject1_switchEncoding_: TruffleString$SwitchEncodingNode;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(arguments0Value: Object): TruffleString;
    // private fallbackGuard_(state_0: number, arguments0Value: Object): boolean;
    getArguments(): JavaScriptNode[];
    // private toStringForeignObject1Boundary(state_0: number, arguments0Value_: Object, switchEncoding__: TruffleString$SwitchEncodingNode): Object;
}