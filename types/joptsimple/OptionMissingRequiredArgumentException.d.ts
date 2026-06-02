import type { OptionException } from '../joptsimple/OptionException.d.ts'
import type { OptionSpec } from '../joptsimple/OptionSpec.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
export class OptionMissingRequiredArgumentException extends OptionException {
    constructor(arg0: OptionSpec<Object>)
    messageArguments(): Object[];
}