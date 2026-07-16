import type { Class } from '../../../java/lang/Class.d.ts'
import type { AnnotatedElement } from '../../../java/lang/reflect/AnnotatedElement.d.ts'
import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class AnnotationAccess extends Object {
    static getAnnotation(paramelement: AnnotatedElement, paramannotationType: Class<Annotation>): Annotation | null;
    static getAnnotationTypes(paramelement: AnnotatedElement): Class<Annotation>[];
    static isAnnotationPresent(paramelement: AnnotatedElement, paramannotationClass: Class<Annotation>): boolean;
    private constructor()
}