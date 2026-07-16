import type { FrameSlotKind } from '../../../../../../com/oracle/truffle/api/frame/FrameSlotKind.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { InstrumentableNode } from '../../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { LoopNode } from '../../../../../../com/oracle/truffle/api/nodes/LoopNode.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RepeatingNode } from '../../../../../../com/oracle/truffle/api/nodes/RepeatingNode.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ResumableNode$WithObjectState } from '../../../../../../com/oracle/truffle/js/nodes/control/ResumableNode$WithObjectState.d.ts'
import type { StatementNode } from '../../../../../../com/oracle/truffle/js/nodes/control/StatementNode.d.ts'
import type { IterationScopeNode } from '../../../../../../com/oracle/truffle/js/nodes/function/IterationScopeNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ForNode extends StatementNode implements ResumableNode$WithObjectState {
    static EMPTY: Object;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static createFor(paramloopNode: LoopNode): ForNode;
    static createForRepeatingNode(paramcondition: JavaScriptNode, parambody: JavaScriptNode, parammodify: JavaScriptNode, paramcopy: IterationScopeNode, paramisFirstNode: JavaScriptNode, paramsetNotFirstNode: JavaScriptNode): RepeatingNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(loopNode: LoopNode, copy: IterationScopeNode)
    private constructor(repeatingNode: RepeatingNode, copy: IterationScopeNode)
    // private copy: IterationScopeNode;
    // private loop: LoopNode;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    execute(frame: VirtualFrame): Object;
    executeVoid(frame: VirtualFrame): void;
    getLoopNode(): LoopNode;
    getNodeObject(): Object;
    getState(frame: VirtualFrame, stateSlot: number): Object;
    getStateAndReset(frame: VirtualFrame, stateSlot: number): Object;
    getStateSlotKind(): FrameSlotKind;
    hasTag(tag: Class<Tag>): boolean;
    isResultAlwaysOfType(clazz: Class<Object>): boolean;
    materializeInstrumentableNodes(materializedTags: Class<Tag>[]): InstrumentableNode;
    resume(frame: VirtualFrame, stateSlot: number): Object;
    setState(frame: VirtualFrame, stateSlot: number, state: Object): void;
}