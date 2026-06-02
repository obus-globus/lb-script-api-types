import type { Field } from '../../../../../java/lang/reflect/Field.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegisteredBinding } from '../../../../../team/unnamed/mocha/runtime/binding/RegisteredBinding.d.ts'
import type { Value } from '../../../../../team/unnamed/mocha/runtime/value/Value.d.ts'
export class JavaFieldBinding extends Object implements RegisteredBinding {
    constructor(arg0: Object, arg1: Field, arg2: () => Value)
    // private constant: boolean;
    // private field: Field;
    // private object: Object;
    // private value: () => Value;
    constant(): boolean;
    // private evaluate(): void;
    field(): Field;
    get(): Value;
    // private getFromField(): Value;
}