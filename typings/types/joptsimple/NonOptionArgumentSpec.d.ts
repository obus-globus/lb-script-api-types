import type { Class } from '../java/lang/Class.d.ts'
import type { AbstractOptionSpec } from '../joptsimple/AbstractOptionSpec.d.ts'
import type { ArgumentList } from '../joptsimple/ArgumentList.d.ts'
import type { OptionParser } from '../joptsimple/OptionParser.d.ts'
import type { OptionSet } from '../joptsimple/OptionSet.d.ts'
import type { ValueConverter } from '../joptsimple/ValueConverter.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
export class NonOptionArgumentSpec<V extends Object | number | string | boolean> extends AbstractOptionSpec<V> {
    constructor()
    constructor(arg0: string)
    // private argumentDescription: string;
    // private converter: ValueConverter<V>;
    acceptsArguments(): boolean;
    argumentDescription(): string;
    argumentTypeIndicator(): string;
    convert(arg0: string): V;
    defaultValues(): (Object | null)[];
    describedAs(arg0: string): NonOptionArgumentSpec<V>;
    handleOption(arg0: OptionParser, arg1: ArgumentList, arg2: OptionSet, arg3: string): void;
    isRequired(): boolean;
    ofType<T extends Object | number | string | boolean>(arg0: Class<T>): NonOptionArgumentSpec<T>;
    representsNonOptions(): boolean;
    requiresArgument(): boolean;
    withValuesConvertedBy<T extends Object | number | string | boolean>(arg0: ValueConverter<T>): NonOptionArgumentSpec<T>;
}