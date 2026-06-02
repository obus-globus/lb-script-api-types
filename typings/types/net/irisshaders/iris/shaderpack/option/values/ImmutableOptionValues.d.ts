import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { OptionalBoolean } from '../../../../../../net/irisshaders/iris/helpers/OptionalBoolean.d.ts'
import type { OptionSet } from '../../../../../../net/irisshaders/iris/shaderpack/option/OptionSet.d.ts'
import type { MutableOptionValues } from '../../../../../../net/irisshaders/iris/shaderpack/option/values/MutableOptionValues.d.ts'
import type { OptionValues } from '../../../../../../net/irisshaders/iris/shaderpack/option/values/OptionValues.d.ts'
export class ImmutableOptionValues extends Object implements OptionValues {
    constructor(arg0: OptionSet, arg1: { [key: string]: boolean }, arg2: { [key: string]: string })
    // private booleanValues: { [key: string]: boolean };
    // private options: OptionSet;
    // private stringValues: { [key: string]: string };
    getBooleanValue(arg0: string): OptionalBoolean;
    getBooleanValueOrDefault(arg0: string): boolean;
    getOptionSet(): OptionSet;
    getOptionsChanged(): number;
    getStringValue(arg0: string): Optional<string>;
    getStringValueOrDefault(arg0: string): string;
    mutableCopy(): MutableOptionValues;
    toImmutable(): ImmutableOptionValues;
}