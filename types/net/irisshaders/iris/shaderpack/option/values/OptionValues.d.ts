import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { OptionalBoolean } from '../../../../../../net/irisshaders/iris/helpers/OptionalBoolean.d.ts'
import type { OptionSet } from '../../../../../../net/irisshaders/iris/shaderpack/option/OptionSet.d.ts'
import type { ImmutableOptionValues } from '../../../../../../net/irisshaders/iris/shaderpack/option/values/ImmutableOptionValues.d.ts'
import type { MutableOptionValues } from '../../../../../../net/irisshaders/iris/shaderpack/option/values/MutableOptionValues.d.ts'
export interface OptionValues extends Object{
    getBooleanValue(arg0: string): OptionalBoolean;
    getBooleanValueOrDefault(arg0: string): boolean;
    getOptionSet(): OptionSet;
    getOptionsChanged(): number;
    getStringValue(arg0: string): Optional<string>;
    getStringValueOrDefault(arg0: string): string;
    mutableCopy(): MutableOptionValues;
    toImmutable(): ImmutableOptionValues;
}