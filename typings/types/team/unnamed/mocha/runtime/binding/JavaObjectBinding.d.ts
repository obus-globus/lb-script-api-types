import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { JavaFieldBinding } from '../../../../../team/unnamed/mocha/runtime/binding/JavaFieldBinding.d.ts'
import type { ObjectProperty } from '../../../../../team/unnamed/mocha/runtime/value/ObjectProperty.d.ts'
import type { ObjectValue } from '../../../../../team/unnamed/mocha/runtime/value/ObjectValue.d.ts'
import type { ObjectValue$DoubleFunction1 } from '../../../../../team/unnamed/mocha/runtime/value/ObjectValue$DoubleFunction1.d.ts'
import type { ObjectValue$DoubleFunction2 } from '../../../../../team/unnamed/mocha/runtime/value/ObjectValue$DoubleFunction2.d.ts'
import type { ObjectValue$DoubleFunction3 } from '../../../../../team/unnamed/mocha/runtime/value/ObjectValue$DoubleFunction3.d.ts'
import type { Value } from '../../../../../team/unnamed/mocha/runtime/value/Value.d.ts'
export class JavaObjectBinding extends Object implements ObjectValue {
    static of<T extends unknown>(paramarg0: Class<T>, paramarg1: T, paramarg2: ObjectValue): JavaObjectBinding;
    constructor()
    constructor(arg0: string[])
    // private entries: { [key: string]: Object };
    // private names: string[];
    entries(): { [key: string]: ObjectProperty };
    get(arg0: string): Value;
    getField(arg0: string): JavaFieldBinding;
    getProperty(arg0: string): ObjectProperty;
    names(): string[];
    set(arg0: string, arg1: Value): boolean;
    setFunction(arg0: string, arg1: ObjectValue$DoubleFunction1): void;
    setFunction(arg0: string, arg1: ObjectValue$DoubleFunction2): void;
    setFunction(arg0: string, arg1: ObjectValue$DoubleFunction3): void;
}