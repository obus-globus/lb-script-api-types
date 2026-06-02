import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$FromJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$FromJavaStringNode.d.ts'
import type { TruffleString$FromLongNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$FromLongNode.d.ts'
import type { JSDoubleToStringNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSDoubleToStringNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSDoubleToStringNodeGen extends JSDoubleToStringNode {
    static create(): JSDoubleToStringNode;
    static getUncached(): JSDoubleToStringNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private double_fromJavaStringNode_: TruffleString$FromJavaStringNode;
    // private fromLongNode: TruffleString$FromLongNode;
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: Object): TruffleString;
    executeString(arg0Value: Object): TruffleString;
    executeString(arg0Value: number): TruffleString;
    executeString(arg0Value: number): TruffleString;
}