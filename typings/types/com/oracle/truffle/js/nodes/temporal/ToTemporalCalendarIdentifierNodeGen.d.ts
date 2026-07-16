import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$FromJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$FromJavaStringNode.d.ts'
import type { TruffleString$ToJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ToJavaStringNode.d.ts'
import type { ToTemporalCalendarIdentifierNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/ToTemporalCalendarIdentifierNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ToTemporalCalendarIdentifierNodeGen extends ToTemporalCalendarIdentifierNode {
    static create(): ToTemporalCalendarIdentifierNode;
    static getUncached(): ToTemporalCalendarIdentifierNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private state_0_: number;
    // private string_fromJavaString_: TruffleString$FromJavaStringNode;
    // private string_toJavaString_: TruffleString$ToJavaStringNode;
    // private executeAndSpecialize(arg0Value: Object): TruffleString;
    executeString(arg0Value: Object): TruffleString;
}