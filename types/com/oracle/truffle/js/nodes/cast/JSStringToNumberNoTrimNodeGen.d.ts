import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$ReadCharUTF16Node } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ReadCharUTF16Node.d.ts'
import type { TruffleString$RegionEqualByteIndexNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$RegionEqualByteIndexNode.d.ts'
import type { JSStringToNumberNoTrimNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSStringToNumberNoTrimNode.d.ts'
export class JSStringToNumberNoTrimNodeGen extends JSStringToNumberNoTrimNode {
    static create(): JSStringToNumberNoTrimNode;
    static getUncached(): JSStringToNumberNoTrimNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private infinity_regionEqualsNode_: TruffleString$RegionEqualByteIndexNode;
    // private readChar: TruffleString$ReadCharUTF16Node;
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: TruffleString): number;
    executeNoTrim(arg0Value: TruffleString): number;
}