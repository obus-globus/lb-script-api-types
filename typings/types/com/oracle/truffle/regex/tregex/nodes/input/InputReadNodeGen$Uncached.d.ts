import type { Node } from '../../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { TruffleString } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { InputReadNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/input/InputReadNode.d.ts'
import type { Encodings$Encoding } from '../../../../../../../com/oracle/truffle/regex/tregex/string/Encodings$Encoding.d.ts'
export class InputReadNodeGen$Uncached extends InputReadNode implements UnadoptableNode {
    static create(): InputReadNode;
    private constructor()
    execute(arg0Value: Node, arg1Value: TruffleString, arg2Value: number, arg3Value: Encodings$Encoding): number;
}