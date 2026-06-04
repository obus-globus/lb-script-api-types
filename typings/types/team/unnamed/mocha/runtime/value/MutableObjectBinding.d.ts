import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ObjectProperty } from '../../../../../team/unnamed/mocha/runtime/value/ObjectProperty.d.ts'
import type { ObjectValue } from '../../../../../team/unnamed/mocha/runtime/value/ObjectValue.d.ts'
import type { ObjectValue$DoubleFunction1 } from '../../../../../team/unnamed/mocha/runtime/value/ObjectValue$DoubleFunction1.d.ts'
import type { ObjectValue$DoubleFunction2 } from '../../../../../team/unnamed/mocha/runtime/value/ObjectValue$DoubleFunction2.d.ts'
import type { ObjectValue$DoubleFunction3 } from '../../../../../team/unnamed/mocha/runtime/value/ObjectValue$DoubleFunction3.d.ts'
import type { Value } from '../../../../../team/unnamed/mocha/runtime/value/Value.d.ts'
export class MutableObjectBinding extends Object implements ObjectValue {
    constructor()
    // private blocked: boolean;
    // private properties: { [key: string]: ObjectProperty };
    block(): void;
    blocked(): boolean;
    entries(): { [key: string]: ObjectProperty };
    get(arg0: string): Value;
    getProperty(arg0: string): ObjectProperty;
    set(arg0: string, arg1: Value): boolean;
    setAllFrom(arg0: MutableObjectBinding): void;
    setFunction(arg0: string, arg1: ObjectValue$DoubleFunction1): void;
    setFunction(arg0: string, arg1: ObjectValue$DoubleFunction2): void;
    setFunction(arg0: string, arg1: ObjectValue$DoubleFunction3): void;
}