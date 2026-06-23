import type { Object } from '../../../java/lang/Object.d.ts'
import type { BinaryOp } from '../../../kroppeb/stareval/parser/BinaryOp.d.ts'
import type { OpResolver } from '../../../kroppeb/stareval/parser/OpResolver.d.ts'
import type { ParserOptions$TokenRules } from '../../../kroppeb/stareval/parser/ParserOptions$TokenRules.d.ts'
import type { UnaryOp } from '../../../kroppeb/stareval/parser/UnaryOp.d.ts'
export class ParserOptions extends Object {
    private constructor(arg0: { [key: string]: any }, arg1: { [key: string]: any }, arg2: ParserOptions$TokenRules)
    // private binaryOpResolvers: { [key: string]: any };
    // private tokenRules: ParserOptions$TokenRules;
    // private unaryOpResolvers: { [key: string]: any };
    getBinaryOpResolver(arg0: string): OpResolver<BinaryOp>;
    getTokenRules(): ParserOptions$TokenRules;
    getUnaryOpResolver(arg0: string): OpResolver<UnaryOp>;
}