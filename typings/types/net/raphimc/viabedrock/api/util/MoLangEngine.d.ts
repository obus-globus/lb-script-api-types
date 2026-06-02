import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Expression } from '../../../../../team/unnamed/mocha/parser/ast/Expression.d.ts'
import type { Scope } from '../../../../../team/unnamed/mocha/runtime/Scope.d.ts'
import type { Value } from '../../../../../team/unnamed/mocha/runtime/value/Value.d.ts'
export class MoLangEngine extends Object {
    static eval(paramarg0: Scope, paramarg1: string): Value;
    static eval(paramarg0: Scope, paramarg1: Expression[]): Value;
    static parse(paramarg0: Reader): Expression[];
    static parse(paramarg0: string): Expression[];
    constructor()
}