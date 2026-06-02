import type { MaterializedFrame } from '../../../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$SwitchEncodingNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$SwitchEncodingNode.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { EvalNode$DirectEvalNode } from '../../../../../../com/oracle/truffle/js/nodes/function/EvalNode$DirectEvalNode.d.ts'
import type { EvalNodeGen$DirectEvalNodeGen$DirectEvalForeignObject0Data } from '../../../../../../com/oracle/truffle/js/nodes/function/EvalNodeGen$DirectEvalNodeGen$DirectEvalForeignObject0Data.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class EvalNodeGen$DirectEvalNodeGen extends EvalNode$DirectEvalNode {
    static create(paramcontext: JSContext, paramthisNode: JavaScriptNode, paramcurrEnv: Object, paramblockScopeSlot: number): EvalNode$DirectEvalNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext, thisNode: JavaScriptNode, currEnv: Object, blockScopeSlot: number)
    // private directEvalForeignObject0_cache: EvalNodeGen$DirectEvalNodeGen$DirectEvalForeignObject0Data;
    // private directEvalForeignObject1_switchEncoding_: TruffleString$SwitchEncodingNode;
    // private state_0_: number;
    // private directEvalForeignObject1Boundary(state_0: number, frameValue: MaterializedFrame, arg0Value: Object, switchEncoding__: TruffleString$SwitchEncodingNode): Object;
    // private executeAndSpecialize(frameValue: VirtualFrame, arg0Value: Object): Object;
    executeWithSource(frameValue: VirtualFrame, arg0Value: Object): Object;
}