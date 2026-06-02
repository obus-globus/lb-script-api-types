import type { Object } from '../../../java/lang/Object.d.ts'
import type { BinaryOp } from '../../../kroppeb/stareval/parser/BinaryOp.d.ts'
import type { OpResolver } from '../../../kroppeb/stareval/parser/OpResolver.d.ts'
import type { ParserOptions$TokenRules } from '../../../kroppeb/stareval/parser/ParserOptions$TokenRules.d.ts'
import type { UnaryOp } from '../../../kroppeb/stareval/parser/UnaryOp.d.ts'
export class ParserOptions extends Object {
    private constructor(arg0: Char2ObjectMap<OpResolver<UnaryOp>>, arg1: Char2ObjectMap<OpResolver<BinaryOp>>, arg2: ParserOptions$TokenRules)
    // private binaryOpResolvers: Char2ObjectMap<OpResolver<BinaryOp>>;
    // private tokenRules: ParserOptions$TokenRules;
    // private unaryOpResolvers: Char2ObjectMap<OpResolver<UnaryOp>>;
    getBinaryOpResolver(arg0: string): OpResolver<BinaryOp>;
    getTokenRules(): ParserOptions$TokenRules;
    getUnaryOpResolver(arg0: string): OpResolver<UnaryOp>;
}