import type { JumpStatement } from '../../../../../com/oracle/js/parser/ir/JumpStatement.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ContinueNode extends JumpStatement {
    private constructor(continueNode: ContinueNode)
    constructor(lineNumber: number, token: number, finish: number, labelName: string)
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends Object | number | string | boolean>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    getStatementName(): string;
}