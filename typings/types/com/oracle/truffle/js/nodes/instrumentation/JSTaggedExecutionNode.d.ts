import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { NodeObjectDescriptor } from '../../../../../../com/oracle/truffle/js/nodes/instrumentation/NodeObjectDescriptor.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSTaggedExecutionNode extends JavaScriptNode {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static createFor(paramoriginalNode: JavaScriptNode, paramexpectedTag: Class<Object>, parammaterializedTags: (Object | null)[]): JavaScriptNode;
    static createForInput(paramoriginalNode: JavaScriptNode, paramtransferSourcesFrom: JavaScriptNode, parammaterializedTags: (Object | null)[]): JavaScriptNode;
    static createForInput(paramoriginalNode: JavaScriptNode, paramexpectedTag: Class<Object>, paramdescriptor: NodeObjectDescriptor, parammaterializedTags: (Object | null)[]): JavaScriptNode;
    static createForInput(paramoriginalNode: JavaScriptNode, paramexpectedTag: Class<Object>, parammaterializedTags: (Object | null)[]): JavaScriptNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(child: JavaScriptNode, expectedTag: Class<Tag>, inputTag: boolean, descriptor: NodeObjectDescriptor)
    // private child: JavaScriptNode;
    // private descriptor: NodeObjectDescriptor;
    // private expectedTag: Class<Tag>;
    // private inputTag: boolean;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    execute(frame: VirtualFrame): Object;
    getDelegateNode(): JavaScriptNode;
    getNodeObject(): Object;
    hasTag(tag: Class<Tag>): boolean;
}