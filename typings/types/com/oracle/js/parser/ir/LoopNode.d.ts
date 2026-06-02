import type { Block } from '../../../../../com/oracle/js/parser/ir/Block.d.ts'
import type { BreakableStatement } from '../../../../../com/oracle/js/parser/ir/BreakableStatement.d.ts'
import type { JoinPredecessorExpression } from '../../../../../com/oracle/js/parser/ir/JoinPredecessorExpression.d.ts'
import type { LexicalContext } from '../../../../../com/oracle/js/parser/ir/LexicalContext.d.ts'
export abstract class LoopNode extends BreakableStatement {
    constructor(loopNode: LoopNode, test: JoinPredecessorExpression, body: Block, controlFlowEscapes: boolean)
    constructor(lineNumber: number, token: number, finish: number, body: Block, test: JoinPredecessorExpression, controlFlowEscapes: boolean)
    readonly body: Block;
    // private controlFlowEscapes: boolean;
    readonly test: JoinPredecessorExpression;
    getBody(): Block;
    getTest(): JoinPredecessorExpression;
    hasPerIterationScope(): boolean;
    isCompletionValueNeverEmpty(): boolean;
    isLoop(): boolean;
    isTerminal(): boolean;
    mustEnter(): boolean;
    setBody(lc: LexicalContext, body: Block): LoopNode;
    setControlFlowEscapes(lc: LexicalContext, controlFlowEscapes: boolean): LoopNode;
    setTest(lc: LexicalContext, test: JoinPredecessorExpression): LoopNode;
}