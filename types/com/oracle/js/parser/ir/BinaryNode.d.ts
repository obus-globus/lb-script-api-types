import type { TokenType } from '../../../../../com/oracle/js/parser/TokenType.d.ts'
import type { Assignment } from '../../../../../com/oracle/js/parser/ir/Assignment.d.ts'
import type { Expression } from '../../../../../com/oracle/js/parser/ir/Expression.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BinaryNode extends Expression implements Assignment<Expression> {
    static isLogical(paramtokenType: TokenType): boolean;
    private constructor(binaryNode: BinaryNode, lhs: Expression, rhs: Expression)
    constructor(token: number, lhs: Expression, rhs: Expression)
    readonly lhs: Expression;
    readonly rhs: Expression;
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends Object | number | string | boolean>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    getAssignmentDest(): Expression;
    getAssignmentSource(): Expression;
    getLhs(): Expression;
    getRhs(): Expression;
    isAlwaysFalse(): boolean;
    isAlwaysTrue(): boolean;
    isAssignment(): boolean;
    isComparison(): boolean;
    isLogical(): boolean;
    isRelational(): boolean;
    isSelfModifying(): boolean;
    setLHS(lhs: Expression): BinaryNode;
    setRHS(rhs: Expression): BinaryNode;
    toString(sb: StringBuilder, printType: boolean): void;
}