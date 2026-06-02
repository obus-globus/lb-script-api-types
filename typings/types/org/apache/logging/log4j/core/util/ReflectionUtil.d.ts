import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Constructor } from '../../../../../../java/lang/reflect/Constructor.d.ts'
import type { Field } from '../../../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ReflectionUtil extends Object {
    static getDefaultConstructor(paramclazz: Class<Object>): Constructor<Object>;
    static getFieldValue(paramfield: Field, paraminstance: Object): Object;
    static getStaticFieldValue(paramfield: Field): Object;
    static instantiate(paramclazz: Class<Object>): Object | null;
    static isAccessible(parammember: Object | null): boolean;
    static makeAccessible(parammember: Object | null): void;
    static makeAccessible(paramfield: Field): void;
    static setFieldValue(paramfield: Field, paraminstance: Object, paramvalue: Object): void;
    static setStaticFieldValue(paramfield: Field, paramvalue: Object): void;
    private constructor()
}