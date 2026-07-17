import type { FrameSlotKind } from '../../../../../../com/oracle/truffle/api/frame/FrameSlotKind.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ArrayIteratorPrototypeBuiltins$ArrayIteratorGetLengthSafeNode } from '../../../../../../com/oracle/truffle/js/builtins/ArrayIteratorPrototypeBuiltins$ArrayIteratorGetLengthSafeNode.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IteratorCompleteNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IteratorCompleteNode.d.ts'
import type { IteratorValueNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IteratorValueNode.d.ts'
import type { JSWriteFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSWriteFrameSlotNode.d.ts'
import type { AbstractRepeatingNode } from '../../../../../../com/oracle/truffle/js/nodes/control/AbstractRepeatingNode.d.ts'
import type { ResumableNode$WithIntState } from '../../../../../../com/oracle/truffle/js/nodes/control/ResumableNode$WithIntState.d.ts'
import type { JSArrayIteratorObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayIteratorObject.d.ts'
import type { IteratorRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class WhileNode$ForOfRepeatingNode extends AbstractRepeatingNode implements ResumableNode$WithIntState {
    static BREAK_LOOP_STATUS: Object;
    static CONTINUE_LOOP_STATUS: Object;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(iteratorNode: JavaScriptNode, nextResultNode: JavaScriptNode, body: JavaScriptNode, writeNextValueNode: JSWriteFrameSlotNode)
    // private iteratorCompleteNode: IteratorCompleteNode;
    // private iteratorNode: JavaScriptNode;
    // private iteratorValueNode: IteratorValueNode;
    // private nextResultNode: JavaScriptNode;
    // private writeNextValueNode: JSWriteFrameSlotNode;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    doArrayIterator(frame: VirtualFrame, iteratorRecord: IteratorRecord, getLengthNode: ArrayIteratorPrototypeBuiltins$ArrayIteratorGetLengthSafeNode, arrayIterator: JSArrayIteratorObject, length: number): boolean;
    doGeneric(frame: VirtualFrame): boolean;
    getIteratorRecord(frame: VirtualFrame): IteratorRecord;
    getStateAsInt(frame: VirtualFrame, stateSlot: number): number;
    getStateAsIntAndReset(frame: VirtualFrame, stateSlot: number): number;
    getStateSlotKind(): FrameSlotKind;
    isArrayIterator(iterator: IteratorRecord): boolean;
    materializeInstrumentableNodes(materializedTags: Class<Tag>[]): AbstractRepeatingNode;
    resume(frame: VirtualFrame, stateSlot: number): Object;
    setStateAsInt(frame: VirtualFrame, stateSlot: number, state: number): void;
}