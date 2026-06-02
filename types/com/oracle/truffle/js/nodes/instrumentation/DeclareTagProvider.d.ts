import type { FrameDescriptor } from '../../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { NodeObjectDescriptor } from '../../../../../../com/oracle/truffle/js/nodes/instrumentation/NodeObjectDescriptor.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DeclareTagProvider extends Object {
    static createDeclareNodeObject(paramname: Object, paramtype: Object): NodeObjectDescriptor;
    static createMaterializedBlockNode(paramoriginal: JavaScriptNode, paramblock: JavaScriptNode, paramblockScopeSlot: number, paramframeDescriptor: FrameDescriptor, paramparentSlot: number, paramfunctionBlock: boolean, paramcaptureFunctionFrame: boolean, paramgeneratorFunctionBlock: boolean, paramhasParentBlock: boolean, paramstart: number, paramend: number): JavaScriptNode;
    static createMaterializedFunctionBodyNode(paramoriginal: JavaScriptNode, parambody: JavaScriptNode, paramframeDescriptor: FrameDescriptor): JavaScriptNode;
    static isMaterializedFrameProvider(paramnode: JavaScriptNode): boolean;
    private constructor()
}