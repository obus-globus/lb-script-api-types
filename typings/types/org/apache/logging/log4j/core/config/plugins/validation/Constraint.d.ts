import type { Annotation } from '../../../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../../../../kotlin/reflect/KClass.d.ts'
import type { ConstraintValidator } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/validation/ConstraintValidator.d.ts'
export interface Constraint extends Annotation, Object{
    /*not mapped: */ value(): KClass<ConstraintValidator<Annotation>>;
}