import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSFunctionCallNode$ForeignCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode$ForeignCallNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSFunctionCallNode$ForeignInstantiateNode extends JSFunctionCallNode$ForeignCallNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(skip: number, expectedArgumentCount: number)
    // private interop: InteropLibrary;
    // private skip: number;
    executeCall(arguments: Object[]): Object;
}