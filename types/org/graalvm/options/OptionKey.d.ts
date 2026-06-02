import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { OptionType } from '../../../org/graalvm/options/OptionType.d.ts'
import type { OptionValues } from '../../../org/graalvm/options/OptionValues.d.ts'
export class OptionKey<T extends Object | number | string | boolean> extends Object {
    static mapOf(paramvalueClass: Class<Object>): OptionKey<Object>;
    constructor(defaultValue: T)
    constructor(defaultValue: T, type: OptionType<T>)
    readonly defaultValue: T;
    readonly type: OptionType<T>;
    getDefaultValue(): T;
    getType(): OptionType<T>;
    getValue(values: OptionValues): T;
    hasBeenSet(values: OptionValues): boolean;
}