import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RegexObject } from '../../../../com/oracle/truffle/regex/RegexObject.d.ts'
import type { RegexObject$ExecBooleanCompiledRegexNode } from '../../../../com/oracle/truffle/regex/RegexObject$ExecBooleanCompiledRegexNode.d.ts'
import type { RegexObject$ExecCompiledRegexNode } from '../../../../com/oracle/truffle/regex/RegexObject$ExecCompiledRegexNode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class RegexObject$InvokeCacheNode extends Node {
    constructor()
    execBooleanEquals(symbol: string, receiver: RegexObject, args: Object[], cachedSymbol: string, execBoolNode: RegexObject$ExecBooleanCompiledRegexNode): boolean;
    execBooleanIdentity(symbol: string, receiver: RegexObject, args: Object[], cachedSymbol: string, execBoolNode: RegexObject$ExecBooleanCompiledRegexNode): boolean;
    execEquals(symbol: string, receiver: RegexObject, args: Object[], cachedSymbol: string, execNode: RegexObject$ExecCompiledRegexNode): Object;
    execIdentity(symbol: string, receiver: RegexObject, args: Object[], cachedSymbol: string, execNode: RegexObject$ExecCompiledRegexNode): Object;
    execute(symbol: string, receiver: RegexObject, args: Object[]): Object;
}