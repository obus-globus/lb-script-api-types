import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParserRuleContext } from '../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
import type { ErrorNode } from '../../../../org/antlr/v4/runtime/tree/ErrorNode.d.ts'
import type { ParseTreeListener } from '../../../../org/antlr/v4/runtime/tree/ParseTreeListener.d.ts'
import type { TerminalNode } from '../../../../org/antlr/v4/runtime/tree/TerminalNode.d.ts'
export class Parser$TraceListener extends Object implements ParseTreeListener {
    constructor(null_: Parser$TraceListener)
    enterEveryRule(arg0: ParserRuleContext): void;
    exitEveryRule(arg0: ParserRuleContext): void;
    visitErrorNode(arg0: ErrorNode): void;
    visitTerminal(arg0: TerminalNode): void;
}