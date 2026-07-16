import type { Frame } from '../../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { InstrumentableNode } from '../../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSFrameSlot } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { LocalVarIncNode } from '../../../../../../com/oracle/truffle/js/nodes/access/LocalVarIncNode.d.ts'
import type { LocalVarIncNode$LocalVarOp } from '../../../../../../com/oracle/truffle/js/nodes/access/LocalVarIncNode$LocalVarOp.d.ts'
import type { LocalVarIncNode$Op } from '../../../../../../com/oracle/truffle/js/nodes/access/LocalVarIncNode$Op.d.ts'
import type { ScopeFrameNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ScopeFrameNode.d.ts'
import type { JSToNumericNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToNumericNode.d.ts'
import type { JSOverloadedUnaryNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/JSOverloadedUnaryNode.d.ts'
import type { SafeInteger } from '../../../../../../com/oracle/truffle/js/runtime/SafeInteger.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class LocalVarPrefixIncNode extends LocalVarIncNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static createPostfix(paramop: LocalVarIncNode$Op, paramframeSlot: JSFrameSlot, paramhasTemporalDeadZone: boolean, paramscopeFrameNode: ScopeFrameNode): LocalVarIncNode;
    static createPrefix(paramop: LocalVarIncNode$Op, paramframeSlot: JSFrameSlot, paramhasTemporalDeadZone: boolean, paramscopeFrameNode: ScopeFrameNode): LocalVarIncNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(op: LocalVarIncNode$LocalVarOp, slot: number, identifier: Object, hasTemporalDeadZone: boolean, scopeFrameNode: ScopeFrameNode)
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    doBoolean(frame: Frame): number;
    doBooleanDouble(frame: Frame): number;
    doBooleanObject(frame: Frame): number;
    doDead(frame: Frame): Object;
    doDouble(frame: Frame): number;
    doDoubleObject(frame: Frame): number;
    doInt(frame: Frame): number;
    doIntOverflow(frame: Frame): number;
    doIntOverflowObject(frame: Frame): number;
    doObject(frame: Frame, node: Node, isNumberProfile: InlinedConditionProfile, isIntegerProfile: InlinedConditionProfile, isBigIntProfile: InlinedConditionProfile, isBoundaryProfile: InlinedConditionProfile, overloadedOperatorNode: JSOverloadedUnaryNode, toNumericOperand: JSToNumericNode): Object;
    doSafeInteger(frame: Frame): SafeInteger;
    doSafeIntegerToDouble(frame: Frame): number;
    doSafeIntegerToObject(frame: Frame): number;
    getOverloadedOperatorName(): TruffleString;
    materializeInstrumentableNodes(materializedTags: Class<Tag>[]): InstrumentableNode;
}