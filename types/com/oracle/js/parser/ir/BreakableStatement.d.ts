import type { BreakableNode } from '../../../../../com/oracle/js/parser/ir/BreakableNode.d.ts'
import type { LexicalContextStatement } from '../../../../../com/oracle/js/parser/ir/LexicalContextStatement.d.ts'
export abstract class BreakableStatement extends LexicalContextStatement implements BreakableNode {
    constructor(breakableNode: BreakableStatement)
    constructor(lineNumber: number, token: number, finish: number)
    isBreakableWithoutLabel(): boolean;
}