import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { ToWebAssemblyValueNode } from '../../../../../../com/oracle/truffle/js/nodes/wasm/ToWebAssemblyValueNode.d.ts'
import type { WebAssemblyValueType } from '../../../../../../com/oracle/truffle/js/runtime/builtins/wasm/WebAssemblyValueType.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ToWebAssemblyValueNodeGen$Uncached extends ToWebAssemblyValueNode implements UnadoptableNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    execute(arg0Value: Object, arg1Value: WebAssemblyValueType): Object;
}