import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Lexer } from '../../../../../../org/antlr/v4/runtime/Lexer.d.ts'
import type { Parser } from '../../../../../../org/antlr/v4/runtime/Parser.d.ts'
import type { Token } from '../../../../../../org/antlr/v4/runtime/Token.d.ts'
import type { ParseTree } from '../../../../../../org/antlr/v4/runtime/tree/ParseTree.d.ts'
import type { Chunk } from '../../../../../../org/antlr/v4/runtime/tree/pattern/Chunk.d.ts'
import type { ParseTreeMatch } from '../../../../../../org/antlr/v4/runtime/tree/pattern/ParseTreeMatch.d.ts'
import type { ParseTreePattern } from '../../../../../../org/antlr/v4/runtime/tree/pattern/ParseTreePattern.d.ts'
import type { RuleTagToken } from '../../../../../../org/antlr/v4/runtime/tree/pattern/RuleTagToken.d.ts'
export class ParseTreePatternMatcher extends Object {
    constructor(arg0: Lexer, arg1: Parser)
    // private escape: string;
    readonly lexer: Lexer;
    readonly parser: Parser;
    // private start: string;
    // private stop: string;
    compile(arg0: string, arg1: number): ParseTreePattern;
    getLexer(): Lexer;
    getParser(): Parser;
    getRuleTagToken(arg0: ParseTree): RuleTagToken;
    match(arg0: ParseTree, arg1: string, arg2: number): ParseTreeMatch;
    match(arg0: ParseTree, arg1: ParseTreePattern): ParseTreeMatch;
    matchImpl(arg0: ParseTree, arg1: ParseTree, arg2: { [key: string]: ParseTree }): ParseTree;
    matches(arg0: ParseTree, arg1: string, arg2: number): boolean;
    matches(arg0: ParseTree, arg1: ParseTreePattern): boolean;
    setDelimiters(arg0: string, arg1: string, arg2: string): void;
    split(arg0: string): Chunk[];
    tokenize(arg0: string): Token[];
}