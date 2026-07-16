import type { FrameSlotKind } from '../../../../../../com/oracle/truffle/api/frame/FrameSlotKind.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { CreateIterResultObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/CreateIterResultObjectNode.d.ts'
import type { JSWriteFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSWriteFrameSlotNode.d.ts'
import type { AbstractYieldNode } from '../../../../../../com/oracle/truffle/js/nodes/control/AbstractYieldNode.d.ts'
import type { ResumableNode$WithIntState } from '../../../../../../com/oracle/truffle/js/nodes/control/ResumableNode$WithIntState.d.ts'
import type { ReturnNode } from '../../../../../../com/oracle/truffle/js/nodes/control/ReturnNode.d.ts'
import type { YieldResultNode } from '../../../../../../com/oracle/truffle/js/nodes/control/YieldResultNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class YieldNode extends AbstractYieldNode implements ResumableNode$WithIntState {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static createYield(paramcontext: JSContext, paramstateSlot: number, paramexpression: JavaScriptNode, paramyieldValue: JavaScriptNode, paramreturnNode: ReturnNode, paramwriteYieldResultNode: JSWriteFrameSlotNode): JavaScriptNode;
    static createYieldStar(paramcontext: JSContext, paramstateSlot: number, paramexpression: JavaScriptNode, paramyieldValue: JavaScriptNode, paramreturnNode: ReturnNode, paramwriteYieldResultNode: JSWriteFrameSlotNode): JavaScriptNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, stateSlot: number, expression: JavaScriptNode, yieldValue: JavaScriptNode, returnNode: ReturnNode, yieldResultNode: YieldResultNode)
    // private createIterResultObjectNode: CreateIterResultObjectNode;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    execute(frame: VirtualFrame): Object;
    getStateAsInt(frame: VirtualFrame, stateSlot: number): number;
    getStateAsIntAndReset(frame: VirtualFrame, stateSlot: number): number;
    getStateSlotKind(): FrameSlotKind;
    setStateAsInt(frame: VirtualFrame, stateSlot: number, state: number): void;
}