import type { RecognitionException } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/RecognitionException.d.ts'
import type { RuleContext } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/RuleContext.d.ts'
import type { Token } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Token.d.ts'
import type { ErrorNode } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/tree/ErrorNode.d.ts'
import type { ParseTree } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/tree/ParseTree.d.ts'
import type { ParseTreeListener } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/tree/ParseTreeListener.d.ts'
import type { TerminalNode } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/tree/TerminalNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
export class ParserRuleContext extends RuleContext {
    static EMPTY: ParserRuleContext;
    constructor()
    constructor(arg0: ParserRuleContext, arg1: number)
    children: ParseTree[];
    exception: RecognitionException;
    start: Token;
    stop: Token;
    addAnyChild<T extends ParseTree>(arg0: T): T;
    addChild(arg0: RuleContext): RuleContext;
    addChild(arg0: TerminalNode): TerminalNode;
    addErrorNode(arg0: ErrorNode): ErrorNode;
    copyFrom(arg0: ParserRuleContext): void;
    enterRule(arg0: ParseTreeListener): void;
    exitRule(arg0: ParseTreeListener): void;
    getChild<T extends ParseTree>(arg0: Class<T>, arg1: number): T;
    getChild(arg0: number): ParseTree;
    getChildCount(): number;
    getRuleContext<T extends ParserRuleContext>(arg0: Class<T>, arg1: number): T;
    getRuleContexts<T extends ParserRuleContext>(arg0: Class<T>): T[];
    removeLastChild(): void;
}