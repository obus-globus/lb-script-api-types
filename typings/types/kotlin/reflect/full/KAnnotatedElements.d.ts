import type { Object } from '../../../java/lang/Object.d.ts'
import type { KAnnotatedElement } from '../../../kotlin/reflect/KAnnotatedElement.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
export class KAnnotatedElements extends Object {
    static findAnnotation(paramarg0: KAnnotatedElement): Object | null;
    static findAnnotations(paramarg0: KAnnotatedElement): (Object | null)[];
    static findAnnotations(paramarg0: KAnnotatedElement, paramarg1: KClass<Object>): (Object | null)[];
    static hasAnnotation(paramarg0: KAnnotatedElement): boolean;
}