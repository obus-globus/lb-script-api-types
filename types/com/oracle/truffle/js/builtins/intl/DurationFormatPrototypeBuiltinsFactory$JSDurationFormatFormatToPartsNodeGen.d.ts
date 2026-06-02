import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DurationFormatPrototypeBuiltins$JSDurationFormatFormatToPartsNode } from '../../../../../../com/oracle/truffle/js/builtins/intl/DurationFormatPrototypeBuiltins$JSDurationFormatFormatToPartsNode.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBuiltin } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { ToTemporalDurationRecordNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/ToTemporalDurationRecordNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DurationFormatPrototypeBuiltinsFactory$JSDurationFormatFormatToPartsNodeGen extends DurationFormatPrototypeBuiltins$JSDurationFormatFormatToPartsNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramarguments: (Object | null)[]): DurationFormatPrototypeBuiltins$JSDurationFormatFormatToPartsNode;
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
    // private formatToParts_toTemporalDurationRecord_: ToTemporalDurationRecordNode;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(arguments0Value: Object, arguments1Value: Object): Object;
    // private fallbackGuard_(state_0: number, arguments0Value: Object, arguments1Value: Object): boolean;
    getArguments(): JavaScriptNode[];
}