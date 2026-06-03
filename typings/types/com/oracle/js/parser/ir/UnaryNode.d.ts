import type { Assignment } from '../../../../../com/oracle/js/parser/ir/Assignment.d.ts'
import type { Expression } from '../../../../../com/oracle/js/parser/ir/Expression.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UnaryNode extends Expression implements Assignment<Expression> {
    private constructor(unaryNode: UnaryNode, expression: Expression)
    constructor(token: number, rhs: Expression)
    constructor(token: number, start: number, finish: number, expression: Expression)
    readonly expression: Expression;
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends Object | number | string | boolean>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    getAssignmentDest(): Expression;
    getAssignmentSource(): Expression;
    getExpression(): Expression;
    isAssignment(): boolean;
    isSelfModifying(): boolean;
    setExpression(expression: Expression): UnaryNode;
    toString(): string;
    toString(sb: StringBuilder, printType: boolean): void;
    toString(includeTypeInfo: boolean): string;
}