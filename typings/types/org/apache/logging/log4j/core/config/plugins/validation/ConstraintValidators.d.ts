import type { Annotation } from '../../../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ConstraintValidator } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/validation/ConstraintValidator.d.ts'
export class ConstraintValidators extends Object {
    static findValidators(...paramannotations: Annotation[]): ConstraintValidator<any>[];
    private constructor()
}