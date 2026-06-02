import type { Statement } from '../../../../../com/oracle/js/parser/ir/Statement.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
export abstract class JumpStatement extends Statement {
    constructor(jumpStatement: JumpStatement)
    constructor(lineNumber: number, token: number, finish: number, labelName: string)
    readonly labelName: string;
    getLabelName(): string;
    getStatementName(): string;
    hasGoto(): boolean;
    toString(sb: StringBuilder, printType: boolean): void;
}