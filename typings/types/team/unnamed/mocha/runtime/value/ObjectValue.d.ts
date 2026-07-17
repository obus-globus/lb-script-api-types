import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ObjectProperty } from '../../../../../team/unnamed/mocha/runtime/value/ObjectProperty.d.ts'
import type { ObjectValue$DoubleFunction1 } from '../../../../../team/unnamed/mocha/runtime/value/ObjectValue$DoubleFunction1.d.ts'
import type { ObjectValue$DoubleFunction2 } from '../../../../../team/unnamed/mocha/runtime/value/ObjectValue$DoubleFunction2.d.ts'
import type { ObjectValue$DoubleFunction3 } from '../../../../../team/unnamed/mocha/runtime/value/ObjectValue$DoubleFunction3.d.ts'
import type { Value } from '../../../../../team/unnamed/mocha/runtime/value/Value.d.ts'
export interface ObjectValue extends Object, Value{
    entries(): JavaMap<string, ObjectProperty>;
    get(arg0: string): Value;
    getAsBoolean(): boolean;
    getAsNumber(): number;
    getAsString(): string;
    getProperty(arg0: string): ObjectProperty;
    isString(): boolean;
    set(arg0: string, arg1: Value): boolean;
    setFunction(arg0: string, arg1: ObjectValue$DoubleFunction1): void;
    setFunction(arg0: string, arg1: ObjectValue$DoubleFunction2): void;
    setFunction(arg0: string, arg1: ObjectValue$DoubleFunction3): void;
}