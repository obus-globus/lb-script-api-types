import type { ArgumentList } from '../joptsimple/ArgumentList.d.ts'
import type { OptionDescriptor } from '../joptsimple/OptionDescriptor.d.ts'
import type { OptionParser } from '../joptsimple/OptionParser.d.ts'
import type { OptionSet } from '../joptsimple/OptionSet.d.ts'
import type { OptionSpec } from '../joptsimple/OptionSpec.d.ts'
import type { ValueConverter } from '../joptsimple/ValueConverter.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
export abstract class AbstractOptionSpec<V extends Object | number | string | boolean> extends Object implements OptionDescriptor, OptionSpec<V> {
    constructor(arg0: string)
    constructor(arg0: string[], arg1: string)
    // private description: string;
    // private options: string[];
    argumentTypeIndicatorFrom(arg0: ValueConverter<V>): string;
    // private arrangeOptions(arg0: string[]): void;
    convert(arg0: string): V;
    convertWith(arg0: ValueConverter<V>, arg1: string): V;
    description(): string;
    equals(arg0: Object | null): boolean;
    forHelp(): AbstractOptionSpec<V>;
    handleOption(arg0: OptionParser, arg1: ArgumentList, arg2: OptionSet, arg3: string): void;
    hashCode(): number;
    isForHelp(): boolean;
    options(): string[];
    representsNonOptions(): boolean;
    toString(): string;
    value(arg0: OptionSet): V;
    values(arg0: OptionSet): V[];
}