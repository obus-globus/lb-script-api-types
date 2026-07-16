import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { GetIteratorUnaryNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetIteratorUnaryNode.d.ts'
import type { IteratorGetNextValueNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IteratorGetNextValueNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { SimpleArrayList } from '../../../../../../com/oracle/truffle/js/runtime/util/SimpleArrayList.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class SpreadArgumentNode extends JavaScriptNode {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramcontext: JSContext, paramgetIteratorNode: GetIteratorUnaryNode): SpreadArgumentNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, getIteratorNode: GetIteratorUnaryNode)
    // private context: JSContext;
    // private getIteratorNode: GetIteratorUnaryNode;
    // private iteratorStepNode: IteratorGetNextValueNode;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    doSpread(frame: VirtualFrame, argList: SimpleArrayList<Object>, growBranch: InlinedBranchProfile, errorBranch: InlinedBranchProfile): void;
    execute(frame: VirtualFrame): Object[];
    executeBoolean(frame: VirtualFrame): boolean;
    executeDouble(frame: VirtualFrame): number;
    executeInt(frame: VirtualFrame): number;
    executeToList(frame: VirtualFrame, argList: SimpleArrayList<Object>): void;
    executeVoid(frame: VirtualFrame): void;
    isInstrumentable(): boolean;
}