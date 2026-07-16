import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { InstrumentableNode } from '../../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { LoopNode } from '../../../../../../com/oracle/truffle/api/nodes/LoopNode.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RepeatingNode } from '../../../../../../com/oracle/truffle/api/nodes/RepeatingNode.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSWriteFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSWriteFrameSlotNode.d.ts'
import type { StatementNode } from '../../../../../../com/oracle/truffle/js/nodes/control/StatementNode.d.ts'
import type { JSTags$ControlFlowRootTag$Type } from '../../../../../../com/oracle/truffle/js/nodes/instrumentation/JSTags$ControlFlowRootTag$Type.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WhileNode extends StatementNode {
    static EMPTY: Object;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static createDesugaredFor(paramloopNode: LoopNode): JavaScriptNode;
    static createDesugaredForAwaitOf(paramloopNode: LoopNode): JavaScriptNode;
    static createDesugaredForIn(paramloopNode: LoopNode): JavaScriptNode;
    static createDesugaredForOf(paramloopNode: LoopNode): JavaScriptNode;
    static createDoWhile(paramloopNode: LoopNode): JavaScriptNode;
    static createDoWhileRepeatingNode(paramcondition: JavaScriptNode, parambody: JavaScriptNode): RepeatingNode;
    static createForOfRepeatingNode(paramnextResultNode: JavaScriptNode, parambody: JavaScriptNode, paramwriteNextValueNode: JSWriteFrameSlotNode): RepeatingNode;
    static createWhileDo(paramloopNode: LoopNode): JavaScriptNode;
    static createWhileDoRepeatingNode(paramcondition: JavaScriptNode, parambody: JavaScriptNode): RepeatingNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(loopNode: LoopNode, type: JSTags$ControlFlowRootTag$Type)
    private constructor(repeatingNode: RepeatingNode, type: JSTags$ControlFlowRootTag$Type)
    // private loop: LoopNode;
    // private loopType: JSTags$ControlFlowRootTag$Type;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    execute(frame: VirtualFrame): Object;
    executeVoid(frame: VirtualFrame): void;
    getLoopNode(): LoopNode;
    getNodeObject(): Object;
    hasTag(tag: Class<Tag>): boolean;
    isResultAlwaysOfType(clazz: Class<Object>): boolean;
    materializeInstrumentableNodes(materializedTags: Class<Tag>[]): InstrumentableNode;
}