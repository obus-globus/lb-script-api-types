import type { Block } from '../../../../../com/oracle/js/parser/ir/Block.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { LexicalContextStatement } from '../../../../../com/oracle/js/parser/ir/LexicalContextStatement.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LabelNode extends LexicalContextStatement {
    private constructor(labelNode: LabelNode, labelName: string, body: Block)
    constructor(lineNumber: number, token: number, finish: number, labelName: string, body: Block)
    readonly body: Block;
    readonly labelName: string;
    accept(lc: LexicalContext, visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends Object | number | string | boolean>(lc: LexicalContext, visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends Object | number | string | boolean>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    getBody(): Block;
    getLabelName(): string;
    isTerminal(): boolean;
    setBody(lc: LexicalContext, body: Block): LabelNode;
    toString(): string;
    toString(sb: StringBuilder, printType: boolean): void;
    toString(includeTypeInfo: boolean): string;
}