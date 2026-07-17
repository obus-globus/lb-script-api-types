import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSWriteFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSWriteFrameSlotNode.d.ts'
import type { WhileNode$ForOfRepeatingNode } from '../../../../../../com/oracle/truffle/js/nodes/control/WhileNode$ForOfRepeatingNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WhileNodeFactory$ForOfRepeatingNodeGen extends WhileNode$ForOfRepeatingNode {
    static BREAK_LOOP_STATUS: Object;
    static CONTINUE_LOOP_STATUS: Object;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramiteratorNode: JavaScriptNode, paramnextResultNode: JavaScriptNode, parambody: JavaScriptNode, paramwriteNextValueNode: JSWriteFrameSlotNode): WhileNode$ForOfRepeatingNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(iteratorNode: JavaScriptNode, nextResultNode: JavaScriptNode, body: JavaScriptNode, writeNextValueNode: JSWriteFrameSlotNode)
    // private arrayIterator_getLengthNode__field1_: InteropLibrary;
    // private arrayIterator_getLengthNode__field2_: Node;
    // private state_0_: number;
    // private state_1_: number;
    // private executeAndSpecialize(frameValue: VirtualFrame): boolean;
    executeRepeating(frameValue: VirtualFrame): boolean;
    executeVoid(frameValue: VirtualFrame): void;
}