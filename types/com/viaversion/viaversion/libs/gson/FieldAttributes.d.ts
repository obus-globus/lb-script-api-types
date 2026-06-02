import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Field } from '../../../../../java/lang/reflect/Field.d.ts'
import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FieldAttributes extends Object {
    constructor(arg0: Field)
    // private field: Field;
    getAnnotation<T extends Annotation>(arg0: Class<T>): T;
    getAnnotations(): E[];
    getDeclaredClass(): Class<Object>;
    getDeclaredType(): Type;
    getDeclaringClass(): Class<Object>;
    getName(): string;
    hasModifier(arg0: number): boolean;
    toString(): string;
}