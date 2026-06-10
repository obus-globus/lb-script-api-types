import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedCountingConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedCountingConditionProfile.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSToBooleanNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToBooleanNode.d.ts'
import type { AbstractIfNode } from '../../../../../../com/oracle/truffle/js/nodes/control/AbstractIfNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class IfNode extends AbstractIfNode {
    static EMPTY: Object;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: Class<Tag>[]): Object | null;
    static create(paramcondition: JavaScriptNode, paramthenPart: JavaScriptNode, paramelsePart: JavaScriptNode): IfNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(condition: JavaScriptNode, thenPart: JavaScriptNode, elsePart: JavaScriptNode)
    condition: JavaScriptNode;
    elsePart: JavaScriptNode;
    thenPart: JavaScriptNode;
    asResumableNode(stateSlot: number): JavaScriptNode;
    copyWith(newCondition: JavaScriptNode, newThenPart: JavaScriptNode, newElsePart: JavaScriptNode): AbstractIfNode;
    doBoolean(frame: VirtualFrame, conditionResult: boolean, conditionProfile: InlinedCountingConditionProfile): Object;
    doObject(frame: VirtualFrame, conditionResult: Object, toBooleanNode: JSToBooleanNode, conditionProfile: InlinedCountingConditionProfile): Object;
    getCondition(): JavaScriptNode;
    getElsePart(): JavaScriptNode;
    getThenPart(): JavaScriptNode;
}