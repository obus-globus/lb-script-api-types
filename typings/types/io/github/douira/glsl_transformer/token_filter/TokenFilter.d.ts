import type { JobParameters } from '../../../../../io/github/douira/glsl_transformer/ast/transform/JobParameters.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Token } from '../../../../../org/antlr/v4/runtime/Token.d.ts'
export abstract class TokenFilter<J extends JobParameters> extends Object {
    static join(paramarg0: TokenFilter<JobParameters>, paramarg1: TokenFilter<JobParameters>): TokenFilter<JobParameters>;
    constructor()
    readonly jobParametersSupplier: () => J;
    getJobParameters(): J;
    isTokenAllowed(arg0: Token): boolean;
    resetState(): void;
    setJobParametersSupplier(arg0: () => J): void;
}