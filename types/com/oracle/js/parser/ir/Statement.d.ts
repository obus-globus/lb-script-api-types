import type { Node } from '../../../../../com/oracle/js/parser/ir/Node.d.ts'
import type { Terminal } from '../../../../../com/oracle/js/parser/ir/Terminal.d.ts'
export abstract class Statement extends Node implements Terminal {
    constructor(node: Statement)
    constructor(lineNumber: number, token: number, finish: number)
    constructor(lineNumber: number, token: number, start: number, finish: number)
    readonly lineNumber: number;
    getLineNumber(): number;
    hasGoto(): boolean;
    hasTerminalFlags(): boolean;
    isCompletionValueNeverEmpty(): boolean;
    isTerminal(): boolean;
}