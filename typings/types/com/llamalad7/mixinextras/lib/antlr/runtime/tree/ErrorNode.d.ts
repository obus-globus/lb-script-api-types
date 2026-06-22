import type { RuleContext } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/RuleContext.d.ts'
import type { Token } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Token.d.ts'
import type { TerminalNode } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/tree/TerminalNode.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface ErrorNode extends TerminalNode, Object{
    getSymbol(): Token;
    getText(): string;
    setParent(arg0: RuleContext): void;
}