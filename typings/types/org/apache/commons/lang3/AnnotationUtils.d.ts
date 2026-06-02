import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AnnotationUtils extends Object {
    static equals(paramarg0: Annotation, paramarg1: Annotation): boolean;
    static hashCode(paramarg0: Annotation): number;
    static isValidAnnotationMemberType(paramarg0: Class<Object>): boolean;
    static toString(paramarg0: Annotation): string;
    constructor()
}