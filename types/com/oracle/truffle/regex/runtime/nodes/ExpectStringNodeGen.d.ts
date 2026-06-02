import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$FromJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$FromJavaStringNode.d.ts'
import type { ExpectStringNode } from '../../../../../../com/oracle/truffle/regex/runtime/nodes/ExpectStringNode.d.ts'
import type { ExpectStringNodeGen$BoxedString0Data } from '../../../../../../com/oracle/truffle/regex/runtime/nodes/ExpectStringNodeGen$BoxedString0Data.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ExpectStringNodeGen extends ExpectStringNode {
    static create(): ExpectStringNode;
    static getUncached(): ExpectStringNode;
    private constructor()
    // private boxedString0_cache: ExpectStringNodeGen$BoxedString0Data;
    // private state_0_: number;
    // private string_fromJavaStringNode_: TruffleString$FromJavaStringNode;
    // private boxedString1Boundary(state_0: number, arg0Value: Object, arg1Value: TruffleString$Encoding): TruffleString;
    execute(arg0Value: Object, arg1Value: TruffleString$Encoding): TruffleString;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: TruffleString$Encoding): TruffleString;
}