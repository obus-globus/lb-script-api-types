import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Parser } from '../../../../org/antlr/v4/runtime/Parser.d.ts'
import type { RecognitionException } from '../../../../org/antlr/v4/runtime/RecognitionException.d.ts'
import type { RuleContext } from '../../../../org/antlr/v4/runtime/RuleContext.d.ts'
import type { Token } from '../../../../org/antlr/v4/runtime/Token.d.ts'
import type { Interval } from '../../../../org/antlr/v4/runtime/misc/Interval.d.ts'
import type { ErrorNode } from '../../../../org/antlr/v4/runtime/tree/ErrorNode.d.ts'
import type { ParseTree } from '../../../../org/antlr/v4/runtime/tree/ParseTree.d.ts'
import type { ParseTreeListener } from '../../../../org/antlr/v4/runtime/tree/ParseTreeListener.d.ts'
import type { TerminalNode } from '../../../../org/antlr/v4/runtime/tree/TerminalNode.d.ts'
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
    addChild(arg0: Token): TerminalNode;
    addChild(arg0: TerminalNode): TerminalNode;
    addErrorNode(arg0: Token): ErrorNode;
    addErrorNode(arg0: ErrorNode): ErrorNode;
    copyFrom(arg0: ParserRuleContext): void;
    enterRule(arg0: ParseTreeListener): void;
    exitRule(arg0: ParseTreeListener): void;
    getChild<T extends ParseTree>(arg0: Class<T>, arg1: number): T;
    getChild(arg0: number): ParseTree;
    getChildCount(): number;
    getParent(): ParserRuleContext;
    getRuleContext(): RuleContext;
    getRuleContext<T extends ParserRuleContext>(arg0: Class<T>, arg1: number): T;
    getRuleContexts(arg0: Class<T>): T[];
    getSourceInterval(): Interval;
    getStart(): Token;
    getStop(): Token;
    getToken(arg0: number, arg1: number): TerminalNode;
    getTokens(arg0: number): TerminalNode[];
    removeLastChild(): void;
    toInfoString(arg0: Parser): string;
}