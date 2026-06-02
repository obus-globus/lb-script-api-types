import type { Class } from '../../java/lang/Class.d.ts'
import type { GenericDeclaration } from '../../java/lang/reflect/GenericDeclaration.d.ts'
import type { Type } from '../../java/lang/reflect/Type.d.ts'
import type { TypeVariable } from '../../java/lang/reflect/TypeVariable.d.ts'
import type { Annotation } from '../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { KTypeParameter } from '../../kotlin/reflect/KTypeParameter.d.ts'
import type { TypeImpl } from '../../kotlin/reflect/TypeImpl.d.ts'
export class TypeVariableImpl extends Object implements TypeVariable<GenericDeclaration>, TypeImpl {
    constructor(typeParameter: KTypeParameter)
    // private typeParameter: KTypeParameter;
    equals(other: Object | null): boolean;
    getAnnotation<T extends Annotation>(annotationClass: Class<T>): T | null;
    getAnnotations(): Annotation[];
    getBounds(): Type[];
    getDeclaredAnnotations(): Annotation[];
    getGenericDeclaration(): GenericDeclaration;
    getName(): string;
    getTypeName(): string;
    hashCode(): number;
    toString(): string;
}