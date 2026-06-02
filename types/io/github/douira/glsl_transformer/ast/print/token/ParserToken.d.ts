import type { TokenRole } from '../../../../../../../io/github/douira/glsl_transformer/ast/print/TokenRole.d.ts'
import type { PrintToken } from '../../../../../../../io/github/douira/glsl_transformer/ast/print/token/PrintToken.d.ts'
import type { TokenChannel } from '../../../../../../../io/github/douira/glsl_transformer/token_filter/TokenChannel.d.ts'
export class ParserToken extends PrintToken {
    constructor(arg0: TokenRole, arg1: number)
    constructor(arg0: TokenChannel, arg1: TokenRole, arg2: number)
    constructor(arg0: TokenChannel, arg1: number)
    constructor(arg0: number)
    tokenType: number;
    calculateContent(): string;
}