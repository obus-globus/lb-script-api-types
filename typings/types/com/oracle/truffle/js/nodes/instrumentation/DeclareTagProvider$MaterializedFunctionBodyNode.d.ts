import type { FrameDescriptor } from '../../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { FunctionBodyNode } from '../../../../../../com/oracle/truffle/js/nodes/function/FunctionBodyNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DeclareTagProvider$MaterializedFunctionBodyNode extends FunctionBodyNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(parambody: JavaScriptNode): FunctionBodyNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(original: JavaScriptNode, body: JavaScriptNode, frameDescriptor: FrameDescriptor)
    constructor(body: JavaScriptNode, declarations: JavaScriptNode[])
    // private declarations: JavaScriptNode[];
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    execute(frame: VirtualFrame): Object;
}