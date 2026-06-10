import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { GeneratorIfNode } from '../../../../../../com/oracle/truffle/js/nodes/control/GeneratorIfNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GeneratorIfNodeGen extends GeneratorIfNode {
    static EMPTY: Object;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: Class<Tag>[]): Object | null;
    static create(paramcondition: JavaScriptNode, paramthenPart: JavaScriptNode, paramelsePart: JavaScriptNode, paramstateSlot: number): GeneratorIfNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(condition: JavaScriptNode, thenPart: JavaScriptNode, elsePart: JavaScriptNode, stateSlot: number)
    // private conditionProfile__field0_: number;
    // private conditionProfile__field1_: number;
    // private state_0_: number;
    // private toBooleanNode__field1_: Node;
    execute(frameValue: VirtualFrame): Object;
    executeVoid(frameValue: VirtualFrame): void;
}