import type { ArgumentAcceptingOptionSpec } from '../joptsimple/ArgumentAcceptingOptionSpec.d.ts'
import type { NoArgumentOptionSpec } from '../joptsimple/NoArgumentOptionSpec.d.ts'
import type { OptionParser } from '../joptsimple/OptionParser.d.ts'
import type { OptionSpec } from '../joptsimple/OptionSpec.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
export class OptionSpecBuilder extends NoArgumentOptionSpec {
    constructor(arg0: OptionParser, arg1: string[], arg2: string)
    // private parser: OptionParser;
    // private attachToParser(): void;
    availableIf(arg0: OptionSpec<Object>, arg1: OptionSpec<Object>[]): OptionSpecBuilder;
    availableIf(arg0: string, arg1: string[]): OptionSpecBuilder;
    availableUnless(arg0: OptionSpec<Object>, arg1: OptionSpec<Object>[]): OptionSpecBuilder;
    availableUnless(arg0: string, arg1: string[]): OptionSpecBuilder;
    requiredIf(arg0: OptionSpec<Object>, arg1: OptionSpec<Object>[]): OptionSpecBuilder;
    requiredIf(arg0: string, arg1: string[]): OptionSpecBuilder;
    requiredUnless(arg0: OptionSpec<Object>, arg1: OptionSpec<Object>[]): OptionSpecBuilder;
    requiredUnless(arg0: string, arg1: string[]): OptionSpecBuilder;
    // private validatedDependents(arg0: string, arg1: string[]): string[];
    withOptionalArg(): ArgumentAcceptingOptionSpec<string>;
    withRequiredArg(): ArgumentAcceptingOptionSpec<string>;
}