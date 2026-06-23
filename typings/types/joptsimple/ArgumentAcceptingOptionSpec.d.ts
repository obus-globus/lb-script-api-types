import type { Class } from '../java/lang/Class.d.ts'
import type { AbstractOptionSpec } from '../joptsimple/AbstractOptionSpec.d.ts'
import type { ArgumentList } from '../joptsimple/ArgumentList.d.ts'
import type { OptionParser } from '../joptsimple/OptionParser.d.ts'
import type { OptionSet } from '../joptsimple/OptionSet.d.ts'
import type { ValueConverter } from '../joptsimple/ValueConverter.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
export abstract class ArgumentAcceptingOptionSpec<V extends unknown> extends AbstractOptionSpec<V> {
    constructor(arg0: string, arg1: boolean)
    constructor(arg0: string[], arg1: boolean, arg2: string)
    // private argumentDescription: string;
    // private argumentRequired: boolean;
    // private converter: ValueConverter<V>;
    // private defaultValues: V[];
    // private optionRequired: boolean;
    // private valueSeparator: string;
    acceptsArguments(): boolean;
    addArguments(arg0: OptionSet, arg1: string): void;
    // private addDefaultValue(arg0: V): void;
    argumentDescription(): string;
    argumentTypeIndicator(): string;
    canConvertArgument(arg0: string): boolean;
    convert(arg0: string): V;
    defaultValues(): V[];
    defaultsTo(arg0: V, arg1: V[]): ArgumentAcceptingOptionSpec<V>;
    defaultsTo(arg0: V[]): ArgumentAcceptingOptionSpec<V>;
    describedAs(arg0: string): ArgumentAcceptingOptionSpec<V>;
    detectOptionArgument(arg0: OptionParser, arg1: ArgumentList, arg2: OptionSet): void;
    equals(arg0: Object | null): boolean;
    handleOption(arg0: OptionParser, arg1: ArgumentList, arg2: OptionSet, arg3: string): void;
    hashCode(): number;
    isArgumentOfNumberType(): boolean;
    isRequired(): boolean;
    ofType<T extends unknown>(arg0: Class<T>): ArgumentAcceptingOptionSpec<T>;
    required(): ArgumentAcceptingOptionSpec<V>;
    requiresArgument(): boolean;
    withValuesConvertedBy<T extends unknown>(arg0: ValueConverter<T>): ArgumentAcceptingOptionSpec<T>;
    withValuesSeparatedBy(arg0: string): ArgumentAcceptingOptionSpec<V>;
}