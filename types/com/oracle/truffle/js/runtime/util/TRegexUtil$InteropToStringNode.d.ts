import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class TRegexUtil$InteropToStringNode extends Node {
    constructor()
    execute(node: Node, obj: Object): TruffleString;
}