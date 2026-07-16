import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RepeatingNode } from '../../../../../../com/oracle/truffle/api/nodes/RepeatingNode.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { GeneratorNode } from '../../../../../../com/oracle/truffle/js/nodes/control/GeneratorNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GeneratorWrapperNode extends JavaScriptNode implements RepeatingNode, GeneratorNode {
    static BREAK_LOOP_STATUS: Object;
    static CONTINUE_LOOP_STATUS: Object;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static createWrapper(paramchild: JavaScriptNode, paramstateSlot: number): JavaScriptNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(childNode: JavaScriptNode, stateSlot: number)
    // private childNode: JavaScriptNode;
    // private stateSlot: number;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    execute(frame: VirtualFrame): Object;
    executeRepeating(frame: VirtualFrame): boolean;
    executeRepeatingWithValue(frame: VirtualFrame): Object;
    getNodeObject(): Object;
    getResumableNode(): JavaScriptNode;
    hasTag(tag: Class<Tag>): boolean;
    initialLoopStatus(): Object;
    shouldContinue(returnValue: Object): boolean;
}