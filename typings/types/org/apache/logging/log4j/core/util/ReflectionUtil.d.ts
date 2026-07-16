import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { AccessibleObject } from '../../../../../../java/lang/reflect/AccessibleObject.d.ts'
import type { Constructor } from '../../../../../../java/lang/reflect/Constructor.d.ts'
import type { Field } from '../../../../../../java/lang/reflect/Field.d.ts'
import type { Member } from '../../../../../../java/lang/reflect/Member.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ReflectionUtil extends Object {
    static getDefaultConstructor<T extends unknown>(paramclazz: Class<T>): Constructor<T>;
    static getFieldValue(paramfield: Field, paraminstance: Object): Object;
    static getStaticFieldValue(paramfield: Field): Object;
    static instantiate<T extends unknown>(paramclazz: Class<T>): T;
    static isAccessible<T extends AccessibleObject & Member>(parammember: T): boolean;
    static makeAccessible<T extends AccessibleObject & Member>(parammember: T): void;
    static makeAccessible(paramfield: Field): void;
    static setFieldValue(paramfield: Field, paraminstance: Object, paramvalue: Object): void;
    static setStaticFieldValue(paramfield: Field, paramvalue: Object): void;
    private constructor()
}