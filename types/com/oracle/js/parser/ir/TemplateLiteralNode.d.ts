import type { Expression } from '../../../../../com/oracle/js/parser/ir/Expression.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class TemplateLiteralNode extends Expression {
    static newTagged(paramtoken: number, paramfinish: number, paramrawStrings: Expression[], paramcookedStrings: Expression[]): TemplateLiteralNode;
    static newUntagged(paramtoken: number, paramfinish: number, paramexpressions: Expression[]): TemplateLiteralNode;
    constructor(literalNode: TemplateLiteralNode)
    constructor(token: number, finish: number)
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends Object | number | string | boolean>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
}