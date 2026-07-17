import type { JavaMap } from '../JavaMap.d.ts'
import type { AbstractOptionSpec } from '../joptsimple/AbstractOptionSpec.d.ts'
import type { OptionSpec } from '../joptsimple/OptionSpec.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
export class OptionSet extends Object {
    constructor(arg0: JavaMap<string, AbstractOptionSpec<Object>>)
    // private defaultValues: JavaMap<string, (Object | null)[]>;
    // private detectedOptions: JavaMap<string, AbstractOptionSpec<Object>>;
    // private detectedSpecs: OptionSpec<Object>[];
    // private optionsToArguments: JavaMap<AbstractOptionSpec<Object>, string[]>;
    // private recognizedSpecs: JavaMap<string, AbstractOptionSpec<Object>>;
    add(arg0: AbstractOptionSpec<Object>): void;
    addWithArgument(arg0: AbstractOptionSpec<Object>, arg1: string): void;
    asMap(): JavaMap<OptionSpec<Object>, (Object | null)[]>;
    // private defaultValueFor<V extends unknown>(arg0: OptionSpec<V>): V[];
    // private defaultValuesFor<V extends unknown>(arg0: string): V[];
    equals(arg0: Object | null): boolean;
    has(arg0: OptionSpec<Object>): boolean;
    has(arg0: string): boolean;
    hasArgument(arg0: OptionSpec<Object>): boolean;
    hasArgument(arg0: string): boolean;
    hasOptions(): boolean;
    hashCode(): number;
    nonOptionArguments(): (Object | null)[];
    specs(): OptionSpec<Object>[];
    valueOf<V extends unknown>(arg0: OptionSpec<V>): V;
    valueOf(arg0: string): Object;
    valuesOf<V extends unknown>(arg0: OptionSpec<V>): V[];
    valuesOf(arg0: string): (Object | null)[];
}