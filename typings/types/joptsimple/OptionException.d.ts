import type { RuntimeException } from '../java/lang/RuntimeException.d.ts'
import type { Locale } from '../java/util/Locale.d.ts'
import type { OptionSpec } from '../joptsimple/OptionSpec.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Throwable } from '../java/lang/Throwable.d.ts'
export abstract class OptionException extends RuntimeException {
    constructor(arg0: E[])
    constructor(arg0: E[], arg1: Throwable)
    constructor(arg0: string[])
    readonly message: string | null;
    // private options: string[];
    // private formattedMessage(arg0: Locale): string;
    localizedMessage(arg0: Locale): string;
    messageArguments(): Object[];
    multipleOptionString(): string;
    options(): string[];
    singleOptionString(): string;
    singleOptionString(arg0: string): string;
    // private specToString(arg0: OptionSpec<Object>): string;
    // private specsToStrings(arg0: E[]): string[];
}