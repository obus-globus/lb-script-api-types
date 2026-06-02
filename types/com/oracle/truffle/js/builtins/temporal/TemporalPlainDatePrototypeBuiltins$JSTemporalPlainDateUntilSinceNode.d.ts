import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$EqualNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { JSTemporalBuiltinOperation } from '../../../../../../com/oracle/truffle/js/builtins/temporal/JSTemporalBuiltinOperation.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBuiltin } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { GetDifferenceSettingsNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/GetDifferenceSettingsNode.d.ts'
import type { RoundRelativeDurationNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/RoundRelativeDurationNode.d.ts'
import type { TemporalDifferenceDateNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalDifferenceDateNode.d.ts'
import type { TemporalGetOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalGetOptionNode.d.ts'
import type { ToTemporalCalendarIdentifierNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/ToTemporalCalendarIdentifierNode.d.ts'
import type { ToTemporalDateNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/ToTemporalDateNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSTemporalDurationObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalDurationObject.d.ts'
import type { JSTemporalPlainDateObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalPlainDateObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { TemporalUtil$RoundingMode } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$RoundingMode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class TemporalPlainDatePrototypeBuiltins$JSTemporalPlainDateUntilSinceNode extends JSTemporalBuiltinOperation {
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
    constructor(context: JSContext, builtin: JSBuiltin, sign: number)
    // private sign: number;
    differenceTemporalPlainDate(temporalDate: JSTemporalPlainDateObject, otherObj: Object, options: Object, node: Node, differenceDate: TemporalDifferenceDateNode, toTemporalDate: ToTemporalDateNode, toCalendarIdentifier: ToTemporalCalendarIdentifierNode, roundRelativeDuration: RoundRelativeDurationNode, getDifferenceSettings: GetDifferenceSettingsNode, errorBranch: InlinedBranchProfile, optionUndefined: InlinedConditionProfile): JSTemporalDurationObject;
}