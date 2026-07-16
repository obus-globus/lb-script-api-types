import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { KAnnotatedElement } from '../../../kotlin/reflect/KAnnotatedElement.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
export class KAnnotatedElements extends Object {
    static findAnnotation<T extends Annotation>(self: KAnnotatedElement): T | null;
    static findAnnotations<T extends Annotation>(self: KAnnotatedElement): T[];
    static findAnnotations<T extends Annotation>(self: KAnnotatedElement, klass: KClass<T>): T[];
    static hasAnnotation(self: KAnnotatedElement): boolean;
}