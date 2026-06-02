import type { Module$ModuleRequest } from '../../../../../../com/oracle/js/parser/ir/Module$ModuleRequest.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ValueProfile } from '../../../../../../com/oracle/truffle/api/profiles/ValueProfile.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSWriteFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSWriteFrameSlotNode.d.ts'
import type { StatementNode } from '../../../../../../com/oracle/truffle/js/nodes/control/StatementNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ResolveStarImportNode extends StatementNode {
    static EMPTY: Object;
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramcontext: JSContext, parammoduleNode: JavaScriptNode, parammoduleRequest: Module$ModuleRequest, paramwriteLocalNode: JSWriteFrameSlotNode): StatementNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, moduleNode: JavaScriptNode, moduleRequest: Module$ModuleRequest, writeLocalNode: JSWriteFrameSlotNode)
    // private context: JSContext;
    // private moduleNode: JavaScriptNode;
    // private moduleProfile: ValueProfile;
    // private moduleRequest: Module$ModuleRequest;
    // private writeLocalNode: JSWriteFrameSlotNode;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    execute(frame: VirtualFrame): Object;
}