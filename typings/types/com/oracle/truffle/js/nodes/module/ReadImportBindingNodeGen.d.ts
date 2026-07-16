import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ReadImportBindingNode } from '../../../../../../com/oracle/truffle/js/nodes/module/ReadImportBindingNode.d.ts'
import type { ReadImportBindingNodeGen$CachedData } from '../../../../../../com/oracle/truffle/js/nodes/module/ReadImportBindingNodeGen$CachedData.d.ts'
import type { ExportResolution } from '../../../../../../com/oracle/truffle/js/runtime/objects/ExportResolution.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ReadImportBindingNodeGen extends ReadImportBindingNode {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramresolutionNode: JavaScriptNode): JavaScriptNode;
    static create(): ReadImportBindingNode;
    static create(paramresolutionNode: JavaScriptNode): ReadImportBindingNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(resolutionNode: JavaScriptNode)
    // private cached_cache: ReadImportBindingNodeGen$CachedData;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    execute(resolutionNodeValue: ExportResolution): Object;
    // private executeAndSpecialize(resolutionNodeValue: Object): Object;
    executeVoid(frameValue: VirtualFrame): void;
    // private fallbackGuard_(state_0: number, resolutionNodeValue: Object): boolean;
}