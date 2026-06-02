import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$EqualNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { JSTemporalBuiltinOperation } from '../../../../../../com/oracle/truffle/js/builtins/temporal/JSTemporalBuiltinOperation.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBuiltin } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { DifferencePlainDateTimeWithRoundingNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/DifferencePlainDateTimeWithRoundingNode.d.ts'
import type { DifferenceZonedDateTimeWithRoundingNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/DifferenceZonedDateTimeWithRoundingNode.d.ts'
import type { GetTemporalUnitNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/GetTemporalUnitNode.d.ts'
import type { TemporalAddDateNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalAddDateNode.d.ts'
import type { TemporalAddZonedDateTimeNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalAddZonedDateTimeNode.d.ts'
import type { TemporalGetOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalGetOptionNode.d.ts'
import type { ToRelativeTemporalObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/ToRelativeTemporalObjectNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSTemporalDurationObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalDurationObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { TemporalUtil$RoundingMode } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$RoundingMode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class TemporalDurationPrototypeBuiltins$JSTemporalDurationTotal extends JSTemporalBuiltinOperation {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static toTemporalRoundingMode(paramoptions: JSDynamicObject, paramfallback: TruffleString, paramequalNode: TruffleString$EqualNode, paramgetOptionNode: TemporalGetOptionNode): TemporalUtil$RoundingMode;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin)
    total(duration: JSTemporalDurationObject, totalOfParam: Object, node: Node, toRelativeTemporalObjectNode: ToRelativeTemporalObjectNode, getTemporalUnit: GetTemporalUnitNode, addDate: TemporalAddDateNode, differencePlainDateTimeWithRounding: DifferencePlainDateTimeWithRoundingNode, differenceZonedDateTimeWithRounding: DifferenceZonedDateTimeWithRoundingNode, addZonedDateTimeNode: TemporalAddZonedDateTimeNode, errorBranch: InlinedBranchProfile, optionUndefined: InlinedConditionProfile): number;
}