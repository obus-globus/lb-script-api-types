import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$ParseLongNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ParseLongNode.d.ts'
export class TruffleStringFactory$ParseLongNodeGen extends TruffleString$ParseLongNode {
    static create(): TruffleString$ParseLongNode;
    static getUncached(): TruffleString$ParseLongNode;
    private constructor()
    // private fallback_parseLongNode__field1_: Node;
    // private fallback_radixProfile__field1_: number;
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: number): number;
    // private executeAndSpecialize(arg0Value: AbstractTruffleString, arg1Value: number): number;
    // private fallbackGuard_(state_0: number, arg0Value: AbstractTruffleString, arg1Value: number): boolean;
}