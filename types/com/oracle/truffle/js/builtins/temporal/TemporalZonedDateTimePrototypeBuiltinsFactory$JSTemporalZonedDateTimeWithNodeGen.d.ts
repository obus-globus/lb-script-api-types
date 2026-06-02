import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$EqualNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { TemporalZonedDateTimePrototypeBuiltins$JSTemporalZonedDateTimeWith } from '../../../../../../com/oracle/truffle/js/builtins/temporal/TemporalZonedDateTimePrototypeBuiltins$JSTemporalZonedDateTimeWith.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { CreateDataPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/CreateDataPropertyNode.d.ts'
import type { JSBuiltin } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { IsPartialTemporalObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/IsPartialTemporalObjectNode.d.ts'
import type { TemporalCalendarDateFromFieldsNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalCalendarDateFromFieldsNode.d.ts'
import type { TemporalGetOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalGetOptionNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { TemporalUtil$RoundingMode } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$RoundingMode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TemporalZonedDateTimePrototypeBuiltinsFactory$JSTemporalZonedDateTimeWithNodeGen extends TemporalZonedDateTimePrototypeBuiltins$JSTemporalZonedDateTimeWith {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramarguments: (Object | null)[]): TemporalZonedDateTimePrototypeBuiltins$JSTemporalZonedDateTimeWith;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static toTemporalRoundingMode(paramoptions: JSDynamicObject, paramfallback: TruffleString, paramequalNode: TruffleString$EqualNode, paramgetOptionNode: TemporalGetOptionNode): TemporalUtil$RoundingMode;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, builtin: JSBuiltin, arguments: JavaScriptNode[])
    // private arguments0_: JavaScriptNode;
    // private arguments1_: JavaScriptNode;
    // private arguments2_: JavaScriptNode;
    // private state_0_: number;
    // private with_createHourDataPropertyNode_: CreateDataPropertyNode;
    // private with_createMicrosecondDataPropertyNode_: CreateDataPropertyNode;
    // private with_createMillisecondDataPropertyNode_: CreateDataPropertyNode;
    // private with_createMinuteDataPropertyNode_: CreateDataPropertyNode;
    // private with_createNanosecondDataPropertyNode_: CreateDataPropertyNode;
    // private with_createOffsetDataPropertyNode_: CreateDataPropertyNode;
    // private with_createSecondDataPropertyNode_: CreateDataPropertyNode;
    // private with_dateFromFieldsNode_: TemporalCalendarDateFromFieldsNode;
    // private with_equalNode_: TruffleString$EqualNode;
    // private with_getOptionNode_: TemporalGetOptionNode;
    // private with_isPartialTemporalObjectNode_: IsPartialTemporalObjectNode;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(arguments0Value: Object, arguments1Value: Object, arguments2Value: Object): Object;
    getArguments(): JavaScriptNode[];
}