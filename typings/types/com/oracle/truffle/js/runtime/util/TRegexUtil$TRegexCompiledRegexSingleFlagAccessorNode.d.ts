import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class TRegexUtil$TRegexCompiledRegexSingleFlagAccessorNode extends Node {
    constructor()
    execute(node: Node, compiledRegex: Object, flag: string): boolean;
}