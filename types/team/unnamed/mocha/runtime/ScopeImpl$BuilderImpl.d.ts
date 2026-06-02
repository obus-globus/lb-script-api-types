import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Scope } from '../../../../team/unnamed/mocha/runtime/Scope.d.ts'
import type { Scope$Builder } from '../../../../team/unnamed/mocha/runtime/Scope$Builder.d.ts'
import type { ObjectProperty } from '../../../../team/unnamed/mocha/runtime/value/ObjectProperty.d.ts'
import type { Value } from '../../../../team/unnamed/mocha/runtime/value/Value.d.ts'
export class ScopeImpl$BuilderImpl extends Object implements Scope$Builder {
    constructor()
    // private properties: { [key: string]: ObjectProperty };
    build(): Scope;
    set(arg0: string, arg1: Value): Scope$Builder;
}