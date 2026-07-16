import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { InstrumentableNode } from '../../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSReadFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSReadFrameSlotNode.d.ts'
import type { JSWriteFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSWriteFrameSlotNode.d.ts'
import type { AsyncGeneratorBodyNode$AsyncGeneratorRootNode } from '../../../../../../com/oracle/truffle/js/nodes/control/AsyncGeneratorBodyNode$AsyncGeneratorRootNode.d.ts'
import type { SpecializedNewObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/function/SpecializedNewObjectNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSAsyncGeneratorObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSAsyncGeneratorObject.d.ts'
import type { ScriptOrModule } from '../../../../../../com/oracle/truffle/js/runtime/objects/ScriptOrModule.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AsyncGeneratorBodyNode extends JavaScriptNode {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramcontext: JSContext, parambody: JavaScriptNode, paramwriteYieldValueNode: JSWriteFrameSlotNode, paramreadYieldResultNode: JSReadFrameSlotNode, paramwriteAsyncContext: JSWriteFrameSlotNode, paramreadAsyncContext: JSReadFrameSlotNode, paramfunctionSourceSection: SourceSection, paramfunctionName: TruffleString, paramactiveScriptOrModule: ScriptOrModule): JavaScriptNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, writeAsyncContext: JSWriteFrameSlotNode, resumptionRootNode: AsyncGeneratorBodyNode$AsyncGeneratorRootNode)
    // private context: JSContext;
    // private createAsyncGeneratorObject: SpecializedNewObjectNode;
    // private resumptionRootNode: AsyncGeneratorBodyNode$AsyncGeneratorRootNode;
    // private writeAsyncContext: JSWriteFrameSlotNode;
    // private asyncGeneratorStart(frame: VirtualFrame, generatorObject: JSAsyncGeneratorObject): void;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    execute(frame: VirtualFrame): Object;
    materializeInstrumentableNodes(materializedTags: Class<Tag>[]): InstrumentableNode;
}