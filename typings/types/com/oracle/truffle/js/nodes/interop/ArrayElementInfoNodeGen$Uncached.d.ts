import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { TriState } from '../../../../../../com/oracle/truffle/api/utilities/TriState.d.ts'
import type { ArrayElementInfoNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ArrayElementInfoNode.d.ts'
import type { JSArrayBase } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBase.d.ts'
export class ArrayElementInfoNodeGen$Uncached extends ArrayElementInfoNode implements UnadoptableNode {
    static INSERTABLE: number;
    static MODIFIABLE: number;
    static READABLE: number;
    static REMOVABLE: number;
    static WRITABLE: number;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    execute(arg0Value: JSArrayBase, arg1Value: number, arg2Value: number): TriState;
}