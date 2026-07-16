import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { InstrumentableNode } from '../../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { DirectCallNode } from '../../../../../../com/oracle/truffle/api/nodes/DirectCallNode.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSWriteFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSWriteFrameSlotNode.d.ts'
import type { TopLevelAwaitModuleBodyNode$TopLevelAwaitModuleRootNode } from '../../../../../../com/oracle/truffle/js/nodes/control/TopLevelAwaitModuleBodyNode$TopLevelAwaitModuleRootNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { ScriptOrModule } from '../../../../../../com/oracle/truffle/js/runtime/objects/ScriptOrModule.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TopLevelAwaitModuleBodyNode extends JavaScriptNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(paramcontext: JSContext, parammoduleBody: JavaScriptNode, paramwriteAsyncResult: JSWriteFrameSlotNode, paramwriteAsyncContext: JSWriteFrameSlotNode, paramfunctionSourceSection: SourceSection, paramactiveScriptOrModule: ScriptOrModule): JavaScriptNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, writeAsyncContextNode: JSWriteFrameSlotNode, resumptionRootNode: TopLevelAwaitModuleBodyNode$TopLevelAwaitModuleRootNode)
    // private asyncCallNode: DirectCallNode;
    // private context: JSContext;
    // private resumptionRootNode: TopLevelAwaitModuleBodyNode$TopLevelAwaitModuleRootNode;
    // private writeAsyncContextNode: JSWriteFrameSlotNode;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    // private ensureAsyncCallTargetInitialized(): void;
    execute(frame: VirtualFrame): Object;
    // private initializeAsyncCallTarget(): void;
    materializeInstrumentableNodes(materializedTags: Class<Tag>[]): InstrumentableNode;
}