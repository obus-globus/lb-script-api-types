import type { ParseTree } from '../../../../../org/antlr/v4/runtime/tree/ParseTree.d.ts'
import type { ParseTreeListener } from '../../../../../org/antlr/v4/runtime/tree/ParseTreeListener.d.ts'
import type { ParseTreeWalker } from '../../../../../org/antlr/v4/runtime/tree/ParseTreeWalker.d.ts'
export class IterativeParseTreeWalker extends ParseTreeWalker {
    static DEFAULT: ParseTreeWalker;
    constructor()
    walk(arg0: ParseTreeListener, arg1: ParseTree): void;
}