import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Scope } from '../../../../team/unnamed/mocha/runtime/Scope.d.ts'
import type { ObjectProperty } from '../../../../team/unnamed/mocha/runtime/value/ObjectProperty.d.ts'
import type { Value } from '../../../../team/unnamed/mocha/runtime/value/Value.d.ts'
export class ScopeImpl extends Object implements Scope {
    constructor()
    // private bindings: JavaMap<string, ObjectProperty>;
    // private readOnly: boolean;
    copy(): Scope;
    entries(): JavaMap<string, ObjectProperty>;
    getProperty(arg0: string): ObjectProperty;
    readOnly(): boolean;
    readOnly(arg0: boolean): void;
    set(arg0: string, arg1: Value): boolean;
}