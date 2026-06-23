import type { ANTLRErrorStrategy } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/ANTLRErrorStrategy.d.ts'
import type { IntStream } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/IntStream.d.ts'
import type { Parser$TraceListener } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Parser$TraceListener.d.ts'
import type { ParserRuleContext } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/ParserRuleContext.d.ts'
import type { RecognitionException } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/RecognitionException.d.ts'
import type { Recognizer } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Recognizer.d.ts'
import type { RuleContext } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/RuleContext.d.ts'
import type { Token } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Token.d.ts'
import type { TokenFactory } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/TokenFactory.d.ts'
import type { TokenStream } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/TokenStream.d.ts'
import type { ParserATNSimulator } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ParserATNSimulator.d.ts'
import type { IntegerStack } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/misc/IntegerStack.d.ts'
import type { IntervalSet } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/misc/IntervalSet.d.ts'
import type { ErrorNode } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/tree/ErrorNode.d.ts'
import type { ParseTreeListener } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/tree/ParseTreeListener.d.ts'
import type { TerminalNode } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/tree/TerminalNode.d.ts'
export abstract class Parser extends Recognizer<Token, ParserATNSimulator> {
    constructor(arg0: TokenStream)
    // private _buildParseTrees: boolean;
    // private _ctx: ParserRuleContext;
    // private _errHandler: ANTLRErrorStrategy;
    // private _input: TokenStream;
    // private _parseListeners: ParseTreeListener[];
    // private _precedenceStack: IntegerStack;
    // private _syntaxErrors: number;
    // private _tracer: Parser$TraceListener;
    // private matchedEOF: boolean;
    addContextToParseTree(): void;
    addParseListener(arg0: ParseTreeListener): void;
    consume(): Token;
    createErrorNode(arg0: ParserRuleContext, arg1: Token): ErrorNode;
    createTerminalNode(arg0: ParserRuleContext, arg1: Token): TerminalNode;
    enterOuterAlt(arg0: ParserRuleContext, arg1: number): void;
    enterRecursionRule(arg0: ParserRuleContext, arg1: number, arg2: number, arg3: number): void;
    enterRule(arg0: ParserRuleContext, arg1: number, arg2: number): void;
    exitRule(): void;
    getContext(): ParserRuleContext;
    getCurrentToken(): Token;
    getExpectedTokens(): IntervalSet;
    getInputStream(): TokenStream;
    getPrecedence(): number;
    getRuleInvocationStack(): string[];
    getRuleInvocationStack(arg0: RuleContext): string[];
    getTokenFactory(): TokenFactory<any>;
    getTokenStream(): TokenStream;
    match(arg0: number): Token;
    notifyErrorListeners(arg0: Token, arg1: string, arg2: RecognitionException): void;
    precpred(arg0: RuleContext, arg1: number): boolean;
    pushNewRecursionContext(arg0: ParserRuleContext, arg1: number, arg2: number): void;
    removeParseListener(arg0: ParseTreeListener): void;
    reset(): void;
    setInputStream(arg0: IntStream): void;
    setTokenStream(arg0: TokenStream): void;
    setTrace(arg0: boolean): void;
    triggerEnterRuleEvent(): void;
    triggerExitRuleEvent(): void;
    unrollRecursionContexts(arg0: ParserRuleContext): void;
}