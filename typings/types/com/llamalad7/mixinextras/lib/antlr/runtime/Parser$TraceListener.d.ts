import type { Parser } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Parser.d.ts'
import type { ParserRuleContext } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/ParserRuleContext.d.ts'
import type { ErrorNode } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/tree/ErrorNode.d.ts'
import type { ParseTreeListener } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/tree/ParseTreeListener.d.ts'
import type { TerminalNode } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/tree/TerminalNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Parser$TraceListener extends Object implements ParseTreeListener {
    constructor(null_: Parser)
    enterEveryRule(arg0: ParserRuleContext): void;
    exitEveryRule(arg0: ParserRuleContext): void;
    visitErrorNode(arg0: ErrorNode): void;
    visitTerminal(arg0: TerminalNode): void;
}