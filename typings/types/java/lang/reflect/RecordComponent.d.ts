import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { AnnotatedElement } from '../../../java/lang/reflect/AnnotatedElement.d.ts'
import type { AnnotatedType } from '../../../java/lang/reflect/AnnotatedType.d.ts'
import type { Method } from '../../../java/lang/reflect/Method.d.ts'
import type { Type } from '../../../java/lang/reflect/Type.d.ts'
import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { GenericsFactory } from '../../../sun/reflect/generics/factory/GenericsFactory.d.ts'
import type { FieldRepository } from '../../../sun/reflect/generics/repository/FieldRepository.d.ts'
export class RecordComponent extends Object implements AnnotatedElement {
    private constructor()
    readonly accessor: Method;
    readonly annotations: number[];
    // private clazz: Class<Object>;
    readonly declaredAnnotations: JavaMap<Class<Annotation>, Annotation>;
    // private genericInfo: FieldRepository;
    readonly name: string;
    // private root: RecordComponent;
    // private signature: string;
    readonly type: Class<Object>;
    // private typeAnnotations: number[];
    // private declaredAnnotations(): JavaMap<Class<Annotation>, Annotation>;
    getAccessor(): Method;
    getAnnotatedType(): AnnotatedType;
    getAnnotation<T extends Annotation>(arg0: Class<T>): T;
    getAnnotations(): Annotation[];
    getAnnotationsByType<T extends Annotation>(arg0: Class<T>): T[];
    getDeclaredAnnotation<T extends Annotation>(arg0: Class<T>): T;
    getDeclaredAnnotations(): Annotation[];
    getDeclaredAnnotationsByType<T extends Annotation>(arg0: Class<T>): T[];
    getDeclaringRecord(): Class<Object>;
    // private getFactory(): GenericsFactory;
    // private getGenericInfo(): FieldRepository;
    getGenericSignature(): string;
    getGenericType(): Type;
    getName(): string;
    getType(): Class<Object>;
    isAnnotationPresent(arg0: Class<Annotation>): boolean;
    toString(): string;
}