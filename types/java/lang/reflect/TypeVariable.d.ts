import type { Class } from '../../../java/lang/Class.d.ts'
import type { AnnotatedElement } from '../../../java/lang/reflect/AnnotatedElement.d.ts'
import type { AnnotatedType } from '../../../java/lang/reflect/AnnotatedType.d.ts'
import type { GenericDeclaration } from '../../../java/lang/reflect/GenericDeclaration.d.ts'
import type { Type } from '../../../java/lang/reflect/Type.d.ts'
import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface TypeVariable<D extends GenericDeclaration> extends AnnotatedElement, Type, Object{
    getAnnotatedBounds(): AnnotatedType[];
    getAnnotationsByType(arg0: Class<T>): T[];
    getBounds(): Type[];
    getDeclaredAnnotation<T extends Annotation>(arg0: Class<T>): T;
    getDeclaredAnnotationsByType(arg0: Class<T>): T[];
    getGenericDeclaration(): D;
    getName(): string;
    getTypeName(): string;
    isAnnotationPresent(arg0: Class<Annotation>): boolean;
}