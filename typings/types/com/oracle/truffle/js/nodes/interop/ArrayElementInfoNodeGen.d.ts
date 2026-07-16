import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TriState } from '../../../../../../com/oracle/truffle/api/utilities/TriState.d.ts'
import type { ArrayElementInfoNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ArrayElementInfoNode.d.ts'
import type { ArrayElementInfoNodeGen$CachedData } from '../../../../../../com/oracle/truffle/js/nodes/interop/ArrayElementInfoNodeGen$CachedData.d.ts'
import type { JSArrayBase } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBase.d.ts'
export class ArrayElementInfoNodeGen extends ArrayElementInfoNode {
    static INSERTABLE: number;
    static MODIFIABLE: number;
    static READABLE: number;
    static REMOVABLE: number;
    static WRITABLE: number;
    static create(): ArrayElementInfoNode;
    static getUncached(): ArrayElementInfoNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private cached_cache: ArrayElementInfoNodeGen$CachedData;
    // private state_0_: number;
    execute(arg0Value: JSArrayBase, arg1Value: number, arg2Value: number): TriState;
    // private executeAndSpecialize(arg0Value: JSArrayBase, arg1Value: number, arg2Value: number): TriState;
}