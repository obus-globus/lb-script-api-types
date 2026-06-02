import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TemporalPlainDatePrototypeBuiltins$JSTemporalPlainDateCalendarGetterNode } from '../../../../../../com/oracle/truffle/js/builtins/temporal/TemporalPlainDatePrototypeBuiltins$JSTemporalPlainDateCalendarGetterNode.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBuiltin } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { ToTemporalCalendarIdentifierNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/ToTemporalCalendarIdentifierNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TemporalPlainDatePrototypeBuiltinsFactory$JSTemporalPlainDateCalendarGetterNodeGen extends TemporalPlainDatePrototypeBuiltins$JSTemporalPlainDateCalendarGetterNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramarguments: (Object | null)[]): TemporalPlainDatePrototypeBuiltins$JSTemporalPlainDateCalendarGetterNode;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, builtin: JSBuiltin, arguments: JavaScriptNode[])
    // private arguments0_: JavaScriptNode;
    // private calendarId_toCalendarIdentifier_: ToTemporalCalendarIdentifierNode;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(arguments0Value: Object): TruffleString;
    getArguments(): JavaScriptNode[];
}