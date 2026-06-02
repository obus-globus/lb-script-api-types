import type { OptionException } from '../joptsimple/OptionException.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
export class UnconfiguredOptionException extends OptionException {
    constructor(arg0: string)
    constructor(arg0: string[])
    messageArguments(): Object[];
}