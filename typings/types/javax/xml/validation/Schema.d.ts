import type { Validator } from '../../../javax/xml/validation/Validator.d.ts'
import type { ValidatorHandler } from '../../../javax/xml/validation/ValidatorHandler.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class Schema extends Object {
    constructor()
    newValidator(): Validator;
    newValidatorHandler(): ValidatorHandler;
}