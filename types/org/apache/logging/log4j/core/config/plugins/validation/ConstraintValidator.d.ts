import type { Annotation } from '../../../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export interface ConstraintValidator<A extends Annotation> extends Object{
    initialize(annotation: A): void;
    isValid(name: string, value: Object): boolean;
}