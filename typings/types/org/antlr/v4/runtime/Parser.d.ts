import type { PrintStream } from '../../../../java/io/PrintStream.d.ts'
import type { ANTLRErrorStrategy } from '../../../../org/antlr/v4/runtime/ANTLRErrorStrategy.d.ts'
import type { IntStream } from '../../../../org/antlr/v4/runtime/IntStream.d.ts'
import type { Lexer } from '../../../../org/antlr/v4/runtime/Lexer.d.ts'
import type { Parser$TraceListener } from '../../../../org/antlr/v4/runtime/Parser$TraceListener.d.ts'
import type { ParserRuleContext } from '../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
import type { RecognitionException } from '../../../../org/antlr/v4/runtime/RecognitionException.d.ts'
import type { Recognizer } from '../../../../org/antlr/v4/runtime/Recognizer.d.ts'
import type { RuleContext } from '../../../../org/antlr/v4/runtime/RuleContext.d.ts'
import type { Token } from '../../../../org/antlr/v4/runtime/Token.d.ts'
import type { TokenFactory } from '../../../../org/antlr/v4/runtime/TokenFactory.d.ts'
import type { TokenStream } from '../../../../org/antlr/v4/runtime/TokenStream.d.ts'
import type { ATN } from '../../../../org/antlr/v4/runtime/atn/ATN.d.ts'
import type { ParseInfo } from '../../../../org/antlr/v4/runtime/atn/ParseInfo.d.ts'
import type { ParserATNSimulator } from '../../../../org/antlr/v4/runtime/atn/ParserATNSimulator.d.ts'
import type { IntegerStack } from '../../../../org/antlr/v4/runtime/misc/IntegerStack.d.ts'
import type { IntervalSet } from '../../../../org/antlr/v4/runtime/misc/IntervalSet.d.ts'
import type { ErrorNode } from '../../../../org/antlr/v4/runtime/tree/ErrorNode.d.ts'
import type { ParseTreeListener } from '../../../../org/antlr/v4/runtime/tree/ParseTreeListener.d.ts'
import type { TerminalNode } from '../../../../org/antlr/v4/runtime/tree/TerminalNode.d.ts'
import type { ParseTreePattern } from '../../../../org/antlr/v4/runtime/tree/pattern/ParseTreePattern.d.ts'
export abstract class Parser extends Recognizer<Token, ParserATNSimulator> {
    static EOF: number;
    constructor(arg0: TokenStream)
    // private _buildParseTrees: boolean;
    // private _ctx: ParserRuleContext;
    // private _errHandler: ANTLRErrorStrategy;
    // private _input: TokenStream;
    // private _parseListeners: ParseTreeListener[];
    // private _precedenceStack: IntegerStack;
    // private _syntaxErrors: number;
    // private _tracer: Parser$TraceListener;
    // private bypassAltsAtnCache: ATN;
    matchedEOF: boolean;
    addContextToParseTree(): void;
    addParseListener(arg0: ParseTreeListener): void;
    compileParseTreePattern(arg0: string, arg1: number): ParseTreePattern;
    compileParseTreePattern(arg0: string, arg1: number, arg2: Lexer): ParseTreePattern;
    consume(): Token;
    createErrorNode(arg0: ParserRuleContext, arg1: Token): ErrorNode;
    createTerminalNode(arg0: ParserRuleContext, arg1: Token): TerminalNode;
    dumpDFA(): void;
    dumpDFA(arg0: PrintStream): void;
    enterOuterAlt(arg0: ParserRuleContext, arg1: number): void;
    enterRecursionRule(arg0: ParserRuleContext, arg1: number): void;
    enterRecursionRule(arg0: ParserRuleContext, arg1: number, arg2: number, arg3: number): void;
    enterRule(arg0: ParserRuleContext, arg1: number, arg2: number): void;
    exitRule(): void;
    getATNWithBypassAlts(): ATN;
    getBuildParseTree(): boolean;
    getContext(): ParserRuleContext;
    getCurrentToken(): Token;
    getDFAStrings(): string[];
    getErrorHandler(): ANTLRErrorStrategy;
    getExpectedTokens(): IntervalSet;
    getExpectedTokensWithinCurrentRule(): IntervalSet;
    getInputStream(): TokenStream;
    getInvokingContext(arg0: number): ParserRuleContext;
    getNumberOfSyntaxErrors(): number;
    getParseInfo(): ParseInfo;
    getParseListeners(): ParseTreeListener[];
    getPrecedence(): number;
    getRuleContext(): ParserRuleContext;
    getRuleIndex(arg0: string): number;
    getRuleInvocationStack(): string[];
    getRuleInvocationStack(arg0: RuleContext): string[];
    getSourceName(): string;
    getTokenFactory(): TokenFactory<any>;
    getTokenStream(): TokenStream;
    getTrimParseTree(): boolean;
    inContext(arg0: string): boolean;
    isExpectedToken(arg0: number): boolean;
    isMatchedEOF(): boolean;
    isTrace(): boolean;
    match(arg0: number): Token;
    matchWildcard(): Token;
    notifyErrorListeners(arg0: string): void;
    notifyErrorListeners(arg0: Token, arg1: string, arg2: RecognitionException): void;
    precpred(arg0: RuleContext, arg1: number): boolean;
    pushNewRecursionContext(arg0: ParserRuleContext, arg1: number, arg2: number): void;
    removeParseListener(arg0: ParseTreeListener): void;
    removeParseListeners(): void;
    reset(): void;
    setBuildParseTree(arg0: boolean): void;
    setContext(arg0: ParserRuleContext): void;
    setErrorHandler(arg0: ANTLRErrorStrategy): void;
    setInputStream(arg0: IntStream): void;
    setProfile(arg0: boolean): void;
    setTokenFactory(arg0: TokenFactory<any>): void;
    setTokenStream(arg0: TokenStream): void;
    setTrace(arg0: boolean): void;
    setTrimParseTree(arg0: boolean): void;
    triggerEnterRuleEvent(): void;
    triggerExitRuleEvent(): void;
    unrollRecursionContexts(arg0: ParserRuleContext): void;
}