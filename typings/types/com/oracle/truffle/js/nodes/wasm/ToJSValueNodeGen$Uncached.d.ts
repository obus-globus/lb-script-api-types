import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { ToJSValueNode } from '../../../../../../com/oracle/truffle/js/nodes/wasm/ToJSValueNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ToJSValueNodeGen$Uncached extends ToJSValueNode implements UnadoptableNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    execute(arg0Value: Object): Object;
}