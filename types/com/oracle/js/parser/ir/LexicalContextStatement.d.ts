import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { LexicalContextNode } from '../../../../../com/oracle/js/parser/ir/LexicalContextNode.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { Statement } from '../../../../../com/oracle/js/parser/ir/Statement.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class LexicalContextStatement extends Statement implements LexicalContextNode {
    constructor(node: LexicalContextStatement)
    constructor(lineNumber: number, token: number, finish: number)
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends Object | number | string | boolean>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends Object | number | string | boolean>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
}