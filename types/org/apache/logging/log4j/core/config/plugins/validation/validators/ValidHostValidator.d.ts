import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ConstraintValidator } from '../../../../../../../../../org/apache/logging/log4j/core/config/plugins/validation/ConstraintValidator.d.ts'
import type { ValidHost } from '../../../../../../../../../org/apache/logging/log4j/core/config/plugins/validation/constraints/ValidHost.d.ts'
export class ValidHostValidator extends Object implements ConstraintValidator<ValidHost> {
    constructor()
    // private annotation: ValidHost;
    initialize(annotation: ValidHost): void;
    isValid(name: string, value: Object): boolean;
}