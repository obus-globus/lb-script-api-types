import type { CallTarget } from '../../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RegexResult } from '../../../../../../com/oracle/truffle/regex/result/RegexResult.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class DispatchNode extends Node {
    constructor()
    execute(node: Node, receiver: CallTarget, result: RegexResult): Object;
}