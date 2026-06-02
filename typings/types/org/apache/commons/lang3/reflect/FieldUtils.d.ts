import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Field } from '../../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FieldUtils extends Object {
    static getAllFields(paramarg0: Class<Object>): (Object | null)[];
    static getAllFieldsList(paramarg0: Class<Object>): Field[];
    static getDeclaredField(paramarg0: Class<Object>, paramarg1: string): Field;
    static getDeclaredField(paramarg0: Class<Object>, paramarg1: string, paramarg2: boolean): Field;
    static getField(paramarg0: Class<Object>, paramarg1: string): Field;
    static getField(paramarg0: Class<Object>, paramarg1: string, paramarg2: boolean): Field;
    static getFieldsListWithAnnotation(paramarg0: Class<Object>, paramarg1: Class<Object>): Field[];
    static getFieldsWithAnnotation(paramarg0: Class<Object>, paramarg1: Class<Object>): (Object | null)[];
    static readDeclaredField(paramarg0: Object, paramarg1: string): Object;
    static readDeclaredField(paramarg0: Object, paramarg1: string, paramarg2: boolean): Object;
    static readDeclaredStaticField(paramarg0: Class<Object>, paramarg1: string): Object;
    static readDeclaredStaticField(paramarg0: Class<Object>, paramarg1: string, paramarg2: boolean): Object;
    static readField(paramarg0: Object, paramarg1: string): Object;
    static readField(paramarg0: Object, paramarg1: string, paramarg2: boolean): Object;
    static readField(paramarg0: Field, paramarg1: Object): Object;
    static readField(paramarg0: Field, paramarg1: Object, paramarg2: boolean): Object;
    static readStaticField(paramarg0: Class<Object>, paramarg1: string): Object;
    static readStaticField(paramarg0: Class<Object>, paramarg1: string, paramarg2: boolean): Object;
    static readStaticField(paramarg0: Field): Object;
    static readStaticField(paramarg0: Field, paramarg1: boolean): Object;
    static removeFinalModifier(paramarg0: Field): void;
    static removeFinalModifier(paramarg0: Field, paramarg1: boolean): void;
    static writeDeclaredField(paramarg0: Object, paramarg1: string, paramarg2: Object): void;
    static writeDeclaredField(paramarg0: Object, paramarg1: string, paramarg2: Object, paramarg3: boolean): void;
    static writeDeclaredStaticField(paramarg0: Class<Object>, paramarg1: string, paramarg2: Object): void;
    static writeDeclaredStaticField(paramarg0: Class<Object>, paramarg1: string, paramarg2: Object, paramarg3: boolean): void;
    static writeField(paramarg0: Object, paramarg1: string, paramarg2: Object): void;
    static writeField(paramarg0: Object, paramarg1: string, paramarg2: Object, paramarg3: boolean): void;
    static writeField(paramarg0: Field, paramarg1: Object, paramarg2: Object): void;
    static writeField(paramarg0: Field, paramarg1: Object, paramarg2: Object, paramarg3: boolean): void;
    static writeStaticField(paramarg0: Class<Object>, paramarg1: string, paramarg2: Object): void;
    static writeStaticField(paramarg0: Class<Object>, paramarg1: string, paramarg2: Object, paramarg3: boolean): void;
    static writeStaticField(paramarg0: Field, paramarg1: Object): void;
    static writeStaticField(paramarg0: Field, paramarg1: Object, paramarg2: boolean): void;
    constructor()
}