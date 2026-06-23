import type { Expression } from '../../../../../com/oracle/js/parser/ir/Expression.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { Statement } from '../../../../../com/oracle/js/parser/ir/Statement.d.ts'
import type { Terminal } from '../../../../../com/oracle/js/parser/ir/Terminal.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CaseNode extends Node implements Terminal {
    constructor(caseNode: CaseNode, finish: number, test: Expression, statements: Statement[])
    constructor(token: number, finish: number, test: Expression, statements: Statement[])
    readonly statements: Statement[];
    readonly terminal: boolean;
    readonly test: Expression;
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends unknown>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    getStatements(): Statement[];
    getTest(): Expression;
    isTerminal(): boolean;
    setStatements(statements: Statement[]): CaseNode;
    setTest(test: Expression): CaseNode;
    toString(): string;
    toString(sb: StringBuilder, printTypes: boolean): void;
    toString(includeTypeInfo: boolean): string;
}