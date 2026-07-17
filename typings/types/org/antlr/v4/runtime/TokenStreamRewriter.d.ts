import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Token } from '../../../../org/antlr/v4/runtime/Token.d.ts'
import type { TokenStream } from '../../../../org/antlr/v4/runtime/TokenStream.d.ts'
import type { TokenStreamRewriter$RewriteOperation } from '../../../../org/antlr/v4/runtime/TokenStreamRewriter$RewriteOperation.d.ts'
import type { Interval } from '../../../../org/antlr/v4/runtime/misc/Interval.d.ts'
export class TokenStreamRewriter extends Object {
    static DEFAULT_PROGRAM_NAME: string;
    static MIN_TOKEN_INDEX: number;
    static PROGRAM_INIT_SIZE: number;
    constructor(arg0: TokenStream)
    // private lastRewriteTokenIndexes: JavaMap<string, number>;
    // private programs: JavaMap<string, TokenStreamRewriter$RewriteOperation[]>;
    // private tokens: TokenStream;
    catOpText(arg0: Object, arg1: Object): string;
    delete(arg0: number): void;
    delete(arg0: number, arg1: number): void;
    delete(arg0: string, arg1: number, arg2: number): void;
    delete(arg0: string, arg1: Token, arg2: Token): void;
    delete(arg0: Token): void;
    delete(arg0: Token, arg1: Token): void;
    deleteProgram(): void;
    deleteProgram(arg0: string): void;
    getKindOfOps<T extends TokenStreamRewriter$RewriteOperation>(arg0: TokenStreamRewriter$RewriteOperation[], arg1: Class<T>, arg2: number): T[];
    getLastRewriteTokenIndex(): number;
    getLastRewriteTokenIndex(arg0: string): number;
    getProgram(arg0: string): TokenStreamRewriter$RewriteOperation[];
    getText(): string;
    getText(arg0: string): string;
    getText(arg0: string, arg1: Interval): string;
    getText(arg0: Interval): string;
    getTokenStream(): TokenStream;
    // private initializeProgram(arg0: string): TokenStreamRewriter$RewriteOperation[];
    insertAfter(arg0: number, arg1: Object): void;
    insertAfter(arg0: string, arg1: number, arg2: Object): void;
    insertAfter(arg0: string, arg1: Token, arg2: Object): void;
    insertAfter(arg0: Token, arg1: Object): void;
    insertBefore(arg0: number, arg1: Object): void;
    insertBefore(arg0: string, arg1: number, arg2: Object): void;
    insertBefore(arg0: string, arg1: Token, arg2: Object): void;
    insertBefore(arg0: Token, arg1: Object): void;
    reduceToSingleOperationPerIndex(arg0: TokenStreamRewriter$RewriteOperation[]): JavaMap<number, TokenStreamRewriter$RewriteOperation>;
    replace(arg0: number, arg1: Object): void;
    replace(arg0: number, arg1: number, arg2: Object): void;
    replace(arg0: string, arg1: number, arg2: number, arg3: Object): void;
    replace(arg0: string, arg1: Token, arg2: Token, arg3: Object): void;
    replace(arg0: Token, arg1: Object): void;
    replace(arg0: Token, arg1: Token, arg2: Object): void;
    rollback(arg0: number): void;
    rollback(arg0: string, arg1: number): void;
    setLastRewriteTokenIndex(arg0: string, arg1: number): void;
}