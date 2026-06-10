import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { InstrumentableNode } from '../../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSReadFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSReadFrameSlotNode.d.ts'
import type { JSWriteFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSWriteFrameSlotNode.d.ts'
import type { GeneratorBodyNode$GeneratorRootNode } from '../../../../../../com/oracle/truffle/js/nodes/control/GeneratorBodyNode$GeneratorRootNode.d.ts'
import type { SpecializedNewObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/function/SpecializedNewObjectNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSGeneratorObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSGeneratorObject.d.ts'
import type { ScriptOrModule } from '../../../../../../com/oracle/truffle/js/runtime/objects/ScriptOrModule.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GeneratorBodyNode extends JavaScriptNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: Class<Tag>[]): Object | null;
    static create(paramcontext: JSContext, parambody: JavaScriptNode, paramwriteYieldValue: JSWriteFrameSlotNode, paramreadYieldResult: JSReadFrameSlotNode, paramfunctionSourceSection: SourceSection, paramfunctionName: TruffleString, paramactiveScriptOrModule: ScriptOrModule): GeneratorBodyNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, generatorRootNode: GeneratorBodyNode$GeneratorRootNode)
    // private context: JSContext;
    // private createGeneratorObject: SpecializedNewObjectNode;
    // private generatorRootNode: GeneratorBodyNode$GeneratorRootNode;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    execute(frame: VirtualFrame): Object;
    // private generatorStart(frame: VirtualFrame, generatorObject: JSGeneratorObject): void;
    materializeInstrumentableNodes(materializedTags: Class<Tag>[]): InstrumentableNode;
}