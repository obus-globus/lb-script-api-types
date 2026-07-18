import type { FrameSlotKind } from '../../../../../../com/oracle/truffle/api/frame/FrameSlotKind.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RepeatingNode } from '../../../../../../com/oracle/truffle/api/nodes/RepeatingNode.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ResumableNode } from '../../../../../../com/oracle/truffle/js/nodes/control/ResumableNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class AbstractRepeatingNode extends JavaScriptNode implements RepeatingNode, ResumableNode {
    static BREAK_LOOP_STATUS: Object;
    static CONTINUE_LOOP_STATUS: Object;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(condition: JavaScriptNode, body: JavaScriptNode)
    // private bodyNode: JavaScriptNode;
    // private conditionNode: JavaScriptNode;
    asResumableNode(stateSlot: number): JavaScriptNode;
    // private checkThreadInterrupted(): void;
    execute(frame: VirtualFrame): Object;
    executeBody(frame: VirtualFrame): void;
    executeCondition(frame: VirtualFrame): boolean;
    executeRepeating(frame: VirtualFrame): boolean;
    executeRepeatingWithValue(frame: VirtualFrame): Object;
    getStateSlotKind(): FrameSlotKind;
    initialLoopStatus(): Object;
    materializationNeeded(): boolean;
    materializeBody(materializedTags: Class<Tag>[]): JavaScriptNode;
    materializeCondition(materializedTags: Class<Tag>[]): JavaScriptNode;
    materializeInstrumentableNodes(materializedTags: Class<Tag>[]): AbstractRepeatingNode;
    resetState(frame: VirtualFrame, stateSlot: number): void;
    resume(frame: VirtualFrame, stateSlot: number): Object;
    shouldContinue(returnValue: Object): boolean;
}