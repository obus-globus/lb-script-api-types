import type { Statement } from '../../../../com/oracle/js/parser/ir/Statement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ParserContextNode extends Object{
    appendStatement(statement: Statement): void;
    getFlag(flag: number): number;
    getFlags(): number;
    getStatements(): Statement[];
    prependStatement(statement: Statement): void;
    setFlag(flag: number): number;
    setStatements(statements: Statement[]): void;
}