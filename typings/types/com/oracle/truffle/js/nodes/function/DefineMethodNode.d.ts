import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { DefineMethodNode$FunctionCreateNode } from '../../../../../../com/oracle/truffle/js/nodes/function/DefineMethodNode$FunctionCreateNode.d.ts'
import type { JSFunctionExpressionNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionExpressionNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSFunctionData } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
export class DefineMethodNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext, paramfunctionExpressionNode: JSFunctionExpressionNode, paramblockScopeSlot: number): DefineMethodNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext, functionData: JSFunctionData, blockScopeSlot: number)
    // private functionCreateNode: DefineMethodNode$FunctionCreateNode;
    readonly functionData: JSFunctionData;
    // private makeMethodNode: PropertySetNode;
    execute(frame: VirtualFrame, homeObject: JSDynamicObject, functionPrototype: JSDynamicObject): JSFunctionObject;
    getBlockScopeSlot(): number;
    getFunctionData(): JSFunctionData;
}