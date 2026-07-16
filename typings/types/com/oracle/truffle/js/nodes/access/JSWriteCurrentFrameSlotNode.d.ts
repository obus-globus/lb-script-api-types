import type { Frame } from '../../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { FrameSlotKind } from '../../../../../../com/oracle/truffle/api/frame/FrameSlotKind.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSFrameSlot } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSWriteFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSWriteFrameSlotNode.d.ts'
import type { ScopeFrameNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ScopeFrameNode.d.ts'
import type { SafeInteger } from '../../../../../../com/oracle/truffle/js/runtime/SafeInteger.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSWriteCurrentFrameSlotNode extends JSWriteFrameSlotNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(paramframeSlot: JSFrameSlot, paramrhs: JavaScriptNode, paramhasTemporalDeadZone: boolean): JSWriteFrameSlotNode;
    static create(paramframeSlot: JSFrameSlot, paramscopeFrameNode: ScopeFrameNode, paramrhs: JavaScriptNode, paramhasTemporalDeadZone: boolean): JSWriteFrameSlotNode;
    static create(paramslotIndex: number, paramidentifier: Object, paramscopeFrameNode: ScopeFrameNode, paramrhs: JavaScriptNode, paramhasTemporalDeadZone: boolean): JSWriteFrameSlotNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(slot: number, identifier: Object, rhsNode: JavaScriptNode)
    // private rhsNode: JavaScriptNode;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    doBoolean(frame: VirtualFrame, value: boolean): boolean;
    doDouble(frame: VirtualFrame, value: number): number;
    doInteger(frame: VirtualFrame, value: number, kind: FrameSlotKind): number;
    doLong(frame: VirtualFrame, value: number): number;
    doObject(frame: VirtualFrame, value: Object): Object;
    doSafeInteger(frame: VirtualFrame, value: SafeInteger): SafeInteger;
    executeEvaluated(frame: VirtualFrame, value: Object): void;
    executeWithFrame(frame: Frame, value: Object): void;
    executeWrite(frame: VirtualFrame, value: Object): void;
    getLevelFrameNode(): ScopeFrameNode;
    getRhs(): JavaScriptNode;
}