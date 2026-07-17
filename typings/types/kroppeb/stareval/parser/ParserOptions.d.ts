import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { BinaryOp } from '../../../kroppeb/stareval/parser/BinaryOp.d.ts'
import type { OpResolver } from '../../../kroppeb/stareval/parser/OpResolver.d.ts'
import type { ParserOptions$TokenRules } from '../../../kroppeb/stareval/parser/ParserOptions$TokenRules.d.ts'
import type { UnaryOp } from '../../../kroppeb/stareval/parser/UnaryOp.d.ts'
export class ParserOptions extends Object {
    private constructor(arg0: JavaMap<any, any>, arg1: JavaMap<any, any>, arg2: ParserOptions$TokenRules)
    // private binaryOpResolvers: JavaMap<any, any>;
    // private tokenRules: ParserOptions$TokenRules;
    // private unaryOpResolvers: JavaMap<any, any>;
    getBinaryOpResolver(arg0: string): OpResolver<BinaryOp>;
    getTokenRules(): ParserOptions$TokenRules;
    getUnaryOpResolver(arg0: string): OpResolver<UnaryOp>;
}