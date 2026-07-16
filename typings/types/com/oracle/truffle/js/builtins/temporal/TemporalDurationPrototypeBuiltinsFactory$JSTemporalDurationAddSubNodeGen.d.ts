import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$EqualNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { TemporalDurationPrototypeBuiltins$JSTemporalDurationAddSubNode } from '../../../../../../com/oracle/truffle/js/builtins/temporal/TemporalDurationPrototypeBuiltins$JSTemporalDurationAddSubNode.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBuiltin } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { DifferenceZonedDateTimeNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/DifferenceZonedDateTimeNode.d.ts'
import type { TemporalAddDateNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalAddDateNode.d.ts'
import type { TemporalAddZonedDateTimeNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalAddZonedDateTimeNode.d.ts'
import type { TemporalDifferenceDateNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalDifferenceDateNode.d.ts'
import type { TemporalGetOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalGetOptionNode.d.ts'
import type { ToRelativeTemporalObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/ToRelativeTemporalObjectNode.d.ts'
import type { ToTemporalDurationNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/ToTemporalDurationNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { TemporalUtil$RoundingMode } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$RoundingMode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TemporalDurationPrototypeBuiltinsFactory$JSTemporalDurationAddSubNodeGen extends TemporalDurationPrototypeBuiltins$JSTemporalDurationAddSubNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramsign: number, paramarguments: JavaScriptNode[]): TemporalDurationPrototypeBuiltins$JSTemporalDurationAddSubNode;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static toTemporalRoundingMode(paramoptions: JSDynamicObject, paramfallback: TruffleString, paramequalNode: TruffleString$EqualNode, paramgetOptionNode: TemporalGetOptionNode): TemporalUtil$RoundingMode;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, builtin: JSBuiltin, sign: number, arguments: JavaScriptNode[])
    // private addDurations_addDateNode_: TemporalAddDateNode;
    // private addDurations_addZonedDateTimeNode_: TemporalAddZonedDateTimeNode;
    // private addDurations_differenceDateNode_: TemporalDifferenceDateNode;
    // private addDurations_differenceZonedDateTimeNode_: DifferenceZonedDateTimeNode;
    // private addDurations_toRelativeTemporalObjectNode_: ToRelativeTemporalObjectNode;
    // private addDurations_toTemporalDurationNode_: ToTemporalDurationNode;
    // private arguments0_: JavaScriptNode;
    // private arguments1_: JavaScriptNode;
    // private arguments2_: JavaScriptNode;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(arguments0Value: Object, arguments1Value: Object, arguments2Value: Object): Object;
    getArguments(): JavaScriptNode[];
}