import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedCountingConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedCountingConditionProfile.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSToBooleanNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToBooleanNode.d.ts'
import type { AbstractIfNode } from '../../../../../../com/oracle/truffle/js/nodes/control/AbstractIfNode.d.ts'
import type { GeneratorNode } from '../../../../../../com/oracle/truffle/js/nodes/control/GeneratorNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class GeneratorIfNode extends AbstractIfNode implements GeneratorNode {
    static EMPTY: Object;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(condition: JavaScriptNode, thenPart: JavaScriptNode, elsePart: JavaScriptNode, stateSlot: number)
    condition: JavaScriptNode;
    elsePart: JavaScriptNode;
    // private stateSlot: number;
    thenPart: JavaScriptNode;
    copyWith(newCondition: JavaScriptNode, newThenPart: JavaScriptNode, newElsePart: JavaScriptNode): AbstractIfNode;
    doDefault(frame: VirtualFrame, toBooleanNode: JSToBooleanNode, conditionProfile: InlinedCountingConditionProfile): Object;
    getCondition(): JavaScriptNode;
    getElsePart(): JavaScriptNode;
    getThenPart(): JavaScriptNode;
}