import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ConstraintValidator } from '../../../../../../../../../org/apache/logging/log4j/core/config/plugins/validation/ConstraintValidator.d.ts'
import type { ValidPort } from '../../../../../../../../../org/apache/logging/log4j/core/config/plugins/validation/constraints/ValidPort.d.ts'
export class ValidPortValidator extends Object implements ConstraintValidator<ValidPort> {
    constructor()
    // private annotation: ValidPort;
    initialize(annotation: ValidPort): void;
    isValid(name: string, value: Object): boolean;
}