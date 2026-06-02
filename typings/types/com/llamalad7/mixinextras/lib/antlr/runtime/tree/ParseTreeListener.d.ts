import type { ParserRuleContext } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/ParserRuleContext.d.ts'
import type { ErrorNode } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/tree/ErrorNode.d.ts'
import type { TerminalNode } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/tree/TerminalNode.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface ParseTreeListener extends Object{
    enterEveryRule(arg0: ParserRuleContext): void;
    exitEveryRule(arg0: ParserRuleContext): void;
    visitErrorNode(arg0: ErrorNode): void;
    visitTerminal(arg0: TerminalNode): void;
}