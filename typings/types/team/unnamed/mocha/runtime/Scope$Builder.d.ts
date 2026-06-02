import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Scope } from '../../../../team/unnamed/mocha/runtime/Scope.d.ts'
import type { Value } from '../../../../team/unnamed/mocha/runtime/value/Value.d.ts'
export interface Scope$Builder extends Object{
    build(): Scope;
    set(arg0: string, arg1: Value): Scope$Builder;
}