import type { JobParameters } from '../../../../../io/github/douira/glsl_transformer/ast/transform/JobParameters.d.ts'
import type { TokenFilter } from '../../../../../io/github/douira/glsl_transformer/token_filter/TokenFilter.d.ts'
import type { Token } from '../../../../../org/antlr/v4/runtime/Token.d.ts'
export class StringFilter<J extends JobParameters> extends TokenFilter<J> {
    static join<J extends JobParameters>(paramarg0: TokenFilter<J>, paramarg1: TokenFilter<J>): TokenFilter<J>;
    constructor(...arg0: string[])
    constructor(arg0: string)
    constructor(arg0: string[])
    // private disallowed: string[];
    isTokenAllowed(arg0: Token): boolean;
}