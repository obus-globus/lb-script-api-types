import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { OptionalBoolean } from '../../../../../../net/irisshaders/iris/helpers/OptionalBoolean.d.ts'
import type { OptionSet } from '../../../../../../net/irisshaders/iris/shaderpack/option/OptionSet.d.ts'
import type { ImmutableOptionValues } from '../../../../../../net/irisshaders/iris/shaderpack/option/values/ImmutableOptionValues.d.ts'
import type { OptionValues } from '../../../../../../net/irisshaders/iris/shaderpack/option/values/OptionValues.d.ts'
export class MutableOptionValues extends Object implements OptionValues {
    constructor(arg0: OptionSet, arg1: JavaMap<string, boolean>, arg2: JavaMap<string, string>)
    constructor(arg0: OptionSet, arg1: JavaMap<string, string>)
    readonly booleanValues: JavaMap<string, boolean>;
    readonly options: OptionSet;
    readonly stringValues: JavaMap<string, string>;
    addAll(arg0: JavaMap<string, string>): void;
    getBooleanValue(arg0: string): OptionalBoolean;
    getBooleanValueOrDefault(arg0: string): boolean;
    getBooleanValues(): JavaMap<string, boolean>;
    getOptionSet(): OptionSet;
    getOptions(): OptionSet;
    getOptionsChanged(): number;
    getStringValue(arg0: string): Optional<string>;
    getStringValueOrDefault(arg0: string): string;
    getStringValues(): JavaMap<string, string>;
    mutableCopy(): MutableOptionValues;
    toImmutable(): ImmutableOptionValues;
}