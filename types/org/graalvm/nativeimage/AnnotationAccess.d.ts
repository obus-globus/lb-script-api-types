import type { Class } from '../../../java/lang/Class.d.ts'
import type { AnnotatedElement } from '../../../java/lang/reflect/AnnotatedElement.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class AnnotationAccess extends Object {
    static getAnnotation(paramelement: AnnotatedElement, paramannotationType: Class<Object>): Object | null;
    static getAnnotationTypes(paramelement: AnnotatedElement): Object | null;
    static isAnnotationPresent(paramelement: AnnotatedElement, paramannotationClass: Class<Object>): boolean;
    private constructor()
}