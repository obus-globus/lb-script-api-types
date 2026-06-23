import type { Block } from '../../../../../com/oracle/js/parser/ir/Block.d.ts'
import type { JoinPredecessorExpression } from '../../../../../com/oracle/js/parser/ir/JoinPredecessorExpression.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { LoopNode } from '../../../../../com/oracle/js/parser/ir/LoopNode.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WhileNode extends LoopNode {
    private constructor(whileNode: WhileNode, test: JoinPredecessorExpression, body: Block, controlFlowEscapes: boolean)
    constructor(lineNumber: number, token: number, finish: number, isDoWhile: boolean, test: JoinPredecessorExpression, body: Block)
    // private isDoWhile: boolean;
    accept(lc: LexicalContext, visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends unknown>(lc: LexicalContext, visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends unknown>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    getBody(): Block;
    hasGoto(): boolean;
    hasPerIterationScope(): boolean;
    isDoWhile(): boolean;
    mustEnter(): boolean;
    setBody(lc: LexicalContext, body: Block): WhileNode;
    setControlFlowEscapes(lc: LexicalContext, controlFlowEscapes: boolean): WhileNode;
    setTest(lc: LexicalContext, test: JoinPredecessorExpression): WhileNode;
    toString(): string;
    toString(sb: StringBuilder, printType: boolean): void;
    toString(includeTypeInfo: boolean): string;
}