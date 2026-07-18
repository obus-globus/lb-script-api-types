import type { Block } from '../../../../../com/oracle/js/parser/ir/Block.d.ts'
import type { Expression } from '../../../../../com/oracle/js/parser/ir/Expression.d.ts'
import type { JoinPredecessorExpression } from '../../../../../com/oracle/js/parser/ir/JoinPredecessorExpression.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
import type { LoopNode } from '../../../../../com/oracle/js/parser/ir/LoopNode.d.ts'
import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { Symbol } from '../../../../../com/oracle/js/parser/ir/Symbol.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/NodeVisitor.d.ts'
import type { TranslatorNodeVisitor } from '../../../../../com/oracle/js/parser/ir/visitor/TranslatorNodeVisitor.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ForNode extends LoopNode {
    static IS_FOR_AWAIT_OF: number;
    static IS_FOR_EACH: number;
    static IS_FOR_IN: number;
    static IS_FOR_OF: number;
    static PER_ITERATION_SCOPE: number;
    constructor(lineNumber: number, token: number, finish: number, body: Block, flags: number, init: Expression, test: JoinPredecessorExpression, modify: JoinPredecessorExpression)
    // private flags: number;
    readonly init: Expression;
    readonly iterator: Symbol;
    readonly modify: JoinPredecessorExpression;
    accept(lc: LexicalContext, visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends unknown>(lc: LexicalContext, visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    accept(visitor: NodeVisitor<LexicalContext>): Node;
    accept<R extends unknown>(visitor: TranslatorNodeVisitor<LexicalContext, R>): R;
    getBody(): Block;
    getInit(): Expression;
    getIterator(): Symbol;
    getModify(): JoinPredecessorExpression;
    hasGoto(): boolean;
    hasPerIterationScope(): boolean;
    isForAwaitOf(): boolean;
    isForEach(): boolean;
    isForIn(): boolean;
    isForInOrOf(): boolean;
    isForOf(): boolean;
    mustEnter(): boolean;
    setBody(lc: LexicalContext, body: Block): ForNode;
    setControlFlowEscapes(lc: LexicalContext, controlFlowEscapes: boolean): ForNode;
    setInit(lc: LexicalContext, init: Expression): ForNode;
    setIterator(iterator: Symbol): void;
    setModify(lc: LexicalContext, modify: JoinPredecessorExpression): ForNode;
    setTest(lc: LexicalContext, test: JoinPredecessorExpression): ForNode;
    toString(): string;
    toString(sb: StringBuilder, printTypes: boolean): void;
    toString(includeTypeInfo: boolean): string;
}