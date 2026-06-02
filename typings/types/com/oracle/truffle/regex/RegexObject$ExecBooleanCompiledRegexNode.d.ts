import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RegexObject } from '../../../../com/oracle/truffle/regex/RegexObject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class RegexObject$ExecBooleanCompiledRegexNode extends Node {
    constructor()
    execute(receiver: RegexObject, args: Object[]): Object;
}