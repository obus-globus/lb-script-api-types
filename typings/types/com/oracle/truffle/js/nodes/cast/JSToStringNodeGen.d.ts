import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$FromJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$FromJavaStringNode.d.ts'
import type { JSDoubleToStringNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSDoubleToStringNode.d.ts'
import type { JSToPrimitiveNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNode.d.ts'
import type { JSToStringNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSToStringNodeGen extends JSToStringNode {
    static create(): JSToStringNode;
    static create(paramundefinedToEmpty: boolean, paramsymbolToString: boolean): JSToStringNode;
    static createSymbolToString(): JSToStringNode;
    static createUndefinedToEmpty(): JSToStringNode;
    static getUncached(): JSToStringNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    private constructor(undefinedToEmpty: boolean, symbolToString: boolean)
    // private bigInt_fromJavaString_: TruffleString$FromJavaStringNode;
    // private doubleToStringNode: JSDoubleToStringNode;
    // private state_0_: number;
    // private toPrimitiveHintStringNode: JSToPrimitiveNode;
    // private toStringNode: JSToStringNode;
    // private executeAndSpecialize(arg0Value: Object): TruffleString;
    executeString(arg0Value: Object): TruffleString;
}