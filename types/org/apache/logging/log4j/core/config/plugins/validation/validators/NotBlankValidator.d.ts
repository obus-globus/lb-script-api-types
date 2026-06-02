import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ConstraintValidator } from '../../../../../../../../../org/apache/logging/log4j/core/config/plugins/validation/ConstraintValidator.d.ts'
import type { NotBlank } from '../../../../../../../../../org/apache/logging/log4j/core/config/plugins/validation/constraints/NotBlank.d.ts'
export class NotBlankValidator extends Object implements ConstraintValidator<NotBlank> {
    constructor()
    // private annotation: NotBlank;
    // private err(name: string): boolean;
    initialize(anAnnotation: NotBlank): void;
    isValid(name: string, value: Object): boolean;
}