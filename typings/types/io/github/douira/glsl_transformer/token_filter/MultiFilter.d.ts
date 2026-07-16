import type { JobParameters } from '../../../../../io/github/douira/glsl_transformer/ast/transform/JobParameters.d.ts'
import type { TokenFilter } from '../../../../../io/github/douira/glsl_transformer/token_filter/TokenFilter.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Token } from '../../../../../org/antlr/v4/runtime/Token.d.ts'
export class MultiFilter<J extends JobParameters> extends TokenFilter<J> {
    static join<J extends JobParameters>(paramarg0: TokenFilter<J>, paramarg1: TokenFilter<J>): TokenFilter<J>;
    constructor()
    constructor(arg0: boolean, arg1: boolean)
    constructor(arg0: number)
    constructor(arg0: number, arg1: boolean, arg2: boolean)
    constructor(arg0: TokenFilter<J>[], arg1: boolean, arg2: boolean)
    constructor(arg0: TokenFilter<J>[])
    readonly conjunction: boolean;
    readonly shortCircuit: boolean;
    // private subfilters: TokenFilter<J>[];
    add(arg0: TokenFilter<J>): boolean;
    addAll(arg0: TokenFilter<J>[]): boolean;
    addAll(arg0: MultiFilter<J>): boolean;
    clone(): MultiFilter<J>;
    isTokenAllowed(arg0: Token): boolean;
    resetState(): void;
    setConjunction(arg0: boolean): void;
    setJobParametersSupplier(arg0: () => J): void;
    setShortCircuit(arg0: boolean): void;
}