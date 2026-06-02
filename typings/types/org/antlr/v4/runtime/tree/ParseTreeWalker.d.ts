import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ParseTree } from '../../../../../org/antlr/v4/runtime/tree/ParseTree.d.ts'
import type { ParseTreeListener } from '../../../../../org/antlr/v4/runtime/tree/ParseTreeListener.d.ts'
import type { RuleNode } from '../../../../../org/antlr/v4/runtime/tree/RuleNode.d.ts'
export class ParseTreeWalker extends Object {
    static DEFAULT: ParseTreeWalker;
    constructor()
    enterRule(arg0: ParseTreeListener, arg1: RuleNode): void;
    exitRule(arg0: ParseTreeListener, arg1: RuleNode): void;
    walk(arg0: ParseTreeListener, arg1: ParseTree): void;
}