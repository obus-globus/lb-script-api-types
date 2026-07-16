import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IteratorGetNextValueNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IteratorGetNextValueNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { IteratorRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IteratorGetNextValueNodeGen extends IteratorGetNextValueNode {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramcontext: JSContext, paramiterator: JavaScriptNode, paramdoneNode: JavaScriptNode, paramsetDone: boolean): IteratorGetNextValueNode;
    static create(paramcontext: JSContext, paramiteratorNode: JavaScriptNode, paramdoneNode: JavaScriptNode, paramsetDone: boolean, paramreadValue: boolean): IteratorGetNextValueNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, iteratorNode: JavaScriptNode, doneNode: JavaScriptNode, setDone: boolean, readValue: boolean)
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    execute(frameValue: VirtualFrame, iteratorNodeValue: IteratorRecord): Object;
    // private executeAndSpecialize(frameValue: VirtualFrame, iteratorNodeValue: Object): Object;
    executeVoid(frameValue: VirtualFrame): void;
}