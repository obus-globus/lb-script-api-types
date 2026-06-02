import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { ExpectStringNode } from '../../../../../../com/oracle/truffle/regex/runtime/nodes/ExpectStringNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ExpectStringNodeGen$Uncached extends ExpectStringNode implements UnadoptableNode {
    static create(): ExpectStringNode;
    private constructor()
    execute(arg0Value: Object, arg1Value: TruffleString$Encoding): TruffleString;
}