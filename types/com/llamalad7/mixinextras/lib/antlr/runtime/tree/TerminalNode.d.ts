import type { Token } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Token.d.ts'
import type { ParseTree } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/tree/ParseTree.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface TerminalNode extends ParseTree, Object{
    getSymbol(): Token;
}