import type { ParserContextNode } from '../../../../com/oracle/js/parser/ParserContextNode.d.ts'
import type { Scope } from '../../../../com/oracle/js/parser/ir/Scope.d.ts'
import type { Statement } from '../../../../com/oracle/js/parser/ir/Statement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ParserContextScopableNode extends ParserContextNode, Object{
    appendStatement(statement: Statement): void;
    getFlag(flag: number): number;
    getFlags(): number;
    getScope(): Scope;
    prependStatement(statement: Statement): void;
    setFlag(flag: number): number;
}