import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Token } from '../../../../../org/antlr/v4/runtime/Token.d.ts'
import type { ParseTree } from '../../../../../org/antlr/v4/runtime/tree/ParseTree.d.ts'
export interface TerminalNode extends Object, ParseTree{
    getSymbol(): Token;
}