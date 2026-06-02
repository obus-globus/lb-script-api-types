import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { AbstractFunctionArgumentsNode } from '../../../../../../com/oracle/truffle/js/nodes/function/AbstractFunctionArgumentsNode.d.ts'
import type { SpreadFunctionArgumentsNode } from '../../../../../../com/oracle/truffle/js/nodes/function/SpreadFunctionArgumentsNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SpreadFunctionArgumentsNodeGen extends SpreadFunctionArgumentsNode {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramcontext: JSContext, paramargs: (Object | null)[]): AbstractFunctionArgumentsNode;
    static create(paramargs: (Object | null)[]): SpreadFunctionArgumentsNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(args: JavaScriptNode[])
    // private state_0_: number;
    executeFillObjectArray(frameValue: VirtualFrame, arg0Value: Object[], arg1Value: number): Object[];
}