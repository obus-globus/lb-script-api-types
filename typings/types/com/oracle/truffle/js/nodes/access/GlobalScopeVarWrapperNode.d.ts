import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ReadNode } from '../../../../../../com/oracle/truffle/js/nodes/ReadNode.d.ts'
import type { GlobalScopeLookupNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GlobalScopeLookupNode.d.ts'
import type { JSTargetableNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSTargetableNode.d.ts'
import type { VarWrapperNode } from '../../../../../../com/oracle/truffle/js/nodes/access/VarWrapperNode.d.ts'
import type { WriteNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GlobalScopeVarWrapperNode extends VarWrapperNode implements ReadNode, WriteNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: Class<Tag>[]): Object | null;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(varName: TruffleString, defaultDelegate: JavaScriptNode, dynamicScope: JavaScriptNode, scopeAccessNode: JSTargetableNode)
    // private defaultDelegate: JavaScriptNode;
    // private dynamicScopeNode: JavaScriptNode;
    // private scopeAccessNode: JSTargetableNode;
    // private scopeHasBinding: GlobalScopeLookupNode;
    // private varName: TruffleString;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    execute(frame: VirtualFrame): Object;
    executeWrite(frame: VirtualFrame, value: Object): void;
    getDelegateNode(): JavaScriptNode;
    getRhs(): JavaScriptNode;
    hasTag(tag: Class<Tag>): boolean;
    isInstrumentable(): boolean;
    // private isWrite(): boolean;
    setMethod(): void;
}