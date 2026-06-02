import type { AbstractOptionSpec } from '../joptsimple/AbstractOptionSpec.d.ts'
import type { ArgumentList } from '../joptsimple/ArgumentList.d.ts'
import type { OptionParser } from '../joptsimple/OptionParser.d.ts'
import type { OptionSet } from '../joptsimple/OptionSet.d.ts'
export class NoArgumentOptionSpec extends AbstractOptionSpec<void> {
    constructor(arg0: string)
    constructor(arg0: string[], arg1: string)
    acceptsArguments(): boolean;
    argumentDescription(): string;
    argumentTypeIndicator(): string;
    convert(arg0: string): void;
    defaultValues(): void[];
    handleOption(arg0: OptionParser, arg1: ArgumentList, arg2: OptionSet, arg3: string): void;
    isRequired(): boolean;
    requiresArgument(): boolean;
}