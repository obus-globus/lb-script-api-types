import type { Block } from '../../../../../com/oracle/js/parser/ir/Block.d.ts'
import type { Expression } from '../../../../../com/oracle/js/parser/ir/Expression.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { LexicalContextStatement } from '../../../../../com/oracle/js/parser/ir/LexicalContextStatement.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WithNode extends LexicalContextStatement {
    private constructor(node: WithNode, expression: Expression, body: Block)
    constructor(lineNumber: number, token: number, finish: number, expression: Expression, body: Block)
    readonly body: Block;
    readonly expression: Expression;
    accept(lc: LexicalContext, visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends Object | number | string | boolean>(lc: LexicalContext, visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    getBody(): Block;
    getExpression(): Expression;
    isCompletionValueNeverEmpty(): boolean;
    isTerminal(): boolean;
    setBody(lc: LexicalContext, body: Block): WithNode;
    setExpression(lc: LexicalContext, expression: Expression): WithNode;
    toString(sb: StringBuilder, printType: boolean): void;
}