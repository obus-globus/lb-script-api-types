import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$ReadCharUTF16Node } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ReadCharUTF16Node.d.ts'
import type { ToArrayIndexNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/ToArrayIndexNode.d.ts'
import type { ToArrayIndexNodeGen$InteropArrayIndex0Data } from '../../../../../../com/oracle/truffle/js/nodes/cast/ToArrayIndexNodeGen$InteropArrayIndex0Data.d.ts'
import type { ToArrayIndexNodeGen$NonArrayIndex0Data } from '../../../../../../com/oracle/truffle/js/nodes/cast/ToArrayIndexNodeGen$NonArrayIndex0Data.d.ts'
import type { ToArrayIndexNodeGen$NonArrayIndex1Data } from '../../../../../../com/oracle/truffle/js/nodes/cast/ToArrayIndexNodeGen$NonArrayIndex1Data.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ToArrayIndexNodeGen extends ToArrayIndexNode {
    static create(): ToArrayIndexNode;
    static create(paramconvertStringToIndex: boolean): ToArrayIndexNode;
    static createNoStringToIndex(): ToArrayIndexNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(convertStringToIndex: boolean)
    // private convertFromString_stringReadNode_: TruffleString$ReadCharUTF16Node;
    // private interopArrayIndex0_cache: ToArrayIndexNodeGen$InteropArrayIndex0Data;
    // private nonArrayIndex0_cache: ToArrayIndexNodeGen$NonArrayIndex0Data;
    // private nonArrayIndex1_cache: ToArrayIndexNodeGen$NonArrayIndex1Data;
    // private state_0_: number;
    execute(arg0Value: Object): Object;
    // private executeAndSpecialize(arg0Value: Object): Object;
    executeLong(arg0Value: Object): number;
    // private interopArrayIndex1Boundary(state_0: number, arg0Value: Object): Object;
    // private interopArrayIndex1Boundary0(state_0: number, arg0Value: Object): number;
    // private nonArrayIndex1Boundary(state_0: number, s11_: ToArrayIndexNodeGen$NonArrayIndex1Data, arg0Value: Object): Object;
}