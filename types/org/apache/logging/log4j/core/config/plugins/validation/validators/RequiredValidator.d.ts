import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ConstraintValidator } from '../../../../../../../../../org/apache/logging/log4j/core/config/plugins/validation/ConstraintValidator.d.ts'
import type { Required } from '../../../../../../../../../org/apache/logging/log4j/core/config/plugins/validation/constraints/Required.d.ts'
export class RequiredValidator extends Object implements ConstraintValidator<Required> {
    constructor()
    // private annotation: Required;
    // private err(name: string): boolean;
    initialize(anAnnotation: Required): void;
    isValid(name: string, value: Object): boolean;
}