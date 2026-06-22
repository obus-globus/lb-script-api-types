import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IntStream } from '../../../../org/antlr/v4/runtime/IntStream.d.ts'
import type { RuleContext } from '../../../../org/antlr/v4/runtime/RuleContext.d.ts'
import type { Token } from '../../../../org/antlr/v4/runtime/Token.d.ts'
import type { TokenSource } from '../../../../org/antlr/v4/runtime/TokenSource.d.ts'
import type { Interval } from '../../../../org/antlr/v4/runtime/misc/Interval.d.ts'
export interface TokenStream extends Object, IntStream{
    LA(arg0: number): number;
    LT(arg0: number): Token;
    consume(): void;
    get(arg0: number): Token;
    getSourceName(): string;
    getText(): string;
    getText(arg0: RuleContext): string;
    getText(arg0: Token, arg1: Token): string;
    getText(arg0: Interval): string;
    getTokenSource(): TokenSource;
    index(): number;
    mark(): number;
    release(arg0: number): void;
    seek(arg0: number): void;
    size(): number;
}