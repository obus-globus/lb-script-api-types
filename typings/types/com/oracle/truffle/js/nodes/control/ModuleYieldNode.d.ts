import type { FrameSlotKind } from '../../../../../../com/oracle/truffle/api/frame/FrameSlotKind.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ResumableNode } from '../../../../../../com/oracle/truffle/js/nodes/control/ResumableNode.d.ts'
import type { SuspendNode } from '../../../../../../com/oracle/truffle/js/nodes/control/SuspendNode.d.ts'
import type { YieldResultNode } from '../../../../../../com/oracle/truffle/js/nodes/control/YieldResultNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ModuleYieldNode extends JavaScriptNode implements ResumableNode, SuspendNode {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(): ModuleYieldNode;
    static createResumableNode(paramnode: ResumableNode, paramstateSlot: number): JavaScriptNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor()
    // private generatorYieldNode: YieldResultNode;
    asResumableNode(stateSlot: number): JavaScriptNode;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    execute(frame: VirtualFrame): Object;
    generatorYield(frame: VirtualFrame): Object;
    getStateSlotKind(): FrameSlotKind;
    resetState(frame: VirtualFrame, stateSlot: number): void;
    resume(frame: VirtualFrame, stateSlot: number): Object;
}