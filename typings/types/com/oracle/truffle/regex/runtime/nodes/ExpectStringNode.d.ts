import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ExpectStringNode extends Node {
    static create(): ExpectStringNode;
    constructor()
    execute(arg: Object, encoding: TruffleString$Encoding): TruffleString;
}