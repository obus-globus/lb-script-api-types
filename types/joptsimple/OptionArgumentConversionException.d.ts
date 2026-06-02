import type { OptionException } from '../joptsimple/OptionException.d.ts'
import type { OptionSpec } from '../joptsimple/OptionSpec.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Throwable } from '../java/lang/Throwable.d.ts'
export class OptionArgumentConversionException extends OptionException {
    constructor(arg0: OptionSpec<Object>, arg1: string, arg2: Throwable)
    // private argument: string;
    messageArguments(): Object[];
}