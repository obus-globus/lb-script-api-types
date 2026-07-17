import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { BinaryOp } from '../../../kroppeb/stareval/parser/BinaryOp.d.ts'
import type { ParserOptions } from '../../../kroppeb/stareval/parser/ParserOptions.d.ts'
import type { ParserOptions$TokenRules } from '../../../kroppeb/stareval/parser/ParserOptions$TokenRules.d.ts'
import type { UnaryOp } from '../../../kroppeb/stareval/parser/UnaryOp.d.ts'
export class ParserOptions$Builder extends Object {
    constructor()
    // private binaryOpResolvers: JavaMap<any, any>;
    readonly tokenRules: ParserOptions$TokenRules;
    // private unaryOpResolvers: JavaMap<any, any>;
    addBinaryOp(arg0: string, arg1: BinaryOp): void;
    addUnaryOp(arg0: string, arg1: UnaryOp): void;
    build(): ParserOptions;
    setTokenRules(arg0: ParserOptions$TokenRules): void;
}