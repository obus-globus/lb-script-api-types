import type { ParserContextNode } from '../../../../com/oracle/js/parser/ParserContextNode.d.ts'
import type { Statement } from '../../../../com/oracle/js/parser/ir/Statement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ParserContextBaseNode extends Object implements ParserContextNode {
    constructor()
    constructor(flags: number)
    flags: number;
    readonly statements: Statement[];
    appendStatement(statement: Statement): void;
    clearFlag(flag: number): number;
    getFlag(flag: number): number;
    getFlags(): number;
    getStatements(): Statement[];
    prependStatement(statement: Statement): void;
    setFlag(flag: number): number;
    setStatements(statements: Statement[]): void;
}