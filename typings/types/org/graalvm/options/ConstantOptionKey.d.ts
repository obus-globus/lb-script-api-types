import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { OptionKey } from '../../../org/graalvm/options/OptionKey.d.ts'
import type { OptionMap } from '../../../org/graalvm/options/OptionMap.d.ts'
import type { OptionType } from '../../../org/graalvm/options/OptionType.d.ts'
export class ConstantOptionKey<T extends unknown> extends OptionKey<T> {
    static mapOf<V extends unknown>(paramvalueClass: Class<V>): OptionKey<OptionMap<V>>;
    constructor(defaultValue: T)
    constructor(defaultValue: T, type: OptionType<T>)
    readonly constantValue: Object;
    getConstantValue(): T;
    setConstantValue(value: T): void;
}