import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { OptionalBoolean } from '../../../../../../net/irisshaders/iris/helpers/OptionalBoolean.d.ts'
import type { OptionSet } from '../../../../../../net/irisshaders/iris/shaderpack/option/OptionSet.d.ts'
import type { ImmutableOptionValues } from '../../../../../../net/irisshaders/iris/shaderpack/option/values/ImmutableOptionValues.d.ts'
import type { OptionValues } from '../../../../../../net/irisshaders/iris/shaderpack/option/values/OptionValues.d.ts'
export class MutableOptionValues extends Object implements OptionValues {
    constructor(arg0: OptionSet, arg1: { [key: string]: boolean }, arg2: { [key: string]: string })
    constructor(arg0: OptionSet, arg1: { [key: string]: string })
    readonly booleanValues: { [key: string]: boolean };
    readonly options: OptionSet;
    readonly stringValues: { [key: string]: string };
    addAll(arg0: { [key: string]: string }): void;
    getBooleanValue(arg0: string): OptionalBoolean;
    getBooleanValueOrDefault(arg0: string): boolean;
    getBooleanValues(): { [key: string]: boolean };
    getOptionSet(): OptionSet;
    getOptions(): OptionSet;
    getOptionsChanged(): number;
    getStringValue(arg0: string): Optional<string>;
    getStringValueOrDefault(arg0: string): string;
    getStringValues(): { [key: string]: string };
    mutableCopy(): MutableOptionValues;
    toImmutable(): ImmutableOptionValues;
}