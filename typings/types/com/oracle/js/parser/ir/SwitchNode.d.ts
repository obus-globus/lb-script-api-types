import type { BreakableStatement } from '../../../../../com/oracle/js/parser/ir/BreakableStatement.d.ts'
import type { CaseNode } from '../../../../../com/oracle/js/parser/ir/CaseNode.d.ts'
import type { Expression } from '../../../../../com/oracle/js/parser/ir/Expression.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { Symbol } from '../../../../../com/oracle/js/parser/ir/Symbol.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SwitchNode extends BreakableStatement {
    constructor(lineNumber: number, token: number, finish: number, expression: Expression, cases: CaseNode[], defaultCaseIndex: number)
    readonly cases: CaseNode[];
    // private defaultCaseIndex: number;
    readonly expression: Expression;
    readonly tag: Symbol;
    accept(lc: LexicalContext, visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends unknown>(lc: LexicalContext, visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends unknown>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    getCases(): CaseNode[];
    getDefaultCase(): CaseNode;
    getExpression(): Expression;
    getTag(): Symbol;
    hasDefaultCase(): boolean;
    isCompletionValueNeverEmpty(): boolean;
    isTerminal(): boolean;
    // private setCases(lc: LexicalContext, cases: CaseNode[], defaultCaseIndex: number): SwitchNode;
    setExpression(lc: LexicalContext, expression: Expression): SwitchNode;
    setTag(tag: Symbol): void;
    toString(): string;
    toString(sb: StringBuilder, printType: boolean): void;
    toString(includeTypeInfo: boolean): string;
}