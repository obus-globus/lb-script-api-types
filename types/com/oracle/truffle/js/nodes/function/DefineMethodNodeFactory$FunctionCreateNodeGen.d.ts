import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DefineMethodNode$FunctionCreateNode } from '../../../../../../com/oracle/truffle/js/nodes/function/DefineMethodNode$FunctionCreateNode.d.ts'
import type { DefineMethodNodeFactory$FunctionCreateNodeGen$CachedData } from '../../../../../../com/oracle/truffle/js/nodes/function/DefineMethodNodeFactory$FunctionCreateNodeGen$CachedData.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSFunctionData } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { JSFunctionFactory } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionFactory.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DefineMethodNodeFactory$FunctionCreateNodeGen extends DefineMethodNode$FunctionCreateNode {
    static create(paramcontext: JSContext, paramfunctionData: JSFunctionData, paramblockScopeSlot: number): DefineMethodNode$FunctionCreateNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext, functionData: JSFunctionData, blockScopeSlot: number)
    // private cached_cache: DefineMethodNodeFactory$FunctionCreateNodeGen$CachedData;
    // private multiContext_factory_: JSFunctionFactory;
    // private state_0_: number;
    // private executeAndSpecialize(frameValue: VirtualFrame, arg0Value: Object): JSFunctionObject;
    executeWithPrototype(frameValue: VirtualFrame, arg0Value: Object): JSFunctionObject;
}