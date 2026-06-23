import type { Expression } from '../../../../../com/oracle/js/parser/ir/Expression.d.ts'
import type { JoinPredecessorExpression } from '../../../../../com/oracle/js/parser/ir/JoinPredecessorExpression.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TernaryNode extends Expression {
    private constructor(ternaryNode: TernaryNode, test: Expression, trueExpr: JoinPredecessorExpression, falseExpr: JoinPredecessorExpression)
    constructor(token: number, test: Expression, trueExpr: JoinPredecessorExpression, falseExpr: JoinPredecessorExpression)
    // private falseExpr: JoinPredecessorExpression;
    readonly test: Expression;
    // private trueExpr: JoinPredecessorExpression;
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends unknown>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    getFalseExpression(): JoinPredecessorExpression;
    getTest(): Expression;
    getTrueExpression(): JoinPredecessorExpression;
    setFalseExpression(falseExpr: JoinPredecessorExpression): TernaryNode;
    setTest(test: Expression): TernaryNode;
    setTrueExpression(trueExpr: JoinPredecessorExpression): TernaryNode;
    toString(): string;
    toString(sb: StringBuilder, printType: boolean): void;
    toString(includeTypeInfo: boolean): string;
}