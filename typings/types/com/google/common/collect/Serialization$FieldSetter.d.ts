import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Serialization$FieldSetter<T extends unknown> extends Object {
    private constructor(field: Field)
    // private field: Field;
    set(instance: T, value: Object): void;
    set(instance: T, value: number): void;
}