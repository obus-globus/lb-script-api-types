import type { Node } from '../../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Encodings$Encoding } from '../../../../../../../com/oracle/truffle/regex/tregex/string/Encodings$Encoding.d.ts'
export abstract class InputReadNode extends Node {
    static create(): InputReadNode;
    constructor()
    execute(node: Node, input: TruffleString, index: number, encoding: Encodings$Encoding): number;
}