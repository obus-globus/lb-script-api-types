import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IteratorCloseWrapperNode } from '../../../../../../com/oracle/truffle/js/nodes/control/IteratorCloseWrapperNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IteratorCloseWrapperNodeGen extends IteratorCloseWrapperNode {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramcontext: JSContext, paramblock: JavaScriptNode, paramiterator: JavaScriptNode, paramarrayDestructuring: boolean): JavaScriptNode;
    static create(paramcontext: JSContext, paramblock: JavaScriptNode, paramiterator: JavaScriptNode, paramarrayDestructuring: boolean): IteratorCloseWrapperNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, block: JavaScriptNode, iterator: JavaScriptNode, arrayDestructuring: boolean)
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    executeVoid(frameValue: VirtualFrame): void;
}