import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { KAnnotatedElement } from '../../../kotlin/reflect/KAnnotatedElement.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
export class KAnnotatedElements extends Object {
    static findAnnotation(paramarg0: KAnnotatedElement): Annotation | null;
    static findAnnotations(paramarg0: KAnnotatedElement): (Annotation | null)[];
    static findAnnotations(paramarg0: KAnnotatedElement, paramarg1: KClass<Annotation>): (Annotation | null)[];
    static hasAnnotation(paramarg0: KAnnotatedElement): boolean;
}